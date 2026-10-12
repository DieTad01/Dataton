# Analizar datos de csv o excel
import pandas as pd

# El csv tiene las mismas filas que el excel y se lee en segundos
nombre = "Datos.csv"
# Excel con las tablas de resultados
salida = "Carencias.xlsx"
# Los estados con menos personas que esto no se comparan, son muy pocos datos
minimo_personas = 200

columnas = [
    "edad_anios",
    "entidad_residenciad",
    "habla_lengua_indigenad",
    "escolaridadd",
    "condicion_actividad_economicad",
    "afiliacion_servicios_saludd",
    "tipo_viviendad",
    "necesita_apoyod",
    "calificacion",
    "calificacion_funciones_final",
    "calificacion_estructuras_final",
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
# Solo de 18 a 64 años, para que escolaridad y trabajo apliquen a todos
# (un niño no tiene rezago por no acabar la primaria ni carencia por no trabajar)
bd = bd[bd["edad_anios"].between(18, 64)].copy()

# La bd no trae ingreso, entonces la pobreza se mide con carencias,
# cada carencia es una columna de True o False

# No esta afiliado a ningun servicio de salud
bd["sin_salud"] = bd["afiliacion_servicios_saludd"] == "NINGUNA"

# No termino la primaria
bd["rezago_educativo"] = bd["escolaridadd"].isin([
    "NINGUNA",
    "PREESCOLAR INCOMPLETA",
    "PREESCOLAR COMPLETA",
    "PRIMARIA INCOMPLETA",
])

# No trabaja por barreras de su entorno o esta buscando trabajo
bd["sin_trabajo"] = bd["condicion_actividad_economicad"].isin([
    "ACTUALMENTE NO TRABAJA/ESTUDIA DEBIDO A BARRERAS SIGNIFICATIVAS RELACIONADAS CON SU ENTORNO",
    "ESTÁ BUSCANDO TRABAJO",
])

# Vive en un lugar que no es una vivienda propiamente
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

carencias = [
    "sin_salud",
    "rezago_educativo",
    "sin_trabajo",
    "vivienda_precaria",
    "falta_ayuda_tecnica",
]
# Cuantas carencias tiene cada persona, de 0 a 5
bd["carencias"] = bd[carencias].sum(axis=1)

# La discapacidad se mide con las calificaciones del certificado
discapacidad = [
    "calificacion",
    "calificacion_funciones_final",
    "calificacion_estructuras_final",
]


# Por cada grupo: cuantas personas, % con cada carencia y promedio de carencias
def resumen(columna):
    tabla = (bd.groupby(columna)[carencias].mean() * 100).round(1)
    tabla["carencias"] = bd.groupby(columna)["carencias"].mean().round(2)
    tabla.insert(0, "personas", bd.groupby(columna).size())
    return tabla


# Relacion 1: entre mas carencias, sube la calificacion de discapacidad?
por_carencias = bd.groupby("carencias")[discapacidad].mean().round(1)
por_carencias.insert(0, "personas", bd.groupby("carencias").size())

# Relacion 2: las carencias segun el apoyo que necesita la persona
por_apoyo = resumen("necesita_apoyod").sort_values("carencias", ascending=False)

# Relacion 3: las carencias por estado
por_estado = resumen("entidad_residenciad")
por_estado = por_estado[por_estado["personas"] >= minimo_personas]
por_estado = por_estado.sort_values("carencias", ascending=False)

# Relacion 4: las carencias de quienes hablan una lengua indigena
por_lengua = resumen("habla_lengua_indigenad").loc[["SI", "NO"]]

print(f"Personas de 18 a 64: {len(bd)}")
print(f"Por numero de carencias: \n{por_carencias.to_string()}")
print(f"Por apoyo que necesita: \n{por_apoyo.to_string()}")
print(f"Por estado: \n{por_estado.to_string()}")
print(f"Por lengua indigena: \n{por_lengua.to_string()}")

with pd.ExcelWriter(salida) as archivo:
    por_carencias.to_excel(archivo, sheet_name="Carencias")
    por_apoyo.to_excel(archivo, sheet_name="Apoyo")
    por_estado.to_excel(archivo, sheet_name="Estados")
    por_lengua.to_excel(archivo, sheet_name="Lengua")

print(f"Se genero {salida}")
