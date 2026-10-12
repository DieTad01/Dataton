# Para guardar los resultados en un archivo que lee la pagina
import json
# Analizar datos de csv o excel
import pandas as pd

# El csv tiene las mismas filas que el excel y se lee en segundos
nombre = "Datos.csv"
# Archivo de datos que usa interfaz/index.html
salida = "interfaz/datos.js"
# Los estados con menos adultos que esto no salen en la interfaz, son muy pocos datos
minimo_personas = 200

columnas = [
    "edad_anios",
    "entidad_residenciad",
    "escolaridadd",
    "condicion_actividad_economicad",
    "afiliacion_servicios_saludd",
    "dependiente_economicod",
    "recibe_apoyo_sociald",
    "tipo_viviendad",
    "necesita_apoyod",
    "cond_salud_origend",
    "cond_salud_codigo_cie11",
    "calificacion",
    "calificacion_funciones_final",
]

# Aparatos de apoyo, de cada uno hay una columna utiliza_ y otra necesitaria_
aparatos = [
    "baston_palo",
    "muleta",
    "ortesis",
    "cojin",
    "protesis",
    "andador_ruedas",
    "bipedestador",
    "calzado",
    "triciclo",
    "andador",
    "silla_ruedas",
    "gafas",
    "baston_largo",
    "audifono",
    "otros",
]
for aparato in aparatos:
    columnas.append(f"utiliza_{aparato}d")
    columnas.append(f"necesitaria_{aparato}d")

bd = pd.read_csv(nombre, usecols=columnas)
# Hay una fila con edad de 2014
bd = bd[bd["edad_anios"] <= 110].copy()


# ---------- Ambito de discapacidad ----------

# Rangos de la calificacion del certificado (en la bd va de 25 a 97)
bd["nivel"] = pd.cut(
    bd["calificacion"],
    [0, 40, 55, 70, 101],
    right=False,
    labels=["25 a 40", "40 a 55", "55 a 70", "70 o más"],
).astype(str)

# Del apoyo mas ligero al mas fuerte
bd["apoyo"] = bd["necesita_apoyod"].map({
    "NO REQUIERE": "No requiere",
    "INCITACIÓN VERBAL/GESTUAL": "Incitación verbal o gestual",
    "SUPERVISIÓN": "Supervisión",
    "AYUDA FÍSICA PARCIAL": "Ayuda física parcial",
    "AYUDA FÍSICA TOTAL": "Ayuda física total",
})

# Lo que no esta en la lista se va a "Otra causa o no aplica"
bd["origen"] = bd["cond_salud_origend"].map({
    "CONGÉNITA": "Congénita (de nacimiento)",
    "ENFERMEDAD CRÓNICO-DEGENERATIVA": "Enfermedad crónico-degenerativa",
    "CAUSA EXTERNA (ACCIDENTAL O VIOLENTA)": "Accidente o violencia",
    "PROBLEMAS PERINATALES": "Embarazo, parto o recién nacido",
    "PROBLEMAS EN EL PERIODO DE EMBARAZO O EN EL PARTO": "Embarazo, parto o recién nacido",
    "COMPLICACIONES EN EL EMBARAZO": "Embarazo, parto o recién nacido",
    "ENFERMEDAD INFECCIOSA O PARASITARIA": "Enfermedad infecciosa",
}).fillna("Otra causa o no aplica")

# El primer caracter del codigo CIE-11 dice de que capitulo es la condicion
bd["condicion"] = bd["cond_salud_codigo_cie11"].str[0].map({
    "6": "Mental y del neurodesarrollo",
    "8": "Sistema nervioso",
    "F": "Músculos, huesos y articulaciones",
    "N": "Lesiones y traumatismos",
    "9": "Visión",
    "L": "Anomalías del desarrollo",
    "A": "Oído",
    "M": "Síntomas generales",
}).fillna("Otras")

# Ejemplos de cada grupo, son las condiciones mas repetidas en la bd
ejemplos = {
    "Mental y del neurodesarrollo": "autismo, discapacidad intelectual",
    "Sistema nervioso": "epilepsia, parálisis cerebral",
    "Músculos, huesos y articulaciones": "artritis, artrosis de rodilla",
    "Lesiones y traumatismos": "amputaciones, fracturas",
    "Visión": "ceguera, retinopatía diabética",
    "Anomalías del desarrollo": "síndrome de Down",
    "Oído": "hipoacusia, pérdida auditiva",
    "Síntomas generales": "problemas de marcha, hemiplejia",
    "Otras": "enfermedad renal, ausencia de un miembro, tumores",
}

bd["edad"] = pd.cut(
    bd["edad_anios"],
    [0, 6, 18, 30, 45, 65, 200],
    right=False,
    labels=["0 a 5", "6 a 17", "18 a 29", "30 a 44", "45 a 64", "65 o más"],
).astype(str)


# ---------- Ambito de economia ----------

bd["actividad"] = bd["condicion_actividad_economicad"].map({
    "ACTUALMENTE NO TRABAJA/ESTUDIA DEBIDO A BARRERAS SIGNIFICATIVAS RELACIONADAS CON SU ENTORNO": "No trabaja ni estudia por barreras del entorno",
    "TIENE TRABAJO": "Tiene trabajo",
    "DEDICADO A QUEHACERES DEL HOGAR": "Quehaceres del hogar",
    "JUBILADO O PENSIONADO": "Jubilado o pensionado",
    "ESTUDIANTE": "Estudiante",
    "ESTÁ BUSCANDO TRABAJO": "Busca trabajo",
}).fillna("Otra o no aplica")

bd["salud"] = bd["afiliacion_servicios_saludd"].map({
    "NINGUNA": "Ninguna",
    "IMSS": "IMSS",
    "BIENESTAR": "Bienestar",
    "ISSSTE": "ISSSTE",
}).fillna("Otra o no especificado")

# Ultimo nivel que si termino
bd["escolaridad"] = bd["escolaridadd"].map({
    "NINGUNA": "Sin primaria terminada",
    "PREESCOLAR INCOMPLETA": "Sin primaria terminada",
    "PREESCOLAR COMPLETA": "Sin primaria terminada",
    "PRIMARIA INCOMPLETA": "Sin primaria terminada",
    "PRIMARIA COMPLETA": "Primaria",
    "SECUNDARIA INCOMPLETA": "Primaria",
    "TÉCNICO TERMINAL CON SECUNDARIA INCOMPLETA": "Primaria",
    "SECUNDARIA COMPLETA": "Secundaria",
    "BACHILLERATO O PREPARATORIA INCOMPLETA": "Secundaria",
    "TÉCNICO TERMINAL CON SECUNDARIA COMPLETA": "Secundaria",
    "TÉCNICO TERMINAL CON PREPARATORIA INCOMPLETA": "Secundaria",
    "BACHILLERATO O PREPARATORIA COMPLETA": "Bachillerato",
    "LICENCIATURA O PROFESIONAL INCOMPLETO": "Bachillerato",
    "TÉCNICO TERMINAL CON PREPARATORIA COMPLETA": "Bachillerato",
    "LICENCIATURA O PROFESIONAL COMPLETO": "Licenciatura o más",
    "POSGRADO INCOMPLETO": "Licenciatura o más",
    "POSGRADO COMPLETO": "Licenciatura o más",
}).fillna("No especificado")

# Las mismas 5 carencias que en carencias.py
bd["sin_salud"] = bd["afiliacion_servicios_saludd"] == "NINGUNA"
bd["rezago_educativo"] = bd["escolaridad"] == "Sin primaria terminada"
bd["sin_trabajo"] = bd["actividad"].isin([
    "No trabaja ni estudia por barreras del entorno",
    "Busca trabajo",
])
bd["vivienda_precaria"] = bd["tipo_viviendad"].isin([
    "VIVIENDA EN VECINDAD O CUARTERÍA",
    "VIVIENDA EN CUARTO DE AZOTEA DE UN EDIFICIO",
    "LOCAL NO CONSTRUIDO PARA HABITACIÓN",
    "VIVIENDA MÓVIL",
    "REFUGIO",
    "CAMPAMENTO DE DAMNIFICADOS",
    "ALBERGUE O DORMITORIO PÚBLICO PARA PERSONAS EN SITUACIÓN DE CALLE",
    "OTRA CLASE DE ALBERGUE PARA POBLACIÓN VULNERABLE",
])
# Necesitaria al menos un aparato que hoy no utiliza
bd["falta_ayuda_tecnica"] = False
for aparato in aparatos:
    necesita = bd[f"necesitaria_{aparato}d"] == "SI"
    utiliza = bd[f"utiliza_{aparato}d"] == "SI"
    bd["falta_ayuda_tecnica"] = bd["falta_ayuda_tecnica"] | (necesita & ~utiliza)

# Nombre de la columna y como se lee en la pagina
carencias = {
    "sin_salud": "Sin afiliación a servicios de salud",
    "rezago_educativo": "No terminó la primaria",
    "sin_trabajo": "Sin trabajo",
    "vivienda_precaria": "Vivienda precaria",
    "falta_ayuda_tecnica": "Le falta un aparato de apoyo",
}
# Cuantas carencias tiene cada persona, de 0 a 5
bd["carencias"] = bd[list(carencias)].sum(axis=1)

# Orden en el que salen las barras cuando el orden importa
orden_nivel = ["25 a 40", "40 a 55", "55 a 70", "70 o más"]
orden_apoyo = [
    "No requiere",
    "Incitación verbal o gestual",
    "Supervisión",
    "Ayuda física parcial",
    "Ayuda física total",
]
orden_edad = ["0 a 5", "6 a 17", "18 a 29", "30 a 44", "45 a 64", "65 o más"]
orden_escolaridad = [
    "Sin primaria terminada",
    "Primaria",
    "Secundaria",
    "Bachillerato",
    "Licenciatura o más",
    "No especificado",
]


# Grupos donde se junta lo que sobra, siempre van al final
sobrantes = [
    "Otras",
    "Otra causa o no aplica",
    "Otra o no aplica",
    "Otra o no especificado",
]


# Que porcentaje de las filas cae en cada valor de la columna
# Sin orden salen de mayor a menor
def reparto(filas, columna, orden=None):
    cuenta = filas[columna].value_counts()
    if orden is None:
        orden = [valor for valor in cuenta.index if valor not in sobrantes]
        orden += [valor for valor in cuenta.index if valor in sobrantes]
    lista = []
    for valor in orden:
        n = int(cuenta.get(valor, 0))
        lista.append({
            "nombre": valor,
            "valor": round(n / len(filas) * 100, 1),
            "n": n,
        })
    return lista


# Promedio de una columna numerica en cada grupo
def promedios(filas, grupo, columna, orden):
    lista = []
    for valor in orden:
        parte = filas[filas[grupo] == valor]
        if len(parte) > 0:
            lista.append({
                "nombre": str(valor),
                "valor": round(float(parte[columna].mean()), 2),
                "n": len(parte),
            })
    return lista


# Todo lo que muestra la pagina para un conjunto de filas (el pais o un estado)
def resumen(filas):
    # La economia solo de 18 a 64 años, para que escolaridad y trabajo apliquen a todos
    adultos = filas[filas["edad_anios"].between(18, 64)]

    condicion = reparto(filas, "condicion")
    for fila in condicion:
        fila["detalle"] = ejemplos[fila["nombre"]]

    lista_carencias = []
    for columna, texto in carencias.items():
        lista_carencias.append({
            "nombre": texto,
            "valor": round(float(adultos[columna].mean()) * 100, 1),
            "n": int(adultos[columna].sum()),
        })

    # % con cada carencia en cada nivel de calificacion
    matriz = []
    for columna, texto in carencias.items():
        celdas = []
        for nivel in orden_nivel:
            parte = adultos[adultos["nivel"] == nivel]
            if len(parte) > 0:
                celdas.append(round(float(parte[columna].mean()) * 100, 1))
            else:
                celdas.append(None)
        matriz.append({"nombre": texto, "celdas": celdas})

    return {
        "discapacidad": {
            "personas": len(filas),
            "edad_mediana": int(filas["edad_anios"].median()),
            "calificacion": round(float(filas["calificacion"].mean()), 1),
            "necesita_apoyo": round(float((filas["apoyo"] != "No requiere").mean()) * 100, 1),
            "nivel": reparto(filas, "nivel", orden_nivel),
            "apoyo": reparto(filas, "apoyo", orden_apoyo),
            "origen": reparto(filas, "origen"),
            "condicion": condicion,
            "edad": reparto(filas, "edad", orden_edad),
        },
        "economia": {
            "personas": len(adultos),
            "carencias_promedio": round(float(adultos["carencias"].mean()), 2),
            "dependiente": round(float((adultos["dependiente_economicod"] == "SI").mean()) * 100, 1),
            "apoyo_social": round(float((adultos["recibe_apoyo_sociald"] == "SI").mean()) * 100, 1),
            "carencias": lista_carencias,
            "actividad": reparto(adultos, "actividad"),
            "salud": reparto(adultos, "salud"),
            "escolaridad": reparto(adultos, "escolaridad", orden_escolaridad),
        },
        "relacion": {
            "calificacion_por_carencias": promedios(adultos, "carencias", "calificacion", range(6)),
            "funciones_por_carencias": promedios(adultos, "carencias", "calificacion_funciones_final", range(6)),
            "carencias_por_apoyo": promedios(adultos, "apoyo", "carencias", orden_apoyo),
            "carencias_por_nivel": promedios(adultos, "nivel", "carencias", orden_nivel),
            "personas_por_nivel": [int((adultos["nivel"] == nivel).sum()) for nivel in orden_nivel],
            "matriz": matriz,
        },
    }


# Como se escribe cada estado en la pagina, los demas solo pasan a minusculas
nombres_estado = {
    "CIUDAD DE MEXICO": "Ciudad de México",
    "MEXICO": "Estado de México",
    "QUERETARO": "Querétaro",
    "YUCATAN": "Yucatán",
    "VERACRUZ DE IGNACIO DE LA LLAVE": "Veracruz",
}

datos = {"Nacional": resumen(bd)}

adultos_por_estado = bd[bd["edad_anios"].between(18, 64)]["entidad_residenciad"].value_counts()
for estado in sorted(adultos_por_estado.index):
    if adultos_por_estado[estado] >= minimo_personas:
        nombre_estado = nombres_estado.get(estado, estado.title())
        datos[nombre_estado] = resumen(bd[bd["entidad_residenciad"] == estado])

# Se guarda como un archivo de javascript para que la pagina abra con doble clic,
# sin necesidad de levantar un servidor
with open(salida, "w", encoding="utf-8") as archivo:
    archivo.write("const DATOS = ")
    json.dump(datos, archivo, ensure_ascii=False, indent=1)
    archivo.write(";\n")

print(f"Ambitos: {list(datos)}")
print(f"Se genero {salida}")
