# Para matematicas
import numpy as np
# Analizar datos de csv o excel
import pandas as pd

# Es el excel reducido que genera extraccion_entidad.py
nombre = "Datos_Guanajuato.xlsx"
# Cuantos grupos se quieren
k = 3

# K-means solo trabaja con numeros, aqui se agregan o se quitan columnas
columnas = [
    "edad_anios",
    "calificacion",
    "factores_ambientales_calificacion",
    "calificacion_funciones_final",
    "calificacion_estructuras_final",
]


def k_means(datos, k, repeticiones=10, semilla=0):
    # La semilla es para que siempre salga el mismo resultado
    azar = np.random.default_rng(semilla)
    mejor_inercia = np.inf
    # Se repite con centros iniciales distintos y se queda el mejor intento,
    # porque el resultado depende de donde empiezan los centros
    for _ in range(repeticiones):
        # Paso 1: k filas al azar son los centros iniciales
        centros = datos[azar.choice(len(datos), k, replace=False)]
        while True:
            # Paso 2: distancia (al cuadrado) de cada fila a cada centro,
            # cada fila se va al grupo del centro que le queda mas cerca
            distancias = ((datos[:, None] - centros) ** 2).sum(axis=2)
            grupos = distancias.argmin(axis=1)
            # Paso 3: cada centro se mueve al promedio de las filas de su grupo
            nuevos = centros.copy()
            for i in range(k):
                if (grupos == i).any():
                    nuevos[i] = datos[grupos == i].mean(axis=0)
            # Paso 4: se repiten 2 y 3 hasta que los centros ya no se mueven
            if np.allclose(nuevos, centros):
                break
            centros = nuevos
        # Inercia: suma de las distancias de cada fila a su centro, entre menor mejor
        inercia = distancias.min(axis=1).sum()
        if inercia < mejor_inercia:
            mejor_inercia = inercia
            mejores_grupos = grupos
            mejores_centros = centros
    return mejores_grupos, mejores_centros, mejor_inercia


bd = pd.read_excel(nombre)
# K-means no acepta celdas vacias
bd = bd.dropna(subset=columnas)

# Se escala cada columna (promedio 0 y desviacion 1),
# si no la columna con numeros mas grandes (edad) pesaria mas que las demas
datos = bd[columnas].to_numpy(dtype=float)
datos = (datos - datos.mean(axis=0)) / datos.std(axis=0)

# Metodo del codo: la inercia siempre baja al subir k,
# se escoge el k donde deja de bajar mucho
for i in range(1, 9):
    inercia = k_means(datos, i)[2]
    print(f"k = {i}, inercia = {inercia:.0f}")

grupos, centros, inercia = k_means(datos, k)
bd["grupo"] = grupos

print(f"Personas por grupo: \n{bd['grupo'].value_counts().sort_index()}")
# El promedio de cada columna es lo que describe a cada grupo
print(f"Promedios por grupo: \n{bd.groupby('grupo')[columnas].mean().round(1).to_string()}")
