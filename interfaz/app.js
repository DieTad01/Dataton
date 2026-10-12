// DATOS viene de datos.js, que lo genera interfaz.py
// Tiene una entrada "Nacional" y una por cada estado

// Lo que se esta viendo ahorita
let ambito = "Guanajuato";
let pestana = "discapacidad";

// Con menos personas que esto un promedio no es confiable
const POCOS = 30;

const selector = document.getElementById("selector-ambito");
const globo = document.getElementById("globo");

// 1234.5 -> "1,234.5"
function numero(valor, decimales = 0) {
    return valor.toLocaleString("es-MX", {
        minimumFractionDigits: decimales,
        maximumFractionDigits: decimales,
    });
}

// ---------- Barras ----------

// filas: lista de {nombre, valor, n, detalle}
// opciones:
//   color       "disc", "econ" o "gris"
//   unidad      lo que va despues del numero, por ejemplo "%"
//   decimales   cuantos decimales se muestran
//   referencia  las mismas filas pero del pais, para dibujar la raya
//   grupos      true si cada barra es el promedio de un grupo de n personas
//   resaltar    nombre de la unica barra que va con color, las demas en gris
//   alClic      funcion que recibe el nombre de la barra
function barras(id, filas, opciones) {
    const contenedor = document.getElementById(id);
    const unidad = opciones.unidad || "";
    const decimales = opciones.decimales ?? 1;
    const referencia = opciones.referencia || [];

    // La barra mas larga (o la raya mas lejana) ocupa todo el ancho
    let maximo = 0;
    for (const fila of filas.concat(referencia)) {
        maximo = Math.max(maximo, fila.valor);
    }

    contenedor.innerHTML = "";
    for (const fila of filas) {
        const nacional = referencia.find((otra) => otra.nombre === fila.nombre);

        let color = opciones.color;
        if (opciones.resaltar && opciones.resaltar !== fila.nombre) {
            color = "gris";
        }

        const elemento = document.createElement("div");
        elemento.className = "fila";
        elemento.tabIndex = 0;
        if (opciones.grupos && fila.n < POCOS) {
            elemento.classList.add("pocos");
        }

        let raya = "";
        if (nacional) {
            raya = `<i class="raya" style="left: ${(nacional.valor / maximo) * 100}%"></i>`;
        }
        let detalle = "";
        if (fila.detalle) {
            detalle = `<small>${fila.detalle}</small>`;
        }
        elemento.innerHTML = `
            <div class="etiqueta">${fila.nombre}${detalle}</div>
            <div class="pista">
                <div class="barra ${color}" style="width: ${(fila.valor / maximo) * 100}%"></div>
                ${raya}
            </div>
            <div class="valor">${numero(fila.valor, decimales)}${unidad}</div>
        `;

        // Texto del globo
        let lineas = `<b>${fila.nombre}</b>`;
        lineas += `<span>${numero(fila.valor, decimales)}${unidad}`;
        if (opciones.grupos) {
            lineas += ` · promedio de ${numero(fila.n)} personas</span>`;
            if (fila.n < POCOS) {
                lineas += "<span>Son muy pocas personas para confiar en este promedio</span>";
            }
        } else if (fila.n !== undefined) {
            lineas += ` · ${numero(fila.n)} personas</span>`;
        } else {
            lineas += "</span>";
        }
        if (nacional) {
            lineas += `<span>Nacional: ${numero(nacional.valor, decimales)}${unidad}</span>`;
        }
        elemento.addEventListener("mousemove", (evento) => mostrarGlobo(lineas, evento.clientX, evento.clientY));
        elemento.addEventListener("mouseleave", ocultarGlobo);
        elemento.addEventListener("focus", () => {
            const caja = elemento.getBoundingClientRect();
            mostrarGlobo(lineas, caja.left + caja.width / 2, caja.top);
        });
        elemento.addEventListener("blur", ocultarGlobo);

        if (opciones.alClic) {
            elemento.classList.add("clic");
            elemento.addEventListener("click", () => opciones.alClic(fila.nombre));
            elemento.addEventListener("keydown", (evento) => {
                if (evento.key === "Enter") {
                    opciones.alClic(fila.nombre);
                }
            });
        }

        contenedor.appendChild(elemento);
    }
}

function mostrarGlobo(html, x, y) {
    globo.innerHTML = html;
    globo.hidden = false;
    // Que no se salga de la pantalla
    const ancho = globo.offsetWidth;
    const alto = globo.offsetHeight;
    let izquierda = x + 14;
    if (izquierda + ancho > window.innerWidth - 8) {
        izquierda = x - ancho - 14;
    }
    let arriba = y + 14;
    if (arriba + alto > window.innerHeight - 8) {
        arriba = y - alto - 14;
    }
    globo.style.left = `${Math.max(8, izquierda)}px`;
    globo.style.top = `${Math.max(8, arriba)}px`;
}

function ocultarGlobo() {
    globo.hidden = true;
}

// ---------- Cifras principales ----------

// cifras: lista de {nombre, valor, nacional}, valor y nacional ya vienen como texto
function cifras(id, lista) {
    const contenedor = document.getElementById(id);
    contenedor.innerHTML = "";
    for (const cifra of lista) {
        let comparacion = "";
        if (cifra.nacional && ambito !== "Nacional") {
            comparacion = `<div class="comparacion">Nacional: ${cifra.nacional}</div>`;
        }
        contenedor.innerHTML += `
            <div class="cifra">
                <div class="nombre">${cifra.nombre}</div>
                <div class="numero">${cifra.valor}</div>
                ${comparacion}
            </div>
        `;
    }
}

// ---------- Tabla de carencias contra calificacion ----------

function matriz(id, relacion) {
    const niveles = relacion.carencias_por_nivel.map((fila) => fila.nombre);
    const personas = relacion.personas_por_nivel.filter((n) => n > 0);

    let html = '<table class="matriz"><thead><tr><th></th>';
    niveles.forEach((nivel, i) => {
        html += `<th>Calificación ${nivel}<small>${numero(personas[i])} personas</small></th>`;
    });
    html += "</tr></thead><tbody>";

    for (const fila of relacion.matriz) {
        html += `<tr><th>${fila.nombre}</th>`;
        const celdas = fila.celdas.filter((valor) => valor !== null);
        celdas.forEach((valor, i) => {
            // Entre mas alto el porcentaje, mas fuerte el color
            const fuerza = Math.round(valor * 0.6);
            const pocos = personas[i] < POCOS ? ' class="pocos"' : "";
            html += `<td${pocos} style="background: color-mix(in srgb, var(--econ) ${fuerza}%, var(--superficie))">${numero(valor, 1)}%</td>`;
        });
        html += "</tr>";
    }
    html += "</tbody></table>";
    document.getElementById(id).innerHTML = html;
}

// ---------- Dibujar todo ----------

function dibujar() {
    const datos = DATOS[ambito];
    const pais = DATOS["Nacional"];
    // La raya nacional solo tiene sentido cuando se ve un estado
    const comparar = ambito !== "Nacional";
    document.getElementById("leyenda-nacional").hidden = !comparar;
    document.getElementById("total-personas").textContent = numero(pais.discapacidad.personas);

    function ref(lista) {
        return comparar ? lista : [];
    }

    // Discapacidad
    const d = datos.discapacidad;
    cifras("cifras-discapacidad", [
        { nombre: "Personas", valor: numero(d.personas) },
        { nombre: "Edad mediana", valor: `${d.edad_mediana} años`, nacional: `${pais.discapacidad.edad_mediana} años` },
        { nombre: "Calificación promedio", valor: numero(d.calificacion, 1), nacional: numero(pais.discapacidad.calificacion, 1) },
        { nombre: "Necesita algún apoyo", valor: `${numero(d.necesita_apoyo, 1)}%`, nacional: `${numero(pais.discapacidad.necesita_apoyo, 1)}%` },
    ]);
    barras("disc-nivel", d.nivel, { color: "disc", unidad: "%", referencia: ref(pais.discapacidad.nivel) });
    barras("disc-apoyo", d.apoyo, { color: "disc", unidad: "%", referencia: ref(pais.discapacidad.apoyo) });
    barras("disc-condicion", d.condicion, { color: "disc", unidad: "%", referencia: ref(pais.discapacidad.condicion) });
    barras("disc-origen", d.origen, { color: "disc", unidad: "%", referencia: ref(pais.discapacidad.origen) });
    barras("disc-edad", d.edad, { color: "disc", unidad: "%", referencia: ref(pais.discapacidad.edad) });

    // Economia
    const e = datos.economia;
    cifras("cifras-economia", [
        { nombre: "Personas de 18 a 64 años", valor: numero(e.personas) },
        { nombre: "Carencias promedio (de 5)", valor: numero(e.carencias_promedio, 2), nacional: numero(pais.economia.carencias_promedio, 2) },
        { nombre: "Depende económicamente de alguien", valor: `${numero(e.dependiente, 1)}%`, nacional: `${numero(pais.economia.dependiente, 1)}%` },
        { nombre: "Recibe un apoyo social", valor: `${numero(e.apoyo_social, 1)}%`, nacional: `${numero(pais.economia.apoyo_social, 1)}%` },
    ]);
    barras("econ-carencias", e.carencias, { color: "econ", unidad: "%", referencia: ref(pais.economia.carencias) });
    barras("econ-actividad", e.actividad, { color: "econ", unidad: "%", referencia: ref(pais.economia.actividad) });
    barras("econ-salud", e.salud, { color: "econ", unidad: "%", referencia: ref(pais.economia.salud) });
    barras("econ-escolaridad", e.escolaridad, { color: "econ", unidad: "%", referencia: ref(pais.economia.escolaridad) });

    // Relacion
    const r = datos.relacion;
    // "2" -> "2 carencias"
    function conNombre(lista) {
        return lista.map((fila) => ({
            ...fila,
            nombre: fila.nombre === "1" ? "1 carencia" : `${fila.nombre} carencias`,
        }));
    }
    // La calificacion es de discapacidad (azul), las carencias son de economia (naranja)
    barras("rel-calificacion", conNombre(r.calificacion_por_carencias), {
        color: "disc",
        grupos: true,
        referencia: ref(conNombre(pais.relacion.calificacion_por_carencias)),
    });
    barras("rel-apoyo", r.carencias_por_apoyo, {
        color: "econ",
        decimales: 2,
        grupos: true,
        referencia: ref(pais.relacion.carencias_por_apoyo),
    });
    matriz("rel-matriz", r);

    // Los estados de mayor a menor
    const estados = [];
    for (const nombre of Object.keys(DATOS)) {
        if (nombre !== "Nacional") {
            estados.push({
                nombre: nombre,
                valor: DATOS[nombre].economia.carencias_promedio,
                n: DATOS[nombre].economia.personas,
            });
        }
    }
    estados.sort((a, b) => b.valor - a.valor);
    barras("rel-estados", estados, {
        color: "econ",
        decimales: 2,
        grupos: true,
        resaltar: comparar ? ambito : null,
        alClic: cambiarAmbito,
    });
}

// ---------- Controles ----------

function cambiarAmbito(nombre) {
    ambito = nombre;
    selector.value = nombre;
    ocultarGlobo();
    dibujar();
}

function cambiarPestana(nombre) {
    pestana = nombre;
    for (const seccion of document.querySelectorAll(".pestana")) {
        seccion.classList.toggle("activa", seccion.id === nombre);
    }
    for (const boton of document.querySelectorAll(".pestanas button")) {
        boton.setAttribute("aria-selected", boton.dataset.pestana === nombre);
    }
}

for (const nombre of Object.keys(DATOS)) {
    selector.add(new Option(nombre, nombre));
}
selector.addEventListener("change", () => cambiarAmbito(selector.value));

for (const boton of document.querySelectorAll(".pestanas button")) {
    boton.addEventListener("click", () => cambiarPestana(boton.dataset.pestana));
}

cambiarPestana(pestana);
cambiarAmbito(ambito);
