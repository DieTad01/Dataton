# Para matematicas
import numpy as np
# Analizar datos de csv o excel
import pandas as pd

# Documentacion de python
# https://pandas.pydata.org/docs/getting_started/intro_tutorials/02_read_write.html
# nombre = input("Ingrese el nombre del archivo")
nombre = "Datos_Excel.xlsx"
bd = pd.read_excel(nombre, nrows=100)

# Caracteristicas de la bd
# tipos_de_datos = bd.dtypes

# Imprimir los primeros 10
# primeros = bd.head(10)

# Imprimir
# print(f"Tipos de datos: \n{tipos_de_datos}")
# print(f"Los primeros 10: \n{primeros}")