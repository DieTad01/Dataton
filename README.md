# Objetivo del proyecto
Analisis de archivo de poblacion para el Dataton

## Caracteristicas
1. El filtrado de la informacion y discriminacion de datos irrelevantes
2. Formulacion de otro archivo con datos limpiados
    - Solo seran datos que se consideren importantes para el analisis de rasgos para discapacidades

### Tecnologias
python
js
html
css

# Instalacion de python
## Instalacion de entorno virtual
```bash
python -m venv venv
```
## Instalacion de depedencias
### En el requeriments.txt estan todas las dependencias usadas
```bash
pip install -r requeriments.txt
```
### Para subir archivos grandes necesitamos
```bash
git lfs install
git lfs track "*.xlsx"
git add .gitattributes
```

# Correr programas
```bash
python nombrearchivo.py
```