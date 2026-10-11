# Para matematicas
import numpy as np
# Analizar datos de csv o excel
import pandas as pd

# Documentacion de python
# https://pandas.pydata.org/docs/getting_started/intro_tutorials/02_read_write.html
# Se puede usar en el futuro
# nombre = input("Ingrese el nombre del archivo")
nombre = "Datos_Excel.xlsx"
bd = pd.read_excel(nombre, nrows=100)

