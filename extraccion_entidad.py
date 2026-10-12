# Para matematicas
import numpy as np
# Analizar datos de csv o excel
import pandas as pd

# Documentacion de python
# https://pandas.pydata.org/docs/getting_started/intro_tutorials/02_read_write.html
# Se puede usar en el futuro
# nombre = input("Ingrese el nombre del archivo")
nombre = "Datos_Excel.xlsx"
# Excel reducido que se genera
salida = "Datos_Guanajuato.xlsx"
# En el excel los estados vienen en mayusculas y sin acentos
estado = "GUANAJUATO"
# Columna con la que se decide de que estado es la persona
# entidad_nacimientod = donde nacio
# entidad_residenciad = donde vive
# entidad = donde se hizo el certificado
columna_estado = "entidad_nacimientod"

# Columnas que se quedan en el excel reducido, aqui se agregan o se quitan
columnas = [
    "sexod",
    "edad_anios",
    "entidad_nacimientod",
    "entidad_residenciad",
    "municipio_residenciad",
    "se_considera_indigenad",
    "habla_lengua_indigenad",
    "cual_lengua_indigenad",
    "escolaridadd",
    "sabe_leer_escribird",
    "condicion_actividad_economicad",
    "afiliacion_servicios_saludd",
    "forma_comunicacion",
    "necesita_apoyod",
    "cond_salud_nombre_cie11",
    "calificacion",
    "whodas_calificacion",
    "capia_calificacion_final",
    "factores_ambientales_calificacion",
    "calificacion_funciones_final",
    "calificacion_estructuras_final",
]

# usecols es para cargar solo esas columnas (el excel tiene 630)
# Ya no se usa nrows porque en las primeras 100 filas no hay nadie de Guanajuato
bd = pd.read_excel(nombre, usecols=columnas)
# read_excel las regresa en el orden del excel, asi quedan en el orden de la lista
bd = bd[columnas]

# Filas del estado
filas_estado = bd[bd[columna_estado] == estado]
# De esas, las que hablan una lengua indigena
hablantes = filas_estado[filas_estado["habla_lengua_indigenad"] == "SI"]
# Cuantas personas hablan cada lengua
lenguas = hablantes["cual_lengua_indigenad"].value_counts()

print(f"Filas en total: {len(bd)}")
print(f"Filas de {estado}: {len(filas_estado)}")
print(f"Hablan lengua indigena: {len(hablantes)}")
print(f"Lenguas: \n{lenguas}")
print(f"Hablantes: \n{hablantes}")

# Una hoja con todo el estado y otra solo con los hablantes
with pd.ExcelWriter(salida) as archivo:
    filas_estado.to_excel(archivo, sheet_name="Estado", index=False)
    hablantes.to_excel(archivo, sheet_name="Hablantes", index=False)

print(f"Se genero {salida}")
