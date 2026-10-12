const DATOS = {
 "Nacional": {
  "discapacidad": {
   "personas": 61747,
   "edad_mediana": 42,
   "calificacion": 45.9,
   "necesita_apoyo": 84.9,
   "nivel": [
    {
     "nombre": "25 a 40",
     "valor": 38.8,
     "n": 23932
    },
    {
     "nombre": "40 a 55",
     "valor": 36.4,
     "n": 22490
    },
    {
     "nombre": "55 a 70",
     "valor": 18.9,
     "n": 11660
    },
    {
     "nombre": "70 o más",
     "valor": 5.9,
     "n": 3665
    }
   ],
   "apoyo": [
    {
     "nombre": "No requiere",
     "valor": 15.1,
     "n": 9315
    },
    {
     "nombre": "Incitación verbal o gestual",
     "valor": 5.4,
     "n": 3335
    },
    {
     "nombre": "Supervisión",
     "valor": 28.7,
     "n": 17709
    },
    {
     "nombre": "Ayuda física parcial",
     "valor": 38.3,
     "n": 23631
    },
    {
     "nombre": "Ayuda física total",
     "valor": 12.6,
     "n": 7757
    }
   ],
   "origen": [
    {
     "nombre": "Congénita (de nacimiento)",
     "valor": 33.9,
     "n": 20938
    },
    {
     "nombre": "Enfermedad crónico-degenerativa",
     "valor": 28.6,
     "n": 17687
    },
    {
     "nombre": "Accidente o violencia",
     "valor": 13.4,
     "n": 8288
    },
    {
     "nombre": "Embarazo, parto o recién nacido",
     "valor": 6.8,
     "n": 4198
    },
    {
     "nombre": "Enfermedad infecciosa",
     "valor": 2.9,
     "n": 1808
    },
    {
     "nombre": "Otra causa o no aplica",
     "valor": 14.3,
     "n": 8828
    }
   ],
   "condicion": [
    {
     "nombre": "Mental y del neurodesarrollo",
     "valor": 28.6,
     "n": 17651,
     "detalle": "autismo, discapacidad intelectual"
    },
    {
     "nombre": "Sistema nervioso",
     "valor": 13.7,
     "n": 8466,
     "detalle": "epilepsia, parálisis cerebral"
    },
    {
     "nombre": "Músculos, huesos y articulaciones",
     "valor": 11.0,
     "n": 6773,
     "detalle": "artritis, artrosis de rodilla"
    },
    {
     "nombre": "Lesiones y traumatismos",
     "valor": 8.7,
     "n": 5380,
     "detalle": "amputaciones, fracturas"
    },
    {
     "nombre": "Visión",
     "valor": 8.6,
     "n": 5298,
     "detalle": "ceguera, retinopatía diabética"
    },
    {
     "nombre": "Anomalías del desarrollo",
     "valor": 7.7,
     "n": 4733,
     "detalle": "síndrome de Down"
    },
    {
     "nombre": "Oído",
     "valor": 5.4,
     "n": 3364,
     "detalle": "hipoacusia, pérdida auditiva"
    },
    {
     "nombre": "Síntomas generales",
     "valor": 5.1,
     "n": 3129,
     "detalle": "problemas de marcha, hemiplejia"
    },
    {
     "nombre": "Otras",
     "valor": 11.3,
     "n": 6953,
     "detalle": "enfermedad renal, ausencia de un miembro, tumores"
    }
   ],
   "edad": [
    {
     "nombre": "0 a 5",
     "valor": 7.4,
     "n": 4599
    },
    {
     "nombre": "6 a 17",
     "valor": 18.5,
     "n": 11408
    },
    {
     "nombre": "18 a 29",
     "valor": 10.9,
     "n": 6730
    },
    {
     "nombre": "30 a 44",
     "valor": 16.6,
     "n": 10264
    },
    {
     "nombre": "45 a 64",
     "valor": 40.9,
     "n": 25229
    },
    {
     "nombre": "65 o más",
     "valor": 5.7,
     "n": 3517
    }
   ]
  },
  "economia": {
   "personas": 42223,
   "carencias_promedio": 1.43,
   "dependiente": 65.5,
   "apoyo_social": 24.3,
   "carencias": [
    {
     "nombre": "Sin afiliación a servicios de salud",
     "valor": 43.2,
     "n": 18232
    },
    {
     "nombre": "No terminó la primaria",
     "valor": 15.2,
     "n": 6400
    },
    {
     "nombre": "Sin trabajo",
     "valor": 52.4,
     "n": 22124
    },
    {
     "nombre": "Vivienda precaria",
     "valor": 2.6,
     "n": 1098
    },
    {
     "nombre": "Le falta un aparato de apoyo",
     "valor": 29.4,
     "n": 12431
    }
   ],
   "actividad": [
    {
     "nombre": "No trabaja ni estudia por barreras del entorno",
     "valor": 49.9,
     "n": 21080
    },
    {
     "nombre": "Tiene trabajo",
     "valor": 16.6,
     "n": 7020
    },
    {
     "nombre": "Quehaceres del hogar",
     "valor": 12.9,
     "n": 5467
    },
    {
     "nombre": "Jubilado o pensionado",
     "valor": 8.8,
     "n": 3724
    },
    {
     "nombre": "Estudiante",
     "valor": 3.5,
     "n": 1458
    },
    {
     "nombre": "Busca trabajo",
     "valor": 2.5,
     "n": 1044
    },
    {
     "nombre": "Otra o no aplica",
     "valor": 5.8,
     "n": 2430
    }
   ],
   "salud": [
    {
     "nombre": "Ninguna",
     "valor": 43.2,
     "n": 18232
    },
    {
     "nombre": "IMSS",
     "valor": 32.9,
     "n": 13911
    },
    {
     "nombre": "Bienestar",
     "valor": 9.9,
     "n": 4161
    },
    {
     "nombre": "ISSSTE",
     "valor": 5.4,
     "n": 2268
    },
    {
     "nombre": "Otra o no especificado",
     "valor": 8.6,
     "n": 3651
    }
   ],
   "escolaridad": [
    {
     "nombre": "Sin primaria terminada",
     "valor": 15.2,
     "n": 6400
    },
    {
     "nombre": "Primaria",
     "valor": 17.3,
     "n": 7314
    },
    {
     "nombre": "Secundaria",
     "valor": 35.1,
     "n": 14811
    },
    {
     "nombre": "Bachillerato",
     "valor": 21.0,
     "n": 8852
    },
    {
     "nombre": "Licenciatura o más",
     "valor": 10.1,
     "n": 4259
    },
    {
     "nombre": "No especificado",
     "valor": 1.4,
     "n": 587
    }
   ]
  },
  "relacion": {
   "calificacion_por_carencias": [
    {
     "nombre": "0",
     "valor": 42.49,
     "n": 8636
    },
    {
     "nombre": "1",
     "valor": 44.81,
     "n": 14229
    },
    {
     "nombre": "2",
     "valor": 47.17,
     "n": 12941
    },
    {
     "nombre": "3",
     "valor": 49.84,
     "n": 5516
    },
    {
     "nombre": "4",
     "valor": 52.91,
     "n": 879
    },
    {
     "nombre": "5",
     "valor": 57.51,
     "n": 22
    }
   ],
   "funciones_por_carencias": [
    {
     "nombre": "0",
     "valor": 11.21,
     "n": 8636
    },
    {
     "nombre": "1",
     "valor": 11.9,
     "n": 14229
    },
    {
     "nombre": "2",
     "valor": 12.66,
     "n": 12941
    },
    {
     "nombre": "3",
     "valor": 13.52,
     "n": 5516
    },
    {
     "nombre": "4",
     "valor": 14.56,
     "n": 879
    },
    {
     "nombre": "5",
     "valor": 14.95,
     "n": 22
    }
   ],
   "carencias_por_apoyo": [
    {
     "nombre": "No requiere",
     "valor": 1.07,
     "n": 8191
    },
    {
     "nombre": "Incitación verbal o gestual",
     "valor": 1.44,
     "n": 1662
    },
    {
     "nombre": "Supervisión",
     "valor": 1.47,
     "n": 10135
    },
    {
     "nombre": "Ayuda física parcial",
     "valor": 1.44,
     "n": 17951
    },
    {
     "nombre": "Ayuda física total",
     "valor": 1.94,
     "n": 4284
    }
   ],
   "carencias_por_nivel": [
    {
     "nombre": "25 a 40",
     "valor": 1.25,
     "n": 16219
    },
    {
     "nombre": "40 a 55",
     "valor": 1.43,
     "n": 15417
    },
    {
     "nombre": "55 a 70",
     "valor": 1.63,
     "n": 8215
    },
    {
     "nombre": "70 o más",
     "valor": 1.9,
     "n": 2372
    }
   ],
   "personas_por_nivel": [
    16219,
    15417,
    8215,
    2372
   ],
   "matriz": [
    {
     "nombre": "Sin afiliación a servicios de salud",
     "celdas": [
      42.7,
      42.4,
      44.5,
      47.2
     ]
    },
    {
     "nombre": "No terminó la primaria",
     "celdas": [
      12.4,
      14.9,
      17.4,
      28.2
     ]
    },
    {
     "nombre": "Sin trabajo",
     "celdas": [
      43.2,
      53.4,
      63.7,
      69.5
     ]
    },
    {
     "nombre": "Vivienda precaria",
     "celdas": [
      2.6,
      3.0,
      2.1,
      1.8
     ]
    },
    {
     "nombre": "Le falta un aparato de apoyo",
     "celdas": [
      24.5,
      29.5,
      35.1,
      43.5
     ]
    }
   ]
  }
 },
 "Baja California Sur": {
  "discapacidad": {
   "personas": 1270,
   "edad_mediana": 31,
   "calificacion": 51.2,
   "necesita_apoyo": 89.0,
   "nivel": [
    {
     "nombre": "25 a 40",
     "valor": 17.2,
     "n": 219
    },
    {
     "nombre": "40 a 55",
     "valor": 45.0,
     "n": 572
    },
    {
     "nombre": "55 a 70",
     "valor": 31.7,
     "n": 403
    },
    {
     "nombre": "70 o más",
     "valor": 6.0,
     "n": 76
    }
   ],
   "apoyo": [
    {
     "nombre": "No requiere",
     "valor": 11.0,
     "n": 140
    },
    {
     "nombre": "Incitación verbal o gestual",
     "valor": 6.6,
     "n": 84
    },
    {
     "nombre": "Supervisión",
     "valor": 55.0,
     "n": 698
    },
    {
     "nombre": "Ayuda física parcial",
     "valor": 21.9,
     "n": 278
    },
    {
     "nombre": "Ayuda física total",
     "valor": 5.5,
     "n": 70
    }
   ],
   "origen": [
    {
     "nombre": "Congénita (de nacimiento)",
     "valor": 47.8,
     "n": 607
    },
    {
     "nombre": "Enfermedad crónico-degenerativa",
     "valor": 25.8,
     "n": 328
    },
    {
     "nombre": "Accidente o violencia",
     "valor": 9.1,
     "n": 115
    },
    {
     "nombre": "Embarazo, parto o recién nacido",
     "valor": 4.9,
     "n": 62
    },
    {
     "nombre": "Enfermedad infecciosa",
     "valor": 1.7,
     "n": 22
    },
    {
     "nombre": "Otra causa o no aplica",
     "valor": 10.7,
     "n": 136
    }
   ],
   "condicion": [
    {
     "nombre": "Mental y del neurodesarrollo",
     "valor": 37.2,
     "n": 472,
     "detalle": "autismo, discapacidad intelectual"
    },
    {
     "nombre": "Sistema nervioso",
     "valor": 14.6,
     "n": 186,
     "detalle": "epilepsia, parálisis cerebral"
    },
    {
     "nombre": "Músculos, huesos y articulaciones",
     "valor": 10.2,
     "n": 130,
     "detalle": "artritis, artrosis de rodilla"
    },
    {
     "nombre": "Lesiones y traumatismos",
     "valor": 8.6,
     "n": 109,
     "detalle": "amputaciones, fracturas"
    },
    {
     "nombre": "Anomalías del desarrollo",
     "valor": 8.4,
     "n": 107,
     "detalle": "síndrome de Down"
    },
    {
     "nombre": "Visión",
     "valor": 7.8,
     "n": 99,
     "detalle": "ceguera, retinopatía diabética"
    },
    {
     "nombre": "Oído",
     "valor": 4.4,
     "n": 56,
     "detalle": "hipoacusia, pérdida auditiva"
    },
    {
     "nombre": "Síntomas generales",
     "valor": 2.7,
     "n": 34,
     "detalle": "problemas de marcha, hemiplejia"
    },
    {
     "nombre": "Otras",
     "valor": 6.1,
     "n": 77,
     "detalle": "enfermedad renal, ausencia de un miembro, tumores"
    }
   ],
   "edad": [
    {
     "nombre": "0 a 5",
     "valor": 11.7,
     "n": 149
    },
    {
     "nombre": "6 a 17",
     "valor": 22.9,
     "n": 291
    },
    {
     "nombre": "18 a 29",
     "valor": 13.2,
     "n": 168
    },
    {
     "nombre": "30 a 44",
     "valor": 14.7,
     "n": 187
    },
    {
     "nombre": "45 a 64",
     "valor": 35.2,
     "n": 447
    },
    {
     "nombre": "65 o más",
     "valor": 2.2,
     "n": 28
    }
   ]
  },
  "economia": {
   "personas": 802,
   "carencias_promedio": 1.64,
   "dependiente": 66.8,
   "apoyo_social": 23.2,
   "carencias": [
    {
     "nombre": "Sin afiliación a servicios de salud",
     "valor": 47.0,
     "n": 377
    },
    {
     "nombre": "No terminó la primaria",
     "valor": 19.8,
     "n": 159
    },
    {
     "nombre": "Sin trabajo",
     "valor": 75.2,
     "n": 603
    },
    {
     "nombre": "Vivienda precaria",
     "valor": 3.4,
     "n": 27
    },
    {
     "nombre": "Le falta un aparato de apoyo",
     "valor": 19.0,
     "n": 152
    }
   ],
   "actividad": [
    {
     "nombre": "No trabaja ni estudia por barreras del entorno",
     "valor": 73.1,
     "n": 586
    },
    {
     "nombre": "Tiene trabajo",
     "valor": 8.7,
     "n": 70
    },
    {
     "nombre": "Jubilado o pensionado",
     "valor": 6.6,
     "n": 53
    },
    {
     "nombre": "Quehaceres del hogar",
     "valor": 4.9,
     "n": 39
    },
    {
     "nombre": "Busca trabajo",
     "valor": 2.1,
     "n": 17
    },
    {
     "nombre": "Estudiante",
     "valor": 1.4,
     "n": 11
    },
    {
     "nombre": "Otra o no aplica",
     "valor": 3.2,
     "n": 26
    }
   ],
   "salud": [
    {
     "nombre": "Ninguna",
     "valor": 47.0,
     "n": 377
    },
    {
     "nombre": "IMSS",
     "valor": 21.6,
     "n": 173
    },
    {
     "nombre": "Bienestar",
     "valor": 7.0,
     "n": 56
    },
    {
     "nombre": "ISSSTE",
     "valor": 4.1,
     "n": 33
    },
    {
     "nombre": "Otra o no especificado",
     "valor": 20.3,
     "n": 163
    }
   ],
   "escolaridad": [
    {
     "nombre": "Sin primaria terminada",
     "valor": 19.8,
     "n": 159
    },
    {
     "nombre": "Primaria",
     "valor": 18.5,
     "n": 148
    },
    {
     "nombre": "Secundaria",
     "valor": 28.7,
     "n": 230
    },
    {
     "nombre": "Bachillerato",
     "valor": 17.8,
     "n": 143
    },
    {
     "nombre": "Licenciatura o más",
     "valor": 6.6,
     "n": 53
    },
    {
     "nombre": "No especificado",
     "valor": 8.6,
     "n": 69
    }
   ]
  },
  "relacion": {
   "calificacion_por_carencias": [
    {
     "nombre": "0",
     "valor": 49.2,
     "n": 87
    },
    {
     "nombre": "1",
     "valor": 52.53,
     "n": 245
    },
    {
     "nombre": "2",
     "valor": 52.52,
     "n": 345
    },
    {
     "nombre": "3",
     "valor": 52.9,
     "n": 117
    },
    {
     "nombre": "4",
     "valor": 50.94,
     "n": 8
    }
   ],
   "funciones_por_carencias": [
    {
     "nombre": "0",
     "valor": 14.38,
     "n": 87
    },
    {
     "nombre": "1",
     "valor": 13.73,
     "n": 245
    },
    {
     "nombre": "2",
     "valor": 14.25,
     "n": 345
    },
    {
     "nombre": "3",
     "valor": 15.16,
     "n": 117
    },
    {
     "nombre": "4",
     "valor": 15.25,
     "n": 8
    }
   ],
   "carencias_por_apoyo": [
    {
     "nombre": "No requiere",
     "valor": 1.39,
     "n": 132
    },
    {
     "nombre": "Incitación verbal o gestual",
     "valor": 1.27,
     "n": 26
    },
    {
     "nombre": "Supervisión",
     "valor": 1.81,
     "n": 406
    },
    {
     "nombre": "Ayuda física parcial",
     "valor": 1.53,
     "n": 206
    },
    {
     "nombre": "Ayuda física total",
     "valor": 1.69,
     "n": 32
    }
   ],
   "carencias_por_nivel": [
    {
     "nombre": "25 a 40",
     "valor": 1.44,
     "n": 124
    },
    {
     "nombre": "40 a 55",
     "valor": 1.72,
     "n": 341
    },
    {
     "nombre": "55 a 70",
     "valor": 1.62,
     "n": 273
    },
    {
     "nombre": "70 o más",
     "valor": 1.72,
     "n": 64
    }
   ],
   "personas_por_nivel": [
    124,
    341,
    273,
    64
   ],
   "matriz": [
    {
     "nombre": "Sin afiliación a servicios de salud",
     "celdas": [
      47.6,
      46.6,
      46.5,
      50.0
     ]
    },
    {
     "nombre": "No terminó la primaria",
     "celdas": [
      13.7,
      24.0,
      16.5,
      23.4
     ]
    },
    {
     "nombre": "Sin trabajo",
     "celdas": [
      58.1,
      82.1,
      74.7,
      73.4
     ]
    },
    {
     "nombre": "Vivienda precaria",
     "celdas": [
      4.0,
      4.4,
      2.2,
      1.6
     ]
    },
    {
     "nombre": "Le falta un aparato de apoyo",
     "celdas": [
      21.0,
      14.7,
      22.3,
      23.4
     ]
    }
   ]
  }
 },
 "Chiapas": {
  "discapacidad": {
   "personas": 729,
   "edad_mediana": 42,
   "calificacion": 49.4,
   "necesita_apoyo": 95.2,
   "nivel": [
    {
     "nombre": "25 a 40",
     "valor": 26.7,
     "n": 195
    },
    {
     "nombre": "40 a 55",
     "valor": 41.2,
     "n": 300
    },
    {
     "nombre": "55 a 70",
     "valor": 23.6,
     "n": 172
    },
    {
     "nombre": "70 o más",
     "valor": 8.5,
     "n": 62
    }
   ],
   "apoyo": [
    {
     "nombre": "No requiere",
     "valor": 4.8,
     "n": 35
    },
    {
     "nombre": "Incitación verbal o gestual",
     "valor": 3.7,
     "n": 27
    },
    {
     "nombre": "Supervisión",
     "valor": 27.3,
     "n": 199
    },
    {
     "nombre": "Ayuda física parcial",
     "valor": 41.0,
     "n": 299
    },
    {
     "nombre": "Ayuda física total",
     "valor": 23.2,
     "n": 169
    }
   ],
   "origen": [
    {
     "nombre": "Congénita (de nacimiento)",
     "valor": 37.7,
     "n": 275
    },
    {
     "nombre": "Enfermedad crónico-degenerativa",
     "valor": 31.0,
     "n": 226
    },
    {
     "nombre": "Accidente o violencia",
     "valor": 13.2,
     "n": 96
    },
    {
     "nombre": "Embarazo, parto o recién nacido",
     "valor": 4.4,
     "n": 32
    },
    {
     "nombre": "Enfermedad infecciosa",
     "valor": 2.7,
     "n": 20
    },
    {
     "nombre": "Otra causa o no aplica",
     "valor": 11.0,
     "n": 80
    }
   ],
   "condicion": [
    {
     "nombre": "Mental y del neurodesarrollo",
     "valor": 24.8,
     "n": 181,
     "detalle": "autismo, discapacidad intelectual"
    },
    {
     "nombre": "Sistema nervioso",
     "valor": 14.5,
     "n": 106,
     "detalle": "epilepsia, parálisis cerebral"
    },
    {
     "nombre": "Visión",
     "valor": 12.3,
     "n": 90,
     "detalle": "ceguera, retinopatía diabética"
    },
    {
     "nombre": "Músculos, huesos y articulaciones",
     "valor": 10.3,
     "n": 75,
     "detalle": "artritis, artrosis de rodilla"
    },
    {
     "nombre": "Lesiones y traumatismos",
     "valor": 8.9,
     "n": 65,
     "detalle": "amputaciones, fracturas"
    },
    {
     "nombre": "Anomalías del desarrollo",
     "valor": 6.4,
     "n": 47,
     "detalle": "síndrome de Down"
    },
    {
     "nombre": "Síntomas generales",
     "valor": 6.0,
     "n": 44,
     "detalle": "problemas de marcha, hemiplejia"
    },
    {
     "nombre": "Oído",
     "valor": 3.8,
     "n": 28,
     "detalle": "hipoacusia, pérdida auditiva"
    },
    {
     "nombre": "Otras",
     "valor": 12.8,
     "n": 93,
     "detalle": "enfermedad renal, ausencia de un miembro, tumores"
    }
   ],
   "edad": [
    {
     "nombre": "0 a 5",
     "valor": 12.2,
     "n": 89
    },
    {
     "nombre": "6 a 17",
     "valor": 16.7,
     "n": 122
    },
    {
     "nombre": "18 a 29",
     "valor": 8.2,
     "n": 60
    },
    {
     "nombre": "30 a 44",
     "valor": 16.5,
     "n": 120
    },
    {
     "nombre": "45 a 64",
     "valor": 42.4,
     "n": 309
    },
    {
     "nombre": "65 o más",
     "valor": 4.0,
     "n": 29
    }
   ]
  },
  "economia": {
   "personas": 489,
   "carencias_promedio": 1.76,
   "dependiente": 73.6,
   "apoyo_social": 8.4,
   "carencias": [
    {
     "nombre": "Sin afiliación a servicios de salud",
     "valor": 36.4,
     "n": 178
    },
    {
     "nombre": "No terminó la primaria",
     "valor": 19.8,
     "n": 97
    },
    {
     "nombre": "Sin trabajo",
     "valor": 61.1,
     "n": 299
    },
    {
     "nombre": "Vivienda precaria",
     "valor": 3.5,
     "n": 17
    },
    {
     "nombre": "Le falta un aparato de apoyo",
     "valor": 54.8,
     "n": 268
    }
   ],
   "actividad": [
    {
     "nombre": "No trabaja ni estudia por barreras del entorno",
     "valor": 59.7,
     "n": 292
    },
    {
     "nombre": "Quehaceres del hogar",
     "valor": 15.7,
     "n": 77
    },
    {
     "nombre": "Tiene trabajo",
     "valor": 9.6,
     "n": 47
    },
    {
     "nombre": "Jubilado o pensionado",
     "valor": 5.1,
     "n": 25
    },
    {
     "nombre": "Estudiante",
     "valor": 1.4,
     "n": 7
    },
    {
     "nombre": "Busca trabajo",
     "valor": 1.4,
     "n": 7
    },
    {
     "nombre": "Otra o no aplica",
     "valor": 7.0,
     "n": 34
    }
   ],
   "salud": [
    {
     "nombre": "Ninguna",
     "valor": 36.4,
     "n": 178
    },
    {
     "nombre": "IMSS",
     "valor": 30.9,
     "n": 151
    },
    {
     "nombre": "Bienestar",
     "valor": 19.6,
     "n": 96
    },
    {
     "nombre": "ISSSTE",
     "valor": 5.1,
     "n": 25
    },
    {
     "nombre": "Otra o no especificado",
     "valor": 8.0,
     "n": 39
    }
   ],
   "escolaridad": [
    {
     "nombre": "Sin primaria terminada",
     "valor": 19.8,
     "n": 97
    },
    {
     "nombre": "Primaria",
     "valor": 16.0,
     "n": 78
    },
    {
     "nombre": "Secundaria",
     "valor": 28.2,
     "n": 138
    },
    {
     "nombre": "Bachillerato",
     "valor": 21.3,
     "n": 104
    },
    {
     "nombre": "Licenciatura o más",
     "valor": 14.7,
     "n": 72
    },
    {
     "nombre": "No especificado",
     "valor": 0.0,
     "n": 0
    }
   ]
  },
  "relacion": {
   "calificacion_por_carencias": [
    {
     "nombre": "0",
     "valor": 42.15,
     "n": 62
    },
    {
     "nombre": "1",
     "valor": 47.9,
     "n": 141
    },
    {
     "nombre": "2",
     "valor": 51.56,
     "n": 165
    },
    {
     "nombre": "3",
     "valor": 52.72,
     "n": 97
    },
    {
     "nombre": "4",
     "valor": 59.45,
     "n": 23
    },
    {
     "nombre": "5",
     "valor": 71.23,
     "n": 1
    }
   ],
   "funciones_por_carencias": [
    {
     "nombre": "0",
     "valor": 12.4,
     "n": 62
    },
    {
     "nombre": "1",
     "valor": 13.45,
     "n": 141
    },
    {
     "nombre": "2",
     "valor": 14.03,
     "n": 165
    },
    {
     "nombre": "3",
     "valor": 14.35,
     "n": 97
    },
    {
     "nombre": "4",
     "valor": 17.04,
     "n": 23
    },
    {
     "nombre": "5",
     "valor": 19.0,
     "n": 1
    }
   ],
   "carencias_por_apoyo": [
    {
     "nombre": "No requiere",
     "valor": 1.36,
     "n": 33
    },
    {
     "nombre": "Incitación verbal o gestual",
     "valor": 1.57,
     "n": 7
    },
    {
     "nombre": "Supervisión",
     "valor": 1.97,
     "n": 111
    },
    {
     "nombre": "Ayuda física parcial",
     "valor": 1.61,
     "n": 240
    },
    {
     "nombre": "Ayuda física total",
     "valor": 2.01,
     "n": 98
    }
   ],
   "carencias_por_nivel": [
    {
     "nombre": "25 a 40",
     "valor": 1.31,
     "n": 120
    },
    {
     "nombre": "40 a 55",
     "valor": 1.73,
     "n": 207
    },
    {
     "nombre": "55 a 70",
     "valor": 2.07,
     "n": 119
    },
    {
     "nombre": "70 o más",
     "valor": 2.26,
     "n": 43
    }
   ],
   "personas_por_nivel": [
    120,
    207,
    119,
    43
   ],
   "matriz": [
    {
     "nombre": "Sin afiliación a servicios de salud",
     "celdas": [
      29.2,
      36.7,
      41.2,
      41.9
     ]
    },
    {
     "nombre": "No terminó la primaria",
     "celdas": [
      15.8,
      16.4,
      22.7,
      39.5
     ]
    },
    {
     "nombre": "Sin trabajo",
     "celdas": [
      39.2,
      60.9,
      73.1,
      90.7
     ]
    },
    {
     "nombre": "Vivienda precaria",
     "celdas": [
      2.5,
      2.4,
      3.4,
      11.6
     ]
    },
    {
     "nombre": "Le falta un aparato de apoyo",
     "celdas": [
      44.2,
      57.0,
      66.4,
      41.9
     ]
    }
   ]
  }
 },
 "Chihuahua": {
  "discapacidad": {
   "personas": 954,
   "edad_mediana": 25,
   "calificacion": 43.7,
   "necesita_apoyo": 87.8,
   "nivel": [
    {
     "nombre": "25 a 40",
     "valor": 41.7,
     "n": 398
    },
    {
     "nombre": "40 a 55",
     "valor": 43.1,
     "n": 411
    },
    {
     "nombre": "55 a 70",
     "valor": 12.7,
     "n": 121
    },
    {
     "nombre": "70 o más",
     "valor": 2.5,
     "n": 24
    }
   ],
   "apoyo": [
    {
     "nombre": "No requiere",
     "valor": 12.2,
     "n": 116
    },
    {
     "nombre": "Incitación verbal o gestual",
     "valor": 11.2,
     "n": 107
    },
    {
     "nombre": "Supervisión",
     "valor": 34.2,
     "n": 326
    },
    {
     "nombre": "Ayuda física parcial",
     "valor": 36.2,
     "n": 345
    },
    {
     "nombre": "Ayuda física total",
     "valor": 6.3,
     "n": 60
    }
   ],
   "origen": [
    {
     "nombre": "Congénita (de nacimiento)",
     "valor": 47.7,
     "n": 455
    },
    {
     "nombre": "Enfermedad crónico-degenerativa",
     "valor": 18.8,
     "n": 179
    },
    {
     "nombre": "Accidente o violencia",
     "valor": 12.3,
     "n": 117
    },
    {
     "nombre": "Embarazo, parto o recién nacido",
     "valor": 4.8,
     "n": 46
    },
    {
     "nombre": "Enfermedad infecciosa",
     "valor": 1.7,
     "n": 16
    },
    {
     "nombre": "Otra causa o no aplica",
     "valor": 14.8,
     "n": 141
    }
   ],
   "condicion": [
    {
     "nombre": "Mental y del neurodesarrollo",
     "valor": 43.6,
     "n": 416,
     "detalle": "autismo, discapacidad intelectual"
    },
    {
     "nombre": "Sistema nervioso",
     "valor": 13.3,
     "n": 127,
     "detalle": "epilepsia, parálisis cerebral"
    },
    {
     "nombre": "Músculos, huesos y articulaciones",
     "valor": 8.5,
     "n": 81,
     "detalle": "artritis, artrosis de rodilla"
    },
    {
     "nombre": "Anomalías del desarrollo",
     "valor": 8.0,
     "n": 76,
     "detalle": "síndrome de Down"
    },
    {
     "nombre": "Lesiones y traumatismos",
     "valor": 5.6,
     "n": 53,
     "detalle": "amputaciones, fracturas"
    },
    {
     "nombre": "Síntomas generales",
     "valor": 5.3,
     "n": 51,
     "detalle": "problemas de marcha, hemiplejia"
    },
    {
     "nombre": "Visión",
     "valor": 5.2,
     "n": 50,
     "detalle": "ceguera, retinopatía diabética"
    },
    {
     "nombre": "Oído",
     "valor": 3.2,
     "n": 31,
     "detalle": "hipoacusia, pérdida auditiva"
    },
    {
     "nombre": "Otras",
     "valor": 7.2,
     "n": 69,
     "detalle": "enfermedad renal, ausencia de un miembro, tumores"
    }
   ],
   "edad": [
    {
     "nombre": "0 a 5",
     "valor": 12.6,
     "n": 120
    },
    {
     "nombre": "6 a 17",
     "valor": 25.1,
     "n": 239
    },
    {
     "nombre": "18 a 29",
     "valor": 18.9,
     "n": 180
    },
    {
     "nombre": "30 a 44",
     "valor": 12.2,
     "n": 116
    },
    {
     "nombre": "45 a 64",
     "valor": 27.8,
     "n": 265
    },
    {
     "nombre": "65 o más",
     "valor": 3.6,
     "n": 34
    }
   ]
  },
  "economia": {
   "personas": 561,
   "carencias_promedio": 2.05,
   "dependiente": 75.6,
   "apoyo_social": 16.2,
   "carencias": [
    {
     "nombre": "Sin afiliación a servicios de salud",
     "valor": 75.9,
     "n": 426
    },
    {
     "nombre": "No terminó la primaria",
     "valor": 23.9,
     "n": 134
    },
    {
     "nombre": "Sin trabajo",
     "valor": 69.9,
     "n": 392
    },
    {
     "nombre": "Vivienda precaria",
     "valor": 1.4,
     "n": 8
    },
    {
     "nombre": "Le falta un aparato de apoyo",
     "valor": 33.9,
     "n": 190
    }
   ],
   "actividad": [
    {
     "nombre": "No trabaja ni estudia por barreras del entorno",
     "valor": 67.4,
     "n": 378
    },
    {
     "nombre": "Tiene trabajo",
     "valor": 9.1,
     "n": 51
    },
    {
     "nombre": "Quehaceres del hogar",
     "valor": 8.9,
     "n": 50
    },
    {
     "nombre": "Jubilado o pensionado",
     "valor": 4.6,
     "n": 26
    },
    {
     "nombre": "Estudiante",
     "valor": 3.2,
     "n": 18
    },
    {
     "nombre": "Busca trabajo",
     "valor": 2.5,
     "n": 14
    },
    {
     "nombre": "Otra o no aplica",
     "valor": 4.3,
     "n": 24
    }
   ],
   "salud": [
    {
     "nombre": "Ninguna",
     "valor": 75.9,
     "n": 426
    },
    {
     "nombre": "IMSS",
     "valor": 17.1,
     "n": 96
    },
    {
     "nombre": "ISSSTE",
     "valor": 0.9,
     "n": 5
    },
    {
     "nombre": "Bienestar",
     "valor": 0.4,
     "n": 2
    },
    {
     "nombre": "Otra o no especificado",
     "valor": 5.7,
     "n": 32
    }
   ],
   "escolaridad": [
    {
     "nombre": "Sin primaria terminada",
     "valor": 23.9,
     "n": 134
    },
    {
     "nombre": "Primaria",
     "valor": 24.1,
     "n": 135
    },
    {
     "nombre": "Secundaria",
     "valor": 30.5,
     "n": 171
    },
    {
     "nombre": "Bachillerato",
     "valor": 15.0,
     "n": 84
    },
    {
     "nombre": "Licenciatura o más",
     "valor": 6.6,
     "n": 37
    },
    {
     "nombre": "No especificado",
     "valor": 0.0,
     "n": 0
    }
   ]
  },
  "relacion": {
   "calificacion_por_carencias": [
    {
     "nombre": "0",
     "valor": 41.54,
     "n": 22
    },
    {
     "nombre": "1",
     "valor": 40.69,
     "n": 144
    },
    {
     "nombre": "2",
     "valor": 43.13,
     "n": 210
    },
    {
     "nombre": "3",
     "valor": 45.44,
     "n": 154
    },
    {
     "nombre": "4",
     "valor": 53.32,
     "n": 31
    }
   ],
   "funciones_por_carencias": [
    {
     "nombre": "0",
     "valor": 12.59,
     "n": 22
    },
    {
     "nombre": "1",
     "valor": 12.85,
     "n": 144
    },
    {
     "nombre": "2",
     "valor": 14.13,
     "n": 210
    },
    {
     "nombre": "3",
     "valor": 14.54,
     "n": 154
    },
    {
     "nombre": "4",
     "valor": 17.84,
     "n": 31
    }
   ],
   "carencias_por_apoyo": [
    {
     "nombre": "No requiere",
     "valor": 1.66,
     "n": 94
    },
    {
     "nombre": "Incitación verbal o gestual",
     "valor": 2.0,
     "n": 49
    },
    {
     "nombre": "Supervisión",
     "valor": 2.01,
     "n": 156
    },
    {
     "nombre": "Ayuda física parcial",
     "valor": 2.18,
     "n": 231
    },
    {
     "nombre": "Ayuda física total",
     "valor": 2.55,
     "n": 31
    }
   ],
   "carencias_por_nivel": [
    {
     "nombre": "25 a 40",
     "valor": 1.81,
     "n": 232
    },
    {
     "nombre": "40 a 55",
     "valor": 2.15,
     "n": 247
    },
    {
     "nombre": "55 a 70",
     "valor": 2.44,
     "n": 71
    },
    {
     "nombre": "70 o más",
     "valor": 2.36,
     "n": 11
    }
   ],
   "personas_por_nivel": [
    232,
    247,
    71,
    11
   ],
   "matriz": [
    {
     "nombre": "Sin afiliación a servicios de salud",
     "celdas": [
      75.0,
      77.3,
      76.1,
      63.6
     ]
    },
    {
     "nombre": "No terminó la primaria",
     "celdas": [
      14.2,
      27.9,
      32.4,
      81.8
     ]
    },
    {
     "nombre": "Sin trabajo",
     "celdas": [
      63.4,
      74.1,
      76.1,
      72.7
     ]
    },
    {
     "nombre": "Vivienda precaria",
     "celdas": [
      0.9,
      0.8,
      5.6,
      0.0
     ]
    },
    {
     "nombre": "Le falta un aparato de apoyo",
     "celdas": [
      27.2,
      35.2,
      53.5,
      18.2
     ]
    }
   ]
  }
 },
 "Ciudad de México": {
  "discapacidad": {
   "personas": 19996,
   "edad_mediana": 47,
   "calificacion": 45.6,
   "necesita_apoyo": 87.1,
   "nivel": [
    {
     "nombre": "25 a 40",
     "valor": 39.3,
     "n": 7861
    },
    {
     "nombre": "40 a 55",
     "valor": 36.3,
     "n": 7267
    },
    {
     "nombre": "55 a 70",
     "valor": 19.0,
     "n": 3808
    },
    {
     "nombre": "70 o más",
     "valor": 5.3,
     "n": 1060
    }
   ],
   "apoyo": [
    {
     "nombre": "No requiere",
     "valor": 12.9,
     "n": 2583
    },
    {
     "nombre": "Incitación verbal o gestual",
     "valor": 5.0,
     "n": 1009
    },
    {
     "nombre": "Supervisión",
     "valor": 27.5,
     "n": 5501
    },
    {
     "nombre": "Ayuda física parcial",
     "valor": 43.7,
     "n": 8730
    },
    {
     "nombre": "Ayuda física total",
     "valor": 10.9,
     "n": 2173
    }
   ],
   "origen": [
    {
     "nombre": "Enfermedad crónico-degenerativa",
     "valor": 34.7,
     "n": 6942
    },
    {
     "nombre": "Congénita (de nacimiento)",
     "valor": 25.9,
     "n": 5184
    },
    {
     "nombre": "Accidente o violencia",
     "valor": 13.3,
     "n": 2666
    },
    {
     "nombre": "Embarazo, parto o recién nacido",
     "valor": 8.8,
     "n": 1751
    },
    {
     "nombre": "Enfermedad infecciosa",
     "valor": 3.2,
     "n": 642
    },
    {
     "nombre": "Otra causa o no aplica",
     "valor": 14.1,
     "n": 2811
    }
   ],
   "condicion": [
    {
     "nombre": "Mental y del neurodesarrollo",
     "valor": 22.9,
     "n": 4579,
     "detalle": "autismo, discapacidad intelectual"
    },
    {
     "nombre": "Sistema nervioso",
     "valor": 13.7,
     "n": 2738,
     "detalle": "epilepsia, parálisis cerebral"
    },
    {
     "nombre": "Músculos, huesos y articulaciones",
     "valor": 12.5,
     "n": 2501,
     "detalle": "artritis, artrosis de rodilla"
    },
    {
     "nombre": "Visión",
     "valor": 9.1,
     "n": 1829,
     "detalle": "ceguera, retinopatía diabética"
    },
    {
     "nombre": "Lesiones y traumatismos",
     "valor": 8.4,
     "n": 1687,
     "detalle": "amputaciones, fracturas"
    },
    {
     "nombre": "Anomalías del desarrollo",
     "valor": 7.4,
     "n": 1489,
     "detalle": "síndrome de Down"
    },
    {
     "nombre": "Oído",
     "valor": 6.6,
     "n": 1326,
     "detalle": "hipoacusia, pérdida auditiva"
    },
    {
     "nombre": "Síntomas generales",
     "valor": 5.0,
     "n": 997,
     "detalle": "problemas de marcha, hemiplejia"
    },
    {
     "nombre": "Otras",
     "valor": 14.3,
     "n": 2850,
     "detalle": "enfermedad renal, ausencia de un miembro, tumores"
    }
   ],
   "edad": [
    {
     "nombre": "0 a 5",
     "valor": 4.6,
     "n": 913
    },
    {
     "nombre": "6 a 17",
     "valor": 12.7,
     "n": 2538
    },
    {
     "nombre": "18 a 29",
     "valor": 10.7,
     "n": 2131
    },
    {
     "nombre": "30 a 44",
     "valor": 18.2,
     "n": 3643
    },
    {
     "nombre": "45 a 64",
     "valor": 47.0,
     "n": 9398
    },
    {
     "nombre": "65 o más",
     "valor": 6.9,
     "n": 1373
    }
   ]
  },
  "economia": {
   "personas": 15172,
   "carencias_promedio": 1.29,
   "dependiente": 62.2,
   "apoyo_social": 30.2,
   "carencias": [
    {
     "nombre": "Sin afiliación a servicios de salud",
     "valor": 33.9,
     "n": 5143
    },
    {
     "nombre": "No terminó la primaria",
     "valor": 9.9,
     "n": 1506
    },
    {
     "nombre": "Sin trabajo",
     "valor": 48.1,
     "n": 7297
    },
    {
     "nombre": "Vivienda precaria",
     "valor": 4.7,
     "n": 710
    },
    {
     "nombre": "Le falta un aparato de apoyo",
     "valor": 32.5,
     "n": 4929
    }
   ],
   "actividad": [
    {
     "nombre": "No trabaja ni estudia por barreras del entorno",
     "valor": 44.9,
     "n": 6807
    },
    {
     "nombre": "Tiene trabajo",
     "valor": 21.1,
     "n": 3199
    },
    {
     "nombre": "Quehaceres del hogar",
     "valor": 14.8,
     "n": 2244
    },
    {
     "nombre": "Jubilado o pensionado",
     "valor": 7.1,
     "n": 1072
    },
    {
     "nombre": "Estudiante",
     "valor": 3.9,
     "n": 597
    },
    {
     "nombre": "Busca trabajo",
     "valor": 3.2,
     "n": 490
    },
    {
     "nombre": "Otra o no aplica",
     "valor": 5.0,
     "n": 763
    }
   ],
   "salud": [
    {
     "nombre": "Ninguna",
     "valor": 33.9,
     "n": 5143
    },
    {
     "nombre": "IMSS",
     "valor": 32.9,
     "n": 4996
    },
    {
     "nombre": "Bienestar",
     "valor": 14.3,
     "n": 2166
    },
    {
     "nombre": "ISSSTE",
     "valor": 8.8,
     "n": 1331
    },
    {
     "nombre": "Otra o no especificado",
     "valor": 10.1,
     "n": 1536
    }
   ],
   "escolaridad": [
    {
     "nombre": "Sin primaria terminada",
     "valor": 9.9,
     "n": 1506
    },
    {
     "nombre": "Primaria",
     "valor": 15.7,
     "n": 2378
    },
    {
     "nombre": "Secundaria",
     "valor": 36.8,
     "n": 5583
    },
    {
     "nombre": "Bachillerato",
     "valor": 24.0,
     "n": 3644
    },
    {
     "nombre": "Licenciatura o más",
     "valor": 12.2,
     "n": 1849
    },
    {
     "nombre": "No especificado",
     "valor": 1.4,
     "n": 212
    }
   ]
  },
  "relacion": {
   "calificacion_por_carencias": [
    {
     "nombre": "0",
     "valor": 42.26,
     "n": 3488
    },
    {
     "nombre": "1",
     "valor": 44.27,
     "n": 5694
    },
    {
     "nombre": "2",
     "valor": 47.07,
     "n": 4300
    },
    {
     "nombre": "3",
     "valor": 49.38,
     "n": 1476
    },
    {
     "nombre": "4",
     "valor": 52.05,
     "n": 207
    },
    {
     "nombre": "5",
     "valor": 53.9,
     "n": 7
    }
   ],
   "funciones_por_carencias": [
    {
     "nombre": "0",
     "valor": 10.39,
     "n": 3488
    },
    {
     "nombre": "1",
     "valor": 11.14,
     "n": 5694
    },
    {
     "nombre": "2",
     "valor": 12.02,
     "n": 4300
    },
    {
     "nombre": "3",
     "valor": 12.67,
     "n": 1476
    },
    {
     "nombre": "4",
     "valor": 13.34,
     "n": 207
    },
    {
     "nombre": "5",
     "valor": 13.71,
     "n": 7
    }
   ],
   "carencias_por_apoyo": [
    {
     "nombre": "No requiere",
     "valor": 1.02,
     "n": 2315
    },
    {
     "nombre": "Incitación verbal o gestual",
     "valor": 1.34,
     "n": 684
    },
    {
     "nombre": "Supervisión",
     "valor": 1.22,
     "n": 3720
    },
    {
     "nombre": "Ayuda física parcial",
     "valor": 1.32,
     "n": 7143
    },
    {
     "nombre": "Ayuda física total",
     "valor": 1.76,
     "n": 1310
    }
   ],
   "carencias_por_nivel": [
    {
     "nombre": "25 a 40",
     "valor": 1.15,
     "n": 6094
    },
    {
     "nombre": "40 a 55",
     "valor": 1.28,
     "n": 5504
    },
    {
     "nombre": "55 a 70",
     "valor": 1.48,
     "n": 2842
    },
    {
     "nombre": "70 o más",
     "valor": 1.81,
     "n": 732
    }
   ],
   "personas_por_nivel": [
    6094,
    5504,
    2842,
    732
   ],
   "matriz": [
    {
     "nombre": "Sin afiliación a servicios de salud",
     "celdas": [
      34.5,
      31.8,
      35.8,
      36.9
     ]
    },
    {
     "nombre": "No terminó la primaria",
     "celdas": [
      8.0,
      9.5,
      11.0,
      25.3
     ]
    },
    {
     "nombre": "Sin trabajo",
     "celdas": [
      40.5,
      47.7,
      59.3,
      71.0
     ]
    },
    {
     "nombre": "Vivienda precaria",
     "celdas": [
      4.4,
      5.4,
      4.5,
      2.5
     ]
    },
    {
     "nombre": "Le falta un aparato de apoyo",
     "celdas": [
      28.0,
      33.2,
      37.5,
      45.4
     ]
    }
   ]
  }
 },
 "Guanajuato": {
  "discapacidad": {
   "personas": 1176,
   "edad_mediana": 21,
   "calificacion": 44.3,
   "necesita_apoyo": 92.9,
   "nivel": [
    {
     "nombre": "25 a 40",
     "valor": 45.4,
     "n": 534
    },
    {
     "nombre": "40 a 55",
     "valor": 33.9,
     "n": 399
    },
    {
     "nombre": "55 a 70",
     "valor": 15.1,
     "n": 178
    },
    {
     "nombre": "70 o más",
     "valor": 5.5,
     "n": 65
    }
   ],
   "apoyo": [
    {
     "nombre": "No requiere",
     "valor": 7.1,
     "n": 84
    },
    {
     "nombre": "Incitación verbal o gestual",
     "valor": 3.1,
     "n": 37
    },
    {
     "nombre": "Supervisión",
     "valor": 39.3,
     "n": 462
    },
    {
     "nombre": "Ayuda física parcial",
     "valor": 35.9,
     "n": 422
    },
    {
     "nombre": "Ayuda física total",
     "valor": 14.5,
     "n": 171
    }
   ],
   "origen": [
    {
     "nombre": "Congénita (de nacimiento)",
     "valor": 43.7,
     "n": 514
    },
    {
     "nombre": "Enfermedad crónico-degenerativa",
     "valor": 17.4,
     "n": 205
    },
    {
     "nombre": "Embarazo, parto o recién nacido",
     "valor": 13.4,
     "n": 158
    },
    {
     "nombre": "Accidente o violencia",
     "valor": 10.8,
     "n": 127
    },
    {
     "nombre": "Enfermedad infecciosa",
     "valor": 2.1,
     "n": 25
    },
    {
     "nombre": "Otra causa o no aplica",
     "valor": 12.5,
     "n": 147
    }
   ],
   "condicion": [
    {
     "nombre": "Mental y del neurodesarrollo",
     "valor": 32.7,
     "n": 385,
     "detalle": "autismo, discapacidad intelectual"
    },
    {
     "nombre": "Sistema nervioso",
     "valor": 19.3,
     "n": 227,
     "detalle": "epilepsia, parálisis cerebral"
    },
    {
     "nombre": "Anomalías del desarrollo",
     "valor": 10.1,
     "n": 119,
     "detalle": "síndrome de Down"
    },
    {
     "nombre": "Lesiones y traumatismos",
     "valor": 8.2,
     "n": 96,
     "detalle": "amputaciones, fracturas"
    },
    {
     "nombre": "Visión",
     "valor": 7.0,
     "n": 82,
     "detalle": "ceguera, retinopatía diabética"
    },
    {
     "nombre": "Músculos, huesos y articulaciones",
     "valor": 5.9,
     "n": 69,
     "detalle": "artritis, artrosis de rodilla"
    },
    {
     "nombre": "Síntomas generales",
     "valor": 4.8,
     "n": 57,
     "detalle": "problemas de marcha, hemiplejia"
    },
    {
     "nombre": "Oído",
     "valor": 3.3,
     "n": 39,
     "detalle": "hipoacusia, pérdida auditiva"
    },
    {
     "nombre": "Otras",
     "valor": 8.7,
     "n": 102,
     "detalle": "enfermedad renal, ausencia de un miembro, tumores"
    }
   ],
   "edad": [
    {
     "nombre": "0 a 5",
     "valor": 15.9,
     "n": 187
    },
    {
     "nombre": "6 a 17",
     "valor": 30.3,
     "n": 356
    },
    {
     "nombre": "18 a 29",
     "valor": 14.7,
     "n": 173
    },
    {
     "nombre": "30 a 44",
     "valor": 12.1,
     "n": 142
    },
    {
     "nombre": "45 a 64",
     "valor": 24.8,
     "n": 292
    },
    {
     "nombre": "65 o más",
     "valor": 2.2,
     "n": 26
    }
   ]
  },
  "economia": {
   "personas": 607,
   "carencias_promedio": 2.01,
   "dependiente": 65.4,
   "apoyo_social": 19.9,
   "carencias": [
    {
     "nombre": "Sin afiliación a servicios de salud",
     "valor": 74.5,
     "n": 452
    },
    {
     "nombre": "No terminó la primaria",
     "valor": 26.0,
     "n": 158
    },
    {
     "nombre": "Sin trabajo",
     "valor": 65.6,
     "n": 398
    },
    {
     "nombre": "Vivienda precaria",
     "valor": 0.2,
     "n": 1
    },
    {
     "nombre": "Le falta un aparato de apoyo",
     "valor": 35.1,
     "n": 213
    }
   ],
   "actividad": [
    {
     "nombre": "No trabaja ni estudia por barreras del entorno",
     "valor": 63.3,
     "n": 384
    },
    {
     "nombre": "Tiene trabajo",
     "valor": 13.8,
     "n": 84
    },
    {
     "nombre": "Quehaceres del hogar",
     "valor": 7.2,
     "n": 44
    },
    {
     "nombre": "Jubilado o pensionado",
     "valor": 5.6,
     "n": 34
    },
    {
     "nombre": "Estudiante",
     "valor": 2.6,
     "n": 16
    },
    {
     "nombre": "Busca trabajo",
     "valor": 2.3,
     "n": 14
    },
    {
     "nombre": "Otra o no aplica",
     "valor": 5.1,
     "n": 31
    }
   ],
   "salud": [
    {
     "nombre": "Ninguna",
     "valor": 74.5,
     "n": 452
    },
    {
     "nombre": "IMSS",
     "valor": 19.4,
     "n": 118
    },
    {
     "nombre": "ISSSTE",
     "valor": 3.5,
     "n": 21
    },
    {
     "nombre": "Bienestar",
     "valor": 0.2,
     "n": 1
    },
    {
     "nombre": "Otra o no especificado",
     "valor": 2.5,
     "n": 15
    }
   ],
   "escolaridad": [
    {
     "nombre": "Sin primaria terminada",
     "valor": 26.0,
     "n": 158
    },
    {
     "nombre": "Primaria",
     "valor": 17.1,
     "n": 104
    },
    {
     "nombre": "Secundaria",
     "valor": 34.3,
     "n": 208
    },
    {
     "nombre": "Bachillerato",
     "valor": 14.8,
     "n": 90
    },
    {
     "nombre": "Licenciatura o más",
     "valor": 7.4,
     "n": 45
    },
    {
     "nombre": "No especificado",
     "valor": 0.3,
     "n": 2
    }
   ]
  },
  "relacion": {
   "calificacion_por_carencias": [
    {
     "nombre": "0",
     "valor": 41.33,
     "n": 51
    },
    {
     "nombre": "1",
     "valor": 42.09,
     "n": 141
    },
    {
     "nombre": "2",
     "valor": 44.66,
     "n": 207
    },
    {
     "nombre": "3",
     "valor": 45.48,
     "n": 165
    },
    {
     "nombre": "4",
     "valor": 49.64,
     "n": 43
    }
   ],
   "funciones_por_carencias": [
    {
     "nombre": "0",
     "valor": 10.94,
     "n": 51
    },
    {
     "nombre": "1",
     "valor": 11.51,
     "n": 141
    },
    {
     "nombre": "2",
     "valor": 12.05,
     "n": 207
    },
    {
     "nombre": "3",
     "valor": 12.58,
     "n": 165
    },
    {
     "nombre": "4",
     "valor": 14.19,
     "n": 43
    }
   ],
   "carencias_por_apoyo": [
    {
     "nombre": "No requiere",
     "valor": 1.41,
     "n": 75
    },
    {
     "nombre": "Incitación verbal o gestual",
     "valor": 2.07,
     "n": 15
    },
    {
     "nombre": "Supervisión",
     "valor": 2.11,
     "n": 207
    },
    {
     "nombre": "Ayuda física parcial",
     "valor": 2.06,
     "n": 261
    },
    {
     "nombre": "Ayuda física total",
     "valor": 2.29,
     "n": 49
    }
   ],
   "carencias_por_nivel": [
    {
     "nombre": "25 a 40",
     "valor": 1.81,
     "n": 261
    },
    {
     "nombre": "40 a 55",
     "valor": 2.14,
     "n": 230
    },
    {
     "nombre": "55 a 70",
     "valor": 2.24,
     "n": 87
    },
    {
     "nombre": "70 o más",
     "valor": 2.14,
     "n": 29
    }
   ],
   "personas_por_nivel": [
    261,
    230,
    87,
    29
   ],
   "matriz": [
    {
     "nombre": "Sin afiliación a servicios de salud",
     "celdas": [
      73.2,
      73.9,
      82.8,
      65.5
     ]
    },
    {
     "nombre": "No terminó la primaria",
     "celdas": [
      23.4,
      27.4,
      27.6,
      34.5
     ]
    },
    {
     "nombre": "Sin trabajo",
     "celdas": [
      54.8,
      72.2,
      75.9,
      79.3
     ]
    },
    {
     "nombre": "Vivienda precaria",
     "celdas": [
      0.0,
      0.4,
      0.0,
      0.0
     ]
    },
    {
     "nombre": "Le falta un aparato de apoyo",
     "celdas": [
      29.5,
      40.4,
      37.9,
      34.5
     ]
    }
   ]
  }
 },
 "Hidalgo": {
  "discapacidad": {
   "personas": 3354,
   "edad_mediana": 46,
   "calificacion": 48.5,
   "necesita_apoyo": 94.8,
   "nivel": [
    {
     "nombre": "25 a 40",
     "valor": 33.9,
     "n": 1137
    },
    {
     "nombre": "40 a 55",
     "valor": 34.7,
     "n": 1164
    },
    {
     "nombre": "55 a 70",
     "valor": 20.3,
     "n": 682
    },
    {
     "nombre": "70 o más",
     "valor": 11.1,
     "n": 371
    }
   ],
   "apoyo": [
    {
     "nombre": "No requiere",
     "valor": 5.2,
     "n": 176
    },
    {
     "nombre": "Incitación verbal o gestual",
     "valor": 2.8,
     "n": 93
    },
    {
     "nombre": "Supervisión",
     "valor": 20.2,
     "n": 677
    },
    {
     "nombre": "Ayuda física parcial",
     "valor": 46.3,
     "n": 1554
    },
    {
     "nombre": "Ayuda física total",
     "valor": 25.5,
     "n": 854
    }
   ],
   "origen": [
    {
     "nombre": "Congénita (de nacimiento)",
     "valor": 33.2,
     "n": 1114
    },
    {
     "nombre": "Enfermedad crónico-degenerativa",
     "valor": 29.2,
     "n": 980
    },
    {
     "nombre": "Accidente o violencia",
     "valor": 13.8,
     "n": 464
    },
    {
     "nombre": "Embarazo, parto o recién nacido",
     "valor": 8.8,
     "n": 294
    },
    {
     "nombre": "Enfermedad infecciosa",
     "valor": 3.0,
     "n": 99
    },
    {
     "nombre": "Otra causa o no aplica",
     "valor": 12.0,
     "n": 403
    }
   ],
   "condicion": [
    {
     "nombre": "Mental y del neurodesarrollo",
     "valor": 25.1,
     "n": 842,
     "detalle": "autismo, discapacidad intelectual"
    },
    {
     "nombre": "Sistema nervioso",
     "valor": 15.8,
     "n": 530,
     "detalle": "epilepsia, parálisis cerebral"
    },
    {
     "nombre": "Visión",
     "valor": 11.1,
     "n": 371,
     "detalle": "ceguera, retinopatía diabética"
    },
    {
     "nombre": "Lesiones y traumatismos",
     "valor": 9.2,
     "n": 308,
     "detalle": "amputaciones, fracturas"
    },
    {
     "nombre": "Anomalías del desarrollo",
     "valor": 9.2,
     "n": 308,
     "detalle": "síndrome de Down"
    },
    {
     "nombre": "Músculos, huesos y articulaciones",
     "valor": 8.8,
     "n": 295,
     "detalle": "artritis, artrosis de rodilla"
    },
    {
     "nombre": "Síntomas generales",
     "valor": 6.8,
     "n": 228,
     "detalle": "problemas de marcha, hemiplejia"
    },
    {
     "nombre": "Oído",
     "valor": 3.4,
     "n": 115,
     "detalle": "hipoacusia, pérdida auditiva"
    },
    {
     "nombre": "Otras",
     "valor": 10.6,
     "n": 357,
     "detalle": "enfermedad renal, ausencia de un miembro, tumores"
    }
   ],
   "edad": [
    {
     "nombre": "0 a 5",
     "valor": 4.1,
     "n": 139
    },
    {
     "nombre": "6 a 17",
     "valor": 14.7,
     "n": 494
    },
    {
     "nombre": "18 a 29",
     "valor": 12.4,
     "n": 415
    },
    {
     "nombre": "30 a 44",
     "valor": 17.0,
     "n": 570
    },
    {
     "nombre": "45 a 64",
     "valor": 39.0,
     "n": 1307
    },
    {
     "nombre": "65 o más",
     "valor": 12.8,
     "n": 429
    }
   ]
  },
  "economia": {
   "personas": 2292,
   "carencias_promedio": 1.91,
   "dependiente": 72.6,
   "apoyo_social": 34.3,
   "carencias": [
    {
     "nombre": "Sin afiliación a servicios de salud",
     "valor": 68.0,
     "n": 1559
    },
    {
     "nombre": "No terminó la primaria",
     "valor": 26.3,
     "n": 602
    },
    {
     "nombre": "Sin trabajo",
     "valor": 55.5,
     "n": 1271
    },
    {
     "nombre": "Vivienda precaria",
     "valor": 0.7,
     "n": 15
    },
    {
     "nombre": "Le falta un aparato de apoyo",
     "valor": 40.4,
     "n": 927
    }
   ],
   "actividad": [
    {
     "nombre": "No trabaja ni estudia por barreras del entorno",
     "valor": 53.2,
     "n": 1220
    },
    {
     "nombre": "Quehaceres del hogar",
     "valor": 15.3,
     "n": 351
    },
    {
     "nombre": "Tiene trabajo",
     "valor": 11.3,
     "n": 260
    },
    {
     "nombre": "Jubilado o pensionado",
     "valor": 3.2,
     "n": 73
    },
    {
     "nombre": "Busca trabajo",
     "valor": 2.2,
     "n": 51
    },
    {
     "nombre": "Estudiante",
     "valor": 1.6,
     "n": 36
    },
    {
     "nombre": "Otra o no aplica",
     "valor": 13.1,
     "n": 301
    }
   ],
   "salud": [
    {
     "nombre": "Ninguna",
     "valor": 68.0,
     "n": 1559
    },
    {
     "nombre": "IMSS",
     "valor": 17.2,
     "n": 394
    },
    {
     "nombre": "Bienestar",
     "valor": 6.9,
     "n": 158
    },
    {
     "nombre": "ISSSTE",
     "valor": 4.1,
     "n": 95
    },
    {
     "nombre": "Otra o no especificado",
     "valor": 3.8,
     "n": 86
    }
   ],
   "escolaridad": [
    {
     "nombre": "Sin primaria terminada",
     "valor": 26.3,
     "n": 602
    },
    {
     "nombre": "Primaria",
     "valor": 19.4,
     "n": 444
    },
    {
     "nombre": "Secundaria",
     "valor": 32.8,
     "n": 751
    },
    {
     "nombre": "Bachillerato",
     "valor": 13.6,
     "n": 311
    },
    {
     "nombre": "Licenciatura o más",
     "valor": 5.9,
     "n": 136
    },
    {
     "nombre": "No especificado",
     "valor": 2.1,
     "n": 48
    }
   ]
  },
  "relacion": {
   "calificacion_por_carencias": [
    {
     "nombre": "0",
     "valor": 43.11,
     "n": 179
    },
    {
     "nombre": "1",
     "valor": 45.91,
     "n": 619
    },
    {
     "nombre": "2",
     "valor": 47.08,
     "n": 824
    },
    {
     "nombre": "3",
     "valor": 51.5,
     "n": 573
    },
    {
     "nombre": "4",
     "valor": 54.03,
     "n": 97
    }
   ],
   "funciones_por_carencias": [
    {
     "nombre": "0",
     "valor": 10.78,
     "n": 179
    },
    {
     "nombre": "1",
     "valor": 11.81,
     "n": 619
    },
    {
     "nombre": "2",
     "valor": 12.59,
     "n": 824
    },
    {
     "nombre": "3",
     "valor": 13.58,
     "n": 573
    },
    {
     "nombre": "4",
     "valor": 14.53,
     "n": 97
    }
   ],
   "carencias_por_apoyo": [
    {
     "nombre": "No requiere",
     "valor": 1.5,
     "n": 163
    },
    {
     "nombre": "Incitación verbal o gestual",
     "valor": 1.52,
     "n": 52
    },
    {
     "nombre": "Supervisión",
     "valor": 1.86,
     "n": 475
    },
    {
     "nombre": "Ayuda física parcial",
     "valor": 1.91,
     "n": 1132
    },
    {
     "nombre": "Ayuda física total",
     "valor": 2.14,
     "n": 470
    }
   ],
   "carencias_por_nivel": [
    {
     "nombre": "25 a 40",
     "valor": 1.76,
     "n": 793
    },
    {
     "nombre": "40 a 55",
     "valor": 1.89,
     "n": 820
    },
    {
     "nombre": "55 a 70",
     "valor": 2.02,
     "n": 449
    },
    {
     "nombre": "70 o más",
     "valor": 2.29,
     "n": 230
    }
   ],
   "personas_por_nivel": [
    793,
    820,
    449,
    230
   ],
   "matriz": [
    {
     "nombre": "Sin afiliación a servicios de salud",
     "celdas": [
      70.2,
      67.8,
      63.5,
      70.0
     ]
    },
    {
     "nombre": "No terminó la primaria",
     "celdas": [
      21.4,
      24.4,
      29.8,
      42.6
     ]
    },
    {
     "nombre": "Sin trabajo",
     "celdas": [
      48.2,
      53.4,
      64.8,
      69.6
     ]
    },
    {
     "nombre": "Vivienda precaria",
     "celdas": [
      0.4,
      1.0,
      0.4,
      0.9
     ]
    },
    {
     "nombre": "Le falta un aparato de apoyo",
     "celdas": [
      35.3,
      42.4,
      43.2,
      45.7
     ]
    }
   ]
  }
 },
 "Jalisco": {
  "discapacidad": {
   "personas": 4401,
   "edad_mediana": 32,
   "calificacion": 39.2,
   "necesita_apoyo": 56.7,
   "nivel": [
    {
     "nombre": "25 a 40",
     "valor": 62.0,
     "n": 2729
    },
    {
     "nombre": "40 a 55",
     "valor": 26.1,
     "n": 1149
    },
    {
     "nombre": "55 a 70",
     "valor": 9.3,
     "n": 410
    },
    {
     "nombre": "70 o más",
     "valor": 2.6,
     "n": 113
    }
   ],
   "apoyo": [
    {
     "nombre": "No requiere",
     "valor": 43.3,
     "n": 1906
    },
    {
     "nombre": "Incitación verbal o gestual",
     "valor": 1.8,
     "n": 79
    },
    {
     "nombre": "Supervisión",
     "valor": 21.6,
     "n": 951
    },
    {
     "nombre": "Ayuda física parcial",
     "valor": 22.8,
     "n": 1004
    },
    {
     "nombre": "Ayuda física total",
     "valor": 10.5,
     "n": 461
    }
   ],
   "origen": [
    {
     "nombre": "Congénita (de nacimiento)",
     "valor": 47.7,
     "n": 2099
    },
    {
     "nombre": "Enfermedad crónico-degenerativa",
     "valor": 20.4,
     "n": 896
    },
    {
     "nombre": "Accidente o violencia",
     "valor": 8.5,
     "n": 376
    },
    {
     "nombre": "Embarazo, parto o recién nacido",
     "valor": 7.0,
     "n": 310
    },
    {
     "nombre": "Enfermedad infecciosa",
     "valor": 3.7,
     "n": 161
    },
    {
     "nombre": "Otra causa o no aplica",
     "valor": 12.7,
     "n": 559
    }
   ],
   "condicion": [
    {
     "nombre": "Mental y del neurodesarrollo",
     "valor": 39.4,
     "n": 1733,
     "detalle": "autismo, discapacidad intelectual"
    },
    {
     "nombre": "Sistema nervioso",
     "valor": 14.3,
     "n": 630,
     "detalle": "epilepsia, parálisis cerebral"
    },
    {
     "nombre": "Anomalías del desarrollo",
     "valor": 8.3,
     "n": 366,
     "detalle": "síndrome de Down"
    },
    {
     "nombre": "Síntomas generales",
     "valor": 8.0,
     "n": 354,
     "detalle": "problemas de marcha, hemiplejia"
    },
    {
     "nombre": "Visión",
     "valor": 5.9,
     "n": 258,
     "detalle": "ceguera, retinopatía diabética"
    },
    {
     "nombre": "Músculos, huesos y articulaciones",
     "valor": 5.6,
     "n": 248,
     "detalle": "artritis, artrosis de rodilla"
    },
    {
     "nombre": "Lesiones y traumatismos",
     "valor": 4.7,
     "n": 209,
     "detalle": "amputaciones, fracturas"
    },
    {
     "nombre": "Oído",
     "valor": 4.5,
     "n": 196,
     "detalle": "hipoacusia, pérdida auditiva"
    },
    {
     "nombre": "Otras",
     "valor": 9.2,
     "n": 407,
     "detalle": "enfermedad renal, ausencia de un miembro, tumores"
    }
   ],
   "edad": [
    {
     "nombre": "0 a 5",
     "valor": 13.1,
     "n": 577
    },
    {
     "nombre": "6 a 17",
     "valor": 23.0,
     "n": 1011
    },
    {
     "nombre": "18 a 29",
     "valor": 12.5,
     "n": 548
    },
    {
     "nombre": "30 a 44",
     "valor": 15.5,
     "n": 681
    },
    {
     "nombre": "45 a 64",
     "valor": 28.9,
     "n": 1272
    },
    {
     "nombre": "65 o más",
     "valor": 7.1,
     "n": 312
    }
   ]
  },
  "economia": {
   "personas": 2501,
   "carencias_promedio": 1.28,
   "dependiente": 74.7,
   "apoyo_social": 14.3,
   "carencias": [
    {
     "nombre": "Sin afiliación a servicios de salud",
     "valor": 46.2,
     "n": 1155
    },
    {
     "nombre": "No terminó la primaria",
     "valor": 26.6,
     "n": 665
    },
    {
     "nombre": "Sin trabajo",
     "valor": 36.3,
     "n": 909
    },
    {
     "nombre": "Vivienda precaria",
     "valor": 0.5,
     "n": 12
    },
    {
     "nombre": "Le falta un aparato de apoyo",
     "valor": 18.5,
     "n": 462
    }
   ],
   "actividad": [
    {
     "nombre": "No trabaja ni estudia por barreras del entorno",
     "valor": 34.0,
     "n": 850
    },
    {
     "nombre": "Quehaceres del hogar",
     "valor": 23.9,
     "n": 598
    },
    {
     "nombre": "Tiene trabajo",
     "valor": 17.0,
     "n": 424
    },
    {
     "nombre": "Jubilado o pensionado",
     "valor": 9.8,
     "n": 245
    },
    {
     "nombre": "Estudiante",
     "valor": 2.9,
     "n": 73
    },
    {
     "nombre": "Busca trabajo",
     "valor": 2.4,
     "n": 59
    },
    {
     "nombre": "Otra o no aplica",
     "valor": 10.1,
     "n": 252
    }
   ],
   "salud": [
    {
     "nombre": "Ninguna",
     "valor": 46.2,
     "n": 1155
    },
    {
     "nombre": "IMSS",
     "valor": 37.4,
     "n": 935
    },
    {
     "nombre": "Bienestar",
     "valor": 5.1,
     "n": 127
    },
    {
     "nombre": "ISSSTE",
     "valor": 2.4,
     "n": 60
    },
    {
     "nombre": "Otra o no especificado",
     "valor": 9.0,
     "n": 224
    }
   ],
   "escolaridad": [
    {
     "nombre": "Sin primaria terminada",
     "valor": 26.6,
     "n": 665
    },
    {
     "nombre": "Primaria",
     "valor": 21.0,
     "n": 526
    },
    {
     "nombre": "Secundaria",
     "valor": 26.8,
     "n": 671
    },
    {
     "nombre": "Bachillerato",
     "valor": 15.8,
     "n": 395
    },
    {
     "nombre": "Licenciatura o más",
     "valor": 8.6,
     "n": 215
    },
    {
     "nombre": "No especificado",
     "valor": 1.2,
     "n": 29
    }
   ]
  },
  "relacion": {
   "calificacion_por_carencias": [
    {
     "nombre": "0",
     "valor": 34.63,
     "n": 677
    },
    {
     "nombre": "1",
     "valor": 36.87,
     "n": 823
    },
    {
     "nombre": "2",
     "valor": 39.41,
     "n": 657
    },
    {
     "nombre": "3",
     "valor": 43.1,
     "n": 310
    },
    {
     "nombre": "4",
     "valor": 44.18,
     "n": 34
    }
   ],
   "funciones_por_carencias": [
    {
     "nombre": "0",
     "valor": 10.81,
     "n": 677
    },
    {
     "nombre": "1",
     "valor": 11.35,
     "n": 823
    },
    {
     "nombre": "2",
     "valor": 12.57,
     "n": 657
    },
    {
     "nombre": "3",
     "valor": 13.79,
     "n": 310
    },
    {
     "nombre": "4",
     "valor": 14.24,
     "n": 34
    }
   ],
   "carencias_por_apoyo": [
    {
     "nombre": "No requiere",
     "valor": 1.03,
     "n": 1516
    },
    {
     "nombre": "Incitación verbal o gestual",
     "valor": 1.61,
     "n": 31
    },
    {
     "nombre": "Supervisión",
     "valor": 1.54,
     "n": 368
    },
    {
     "nombre": "Ayuda física parcial",
     "valor": 1.64,
     "n": 426
    },
    {
     "nombre": "Ayuda física total",
     "valor": 2.0,
     "n": 160
    }
   ],
   "carencias_por_nivel": [
    {
     "nombre": "25 a 40",
     "valor": 1.15,
     "n": 1674
    },
    {
     "nombre": "40 a 55",
     "valor": 1.43,
     "n": 591
    },
    {
     "nombre": "55 a 70",
     "valor": 1.81,
     "n": 192
    },
    {
     "nombre": "70 o más",
     "valor": 2.05,
     "n": 44
    }
   ],
   "personas_por_nivel": [
    1674,
    591,
    192,
    44
   ],
   "matriz": [
    {
     "nombre": "Sin afiliación a servicios de salud",
     "celdas": [
      43.8,
      50.3,
      54.2,
      47.7
     ]
    },
    {
     "nombre": "No terminó la primaria",
     "celdas": [
      21.5,
      32.1,
      49.0,
      47.7
     ]
    },
    {
     "nombre": "Sin trabajo",
     "celdas": [
      29.5,
      44.5,
      61.5,
      77.3
     ]
    },
    {
     "nombre": "Vivienda precaria",
     "celdas": [
      0.7,
      0.2,
      0.0,
      0.0
     ]
    },
    {
     "nombre": "Le falta un aparato de apoyo",
     "celdas": [
      19.2,
      16.2,
      16.1,
      31.8
     ]
    }
   ]
  }
 },
 "Estado de México": {
  "discapacidad": {
   "personas": 15197,
   "edad_mediana": 39,
   "calificacion": 46.2,
   "necesita_apoyo": 89.5,
   "nivel": [
    {
     "nombre": "25 a 40",
     "valor": 37.5,
     "n": 5699
    },
    {
     "nombre": "40 a 55",
     "valor": 37.8,
     "n": 5742
    },
    {
     "nombre": "55 a 70",
     "valor": 18.5,
     "n": 2816
    },
    {
     "nombre": "70 o más",
     "valor": 6.2,
     "n": 940
    }
   ],
   "apoyo": [
    {
     "nombre": "No requiere",
     "valor": 10.5,
     "n": 1598
    },
    {
     "nombre": "Incitación verbal o gestual",
     "valor": 6.4,
     "n": 971
    },
    {
     "nombre": "Supervisión",
     "valor": 29.1,
     "n": 4419
    },
    {
     "nombre": "Ayuda física parcial",
     "valor": 40.0,
     "n": 6078
    },
    {
     "nombre": "Ayuda física total",
     "valor": 14.0,
     "n": 2131
    }
   ],
   "origen": [
    {
     "nombre": "Congénita (de nacimiento)",
     "valor": 37.1,
     "n": 5641
    },
    {
     "nombre": "Enfermedad crónico-degenerativa",
     "valor": 25.7,
     "n": 3904
    },
    {
     "nombre": "Accidente o violencia",
     "valor": 13.5,
     "n": 2045
    },
    {
     "nombre": "Embarazo, parto o recién nacido",
     "valor": 6.1,
     "n": 929
    },
    {
     "nombre": "Enfermedad infecciosa",
     "valor": 2.7,
     "n": 407
    },
    {
     "nombre": "Otra causa o no aplica",
     "valor": 14.9,
     "n": 2271
    }
   ],
   "condicion": [
    {
     "nombre": "Mental y del neurodesarrollo",
     "valor": 28.6,
     "n": 4341,
     "detalle": "autismo, discapacidad intelectual"
    },
    {
     "nombre": "Sistema nervioso",
     "valor": 13.2,
     "n": 2011,
     "detalle": "epilepsia, parálisis cerebral"
    },
    {
     "nombre": "Visión",
     "valor": 10.0,
     "n": 1516,
     "detalle": "ceguera, retinopatía diabética"
    },
    {
     "nombre": "Lesiones y traumatismos",
     "valor": 9.5,
     "n": 1438,
     "detalle": "amputaciones, fracturas"
    },
    {
     "nombre": "Músculos, huesos y articulaciones",
     "valor": 8.9,
     "n": 1351,
     "detalle": "artritis, artrosis de rodilla"
    },
    {
     "nombre": "Anomalías del desarrollo",
     "valor": 8.5,
     "n": 1291,
     "detalle": "síndrome de Down"
    },
    {
     "nombre": "Oído",
     "valor": 6.5,
     "n": 982,
     "detalle": "hipoacusia, pérdida auditiva"
    },
    {
     "nombre": "Síntomas generales",
     "valor": 5.0,
     "n": 763,
     "detalle": "problemas de marcha, hemiplejia"
    },
    {
     "nombre": "Otras",
     "valor": 9.9,
     "n": 1504,
     "detalle": "enfermedad renal, ausencia de un miembro, tumores"
    }
   ],
   "edad": [
    {
     "nombre": "0 a 5",
     "valor": 6.5,
     "n": 991
    },
    {
     "nombre": "6 a 17",
     "valor": 22.2,
     "n": 3374
    },
    {
     "nombre": "18 a 29",
     "valor": 11.7,
     "n": 1778
    },
    {
     "nombre": "30 a 44",
     "valor": 17.4,
     "n": 2640
    },
    {
     "nombre": "45 a 64",
     "valor": 38.6,
     "n": 5869
    },
    {
     "nombre": "65 o más",
     "valor": 3.6,
     "n": 545
    }
   ]
  },
  "economia": {
   "personas": 10287,
   "carencias_promedio": 1.55,
   "dependiente": 70.0,
   "apoyo_social": 24.1,
   "carencias": [
    {
     "nombre": "Sin afiliación a servicios de salud",
     "valor": 55.4,
     "n": 5694
    },
    {
     "nombre": "No terminó la primaria",
     "valor": 14.8,
     "n": 1526
    },
    {
     "nombre": "Sin trabajo",
     "valor": 56.8,
     "n": 5838
    },
    {
     "nombre": "Vivienda precaria",
     "valor": 2.6,
     "n": 267
    },
    {
     "nombre": "Le falta un aparato de apoyo",
     "valor": 25.0,
     "n": 2575
    }
   ],
   "actividad": [
    {
     "nombre": "No trabaja ni estudia por barreras del entorno",
     "valor": 54.6,
     "n": 5613
    },
    {
     "nombre": "Tiene trabajo",
     "valor": 14.5,
     "n": 1488
    },
    {
     "nombre": "Quehaceres del hogar",
     "valor": 12.2,
     "n": 1252
    },
    {
     "nombre": "Jubilado o pensionado",
     "valor": 7.4,
     "n": 766
    },
    {
     "nombre": "Estudiante",
     "valor": 4.4,
     "n": 453
    },
    {
     "nombre": "Busca trabajo",
     "valor": 2.2,
     "n": 225
    },
    {
     "nombre": "Otra o no aplica",
     "valor": 4.8,
     "n": 490
    }
   ],
   "salud": [
    {
     "nombre": "Ninguna",
     "valor": 55.4,
     "n": 5694
    },
    {
     "nombre": "IMSS",
     "valor": 28.3,
     "n": 2911
    },
    {
     "nombre": "ISSSTE",
     "valor": 3.6,
     "n": 373
    },
    {
     "nombre": "Bienestar",
     "valor": 3.5,
     "n": 357
    },
    {
     "nombre": "Otra o no especificado",
     "valor": 9.3,
     "n": 952
    }
   ],
   "escolaridad": [
    {
     "nombre": "Sin primaria terminada",
     "valor": 14.8,
     "n": 1526
    },
    {
     "nombre": "Primaria",
     "valor": 18.5,
     "n": 1902
    },
    {
     "nombre": "Secundaria",
     "valor": 35.1,
     "n": 3613
    },
    {
     "nombre": "Bachillerato",
     "valor": 21.7,
     "n": 2229
    },
    {
     "nombre": "Licenciatura o más",
     "valor": 8.7,
     "n": 900
    },
    {
     "nombre": "No especificado",
     "valor": 1.1,
     "n": 117
    }
   ]
  },
  "relacion": {
   "calificacion_por_carencias": [
    {
     "nombre": "0",
     "valor": 43.58,
     "n": 1771
    },
    {
     "nombre": "1",
     "valor": 45.37,
     "n": 3160
    },
    {
     "nombre": "2",
     "valor": 47.08,
     "n": 3602
    },
    {
     "nombre": "3",
     "valor": 49.12,
     "n": 1491
    },
    {
     "nombre": "4",
     "valor": 52.96,
     "n": 252
    },
    {
     "nombre": "5",
     "valor": 55.68,
     "n": 11
    }
   ],
   "funciones_por_carencias": [
    {
     "nombre": "0",
     "valor": 11.47,
     "n": 1771
    },
    {
     "nombre": "1",
     "valor": 11.8,
     "n": 3160
    },
    {
     "nombre": "2",
     "valor": 12.32,
     "n": 3602
    },
    {
     "nombre": "3",
     "valor": 13.06,
     "n": 1491
    },
    {
     "nombre": "4",
     "valor": 14.36,
     "n": 252
    },
    {
     "nombre": "5",
     "valor": 15.09,
     "n": 11
    }
   ],
   "carencias_por_apoyo": [
    {
     "nombre": "No requiere",
     "valor": 1.24,
     "n": 1467
    },
    {
     "nombre": "Incitación verbal o gestual",
     "valor": 1.59,
     "n": 469
    },
    {
     "nombre": "Supervisión",
     "valor": 1.6,
     "n": 2606
    },
    {
     "nombre": "Ayuda física parcial",
     "valor": 1.5,
     "n": 4595
    },
    {
     "nombre": "Ayuda física total",
     "valor": 1.96,
     "n": 1150
    }
   ],
   "carencias_por_nivel": [
    {
     "nombre": "25 a 40",
     "valor": 1.4,
     "n": 3747
    },
    {
     "nombre": "40 a 55",
     "valor": 1.53,
     "n": 3950
    },
    {
     "nombre": "55 a 70",
     "valor": 1.71,
     "n": 1991
    },
    {
     "nombre": "70 o más",
     "valor": 1.95,
     "n": 599
    }
   ],
   "personas_por_nivel": [
    3747,
    3950,
    1991,
    599
   ],
   "matriz": [
    {
     "nombre": "Sin afiliación a servicios de salud",
     "celdas": [
      56.1,
      54.4,
      54.9,
      58.4
     ]
    },
    {
     "nombre": "No terminó la primaria",
     "celdas": [
      11.9,
      14.1,
      18.5,
      25.9
     ]
    },
    {
     "nombre": "Sin trabajo",
     "celdas": [
      48.9,
      58.3,
      66.5,
      62.9
     ]
    },
    {
     "nombre": "Vivienda precaria",
     "celdas": [
      2.8,
      3.1,
      1.3,
      2.0
     ]
    },
    {
     "nombre": "Le falta un aparato de apoyo",
     "celdas": [
      20.8,
      23.5,
      29.9,
      45.7
     ]
    }
   ]
  }
 },
 "Querétaro": {
  "discapacidad": {
   "personas": 301,
   "edad_mediana": 41,
   "calificacion": 48.2,
   "necesita_apoyo": 91.4,
   "nivel": [
    {
     "nombre": "25 a 40",
     "valor": 29.6,
     "n": 89
    },
    {
     "nombre": "40 a 55",
     "valor": 44.2,
     "n": 133
    },
    {
     "nombre": "55 a 70",
     "valor": 18.9,
     "n": 57
    },
    {
     "nombre": "70 o más",
     "valor": 7.3,
     "n": 22
    }
   ],
   "apoyo": [
    {
     "nombre": "No requiere",
     "valor": 8.6,
     "n": 26
    },
    {
     "nombre": "Incitación verbal o gestual",
     "valor": 3.7,
     "n": 11
    },
    {
     "nombre": "Supervisión",
     "valor": 43.2,
     "n": 130
    },
    {
     "nombre": "Ayuda física parcial",
     "valor": 31.9,
     "n": 96
    },
    {
     "nombre": "Ayuda física total",
     "valor": 12.6,
     "n": 38
    }
   ],
   "origen": [
    {
     "nombre": "Congénita (de nacimiento)",
     "valor": 50.5,
     "n": 152
    },
    {
     "nombre": "Enfermedad crónico-degenerativa",
     "valor": 20.3,
     "n": 61
    },
    {
     "nombre": "Accidente o violencia",
     "valor": 13.0,
     "n": 39
    },
    {
     "nombre": "Embarazo, parto o recién nacido",
     "valor": 2.7,
     "n": 8
    },
    {
     "nombre": "Enfermedad infecciosa",
     "valor": 1.3,
     "n": 4
    },
    {
     "nombre": "Otra causa o no aplica",
     "valor": 12.3,
     "n": 37
    }
   ],
   "condicion": [
    {
     "nombre": "Mental y del neurodesarrollo",
     "valor": 28.6,
     "n": 86,
     "detalle": "autismo, discapacidad intelectual"
    },
    {
     "nombre": "Sistema nervioso",
     "valor": 15.3,
     "n": 46,
     "detalle": "epilepsia, parálisis cerebral"
    },
    {
     "nombre": "Anomalías del desarrollo",
     "valor": 11.6,
     "n": 35,
     "detalle": "síndrome de Down"
    },
    {
     "nombre": "Visión",
     "valor": 9.6,
     "n": 29,
     "detalle": "ceguera, retinopatía diabética"
    },
    {
     "nombre": "Músculos, huesos y articulaciones",
     "valor": 9.0,
     "n": 27,
     "detalle": "artritis, artrosis de rodilla"
    },
    {
     "nombre": "Lesiones y traumatismos",
     "valor": 8.6,
     "n": 26,
     "detalle": "amputaciones, fracturas"
    },
    {
     "nombre": "Oído",
     "valor": 4.3,
     "n": 13,
     "detalle": "hipoacusia, pérdida auditiva"
    },
    {
     "nombre": "Síntomas generales",
     "valor": 2.3,
     "n": 7,
     "detalle": "problemas de marcha, hemiplejia"
    },
    {
     "nombre": "Otras",
     "valor": 10.6,
     "n": 32,
     "detalle": "enfermedad renal, ausencia de un miembro, tumores"
    }
   ],
   "edad": [
    {
     "nombre": "0 a 5",
     "valor": 5.6,
     "n": 17
    },
    {
     "nombre": "6 a 17",
     "valor": 15.0,
     "n": 45
    },
    {
     "nombre": "18 a 29",
     "valor": 13.0,
     "n": 39
    },
    {
     "nombre": "30 a 44",
     "valor": 22.9,
     "n": 69
    },
    {
     "nombre": "45 a 64",
     "valor": 34.9,
     "n": 105
    },
    {
     "nombre": "65 o más",
     "valor": 8.6,
     "n": 26
    }
   ]
  },
  "economia": {
   "personas": 213,
   "carencias_promedio": 2.17,
   "dependiente": 65.7,
   "apoyo_social": 24.9,
   "carencias": [
    {
     "nombre": "Sin afiliación a servicios de salud",
     "valor": 75.1,
     "n": 160
    },
    {
     "nombre": "No terminó la primaria",
     "valor": 25.4,
     "n": 54
    },
    {
     "nombre": "Sin trabajo",
     "valor": 55.4,
     "n": 118
    },
    {
     "nombre": "Vivienda precaria",
     "valor": 0.9,
     "n": 2
    },
    {
     "nombre": "Le falta un aparato de apoyo",
     "valor": 60.1,
     "n": 128
    }
   ],
   "actividad": [
    {
     "nombre": "No trabaja ni estudia por barreras del entorno",
     "valor": 53.1,
     "n": 113
    },
    {
     "nombre": "Tiene trabajo",
     "valor": 15.5,
     "n": 33
    },
    {
     "nombre": "Quehaceres del hogar",
     "valor": 9.9,
     "n": 21
    },
    {
     "nombre": "Estudiante",
     "valor": 6.1,
     "n": 13
    },
    {
     "nombre": "Jubilado o pensionado",
     "valor": 3.3,
     "n": 7
    },
    {
     "nombre": "Busca trabajo",
     "valor": 2.3,
     "n": 5
    },
    {
     "nombre": "Otra o no aplica",
     "valor": 9.9,
     "n": 21
    }
   ],
   "salud": [
    {
     "nombre": "Ninguna",
     "valor": 75.1,
     "n": 160
    },
    {
     "nombre": "IMSS",
     "valor": 16.9,
     "n": 36
    },
    {
     "nombre": "ISSSTE",
     "valor": 1.4,
     "n": 3
    },
    {
     "nombre": "Otra o no especificado",
     "valor": 6.6,
     "n": 14
    }
   ],
   "escolaridad": [
    {
     "nombre": "Sin primaria terminada",
     "valor": 25.4,
     "n": 54
    },
    {
     "nombre": "Primaria",
     "valor": 19.7,
     "n": 42
    },
    {
     "nombre": "Secundaria",
     "valor": 30.0,
     "n": 64
    },
    {
     "nombre": "Bachillerato",
     "valor": 16.4,
     "n": 35
    },
    {
     "nombre": "Licenciatura o más",
     "valor": 7.0,
     "n": 15
    },
    {
     "nombre": "No especificado",
     "valor": 1.4,
     "n": 3
    }
   ]
  },
  "relacion": {
   "calificacion_por_carencias": [
    {
     "nombre": "0",
     "valor": 49.55,
     "n": 13
    },
    {
     "nombre": "1",
     "valor": 46.35,
     "n": 44
    },
    {
     "nombre": "2",
     "valor": 46.59,
     "n": 73
    },
    {
     "nombre": "3",
     "valor": 49.11,
     "n": 60
    },
    {
     "nombre": "4",
     "valor": 54.68,
     "n": 23
    }
   ],
   "funciones_por_carencias": [
    {
     "nombre": "0",
     "valor": 14.15,
     "n": 13
    },
    {
     "nombre": "1",
     "valor": 13.16,
     "n": 44
    },
    {
     "nombre": "2",
     "valor": 13.79,
     "n": 73
    },
    {
     "nombre": "3",
     "valor": 14.55,
     "n": 60
    },
    {
     "nombre": "4",
     "valor": 15.43,
     "n": 23
    }
   ],
   "carencias_por_apoyo": [
    {
     "nombre": "No requiere",
     "valor": 1.62,
     "n": 24
    },
    {
     "nombre": "Incitación verbal o gestual",
     "valor": 2.88,
     "n": 8
    },
    {
     "nombre": "Supervisión",
     "valor": 2.24,
     "n": 87
    },
    {
     "nombre": "Ayuda física parcial",
     "valor": 1.99,
     "n": 71
    },
    {
     "nombre": "Ayuda física total",
     "valor": 2.78,
     "n": 23
    }
   ],
   "carencias_por_nivel": [
    {
     "nombre": "25 a 40",
     "valor": 2.02,
     "n": 62
    },
    {
     "nombre": "40 a 55",
     "valor": 2.18,
     "n": 98
    },
    {
     "nombre": "55 a 70",
     "valor": 2.25,
     "n": 36
    },
    {
     "nombre": "70 o más",
     "valor": 2.47,
     "n": 17
    }
   ],
   "personas_por_nivel": [
    62,
    98,
    36,
    17
   ],
   "matriz": [
    {
     "nombre": "Sin afiliación a servicios de salud",
     "celdas": [
      79.0,
      75.5,
      69.4,
      70.6
     ]
    },
    {
     "nombre": "No terminó la primaria",
     "celdas": [
      17.7,
      21.4,
      38.9,
      47.1
     ]
    },
    {
     "nombre": "Sin trabajo",
     "celdas": [
      41.9,
      60.2,
      61.1,
      64.7
     ]
    },
    {
     "nombre": "Vivienda precaria",
     "celdas": [
      3.2,
      0.0,
      0.0,
      0.0
     ]
    },
    {
     "nombre": "Le falta un aparato de apoyo",
     "celdas": [
      59.7,
      61.2,
      55.6,
      64.7
     ]
    }
   ]
  }
 },
 "Quintana Roo": {
  "discapacidad": {
   "personas": 334,
   "edad_mediana": 45,
   "calificacion": 44.5,
   "necesita_apoyo": 96.4,
   "nivel": [
    {
     "nombre": "25 a 40",
     "valor": 40.4,
     "n": 135
    },
    {
     "nombre": "40 a 55",
     "valor": 40.1,
     "n": 134
    },
    {
     "nombre": "55 a 70",
     "valor": 14.4,
     "n": 48
    },
    {
     "nombre": "70 o más",
     "valor": 5.1,
     "n": 17
    }
   ],
   "apoyo": [
    {
     "nombre": "No requiere",
     "valor": 3.6,
     "n": 12
    },
    {
     "nombre": "Incitación verbal o gestual",
     "valor": 5.7,
     "n": 19
    },
    {
     "nombre": "Supervisión",
     "valor": 34.7,
     "n": 116
    },
    {
     "nombre": "Ayuda física parcial",
     "valor": 35.9,
     "n": 120
    },
    {
     "nombre": "Ayuda física total",
     "valor": 20.1,
     "n": 67
    }
   ],
   "origen": [
    {
     "nombre": "Congénita (de nacimiento)",
     "valor": 38.0,
     "n": 127
    },
    {
     "nombre": "Enfermedad crónico-degenerativa",
     "valor": 32.3,
     "n": 108
    },
    {
     "nombre": "Accidente o violencia",
     "valor": 14.4,
     "n": 48
    },
    {
     "nombre": "Embarazo, parto o recién nacido",
     "valor": 4.5,
     "n": 15
    },
    {
     "nombre": "Enfermedad infecciosa",
     "valor": 1.5,
     "n": 5
    },
    {
     "nombre": "Otra causa o no aplica",
     "valor": 9.3,
     "n": 31
    }
   ],
   "condicion": [
    {
     "nombre": "Mental y del neurodesarrollo",
     "valor": 21.9,
     "n": 73,
     "detalle": "autismo, discapacidad intelectual"
    },
    {
     "nombre": "Sistema nervioso",
     "valor": 12.9,
     "n": 43,
     "detalle": "epilepsia, parálisis cerebral"
    },
    {
     "nombre": "Músculos, huesos y articulaciones",
     "valor": 10.5,
     "n": 35,
     "detalle": "artritis, artrosis de rodilla"
    },
    {
     "nombre": "Lesiones y traumatismos",
     "valor": 10.2,
     "n": 34,
     "detalle": "amputaciones, fracturas"
    },
    {
     "nombre": "Visión",
     "valor": 10.2,
     "n": 34,
     "detalle": "ceguera, retinopatía diabética"
    },
    {
     "nombre": "Anomalías del desarrollo",
     "valor": 9.6,
     "n": 32,
     "detalle": "síndrome de Down"
    },
    {
     "nombre": "Síntomas generales",
     "valor": 6.0,
     "n": 20,
     "detalle": "problemas de marcha, hemiplejia"
    },
    {
     "nombre": "Oído",
     "valor": 2.7,
     "n": 9,
     "detalle": "hipoacusia, pérdida auditiva"
    },
    {
     "nombre": "Otras",
     "valor": 16.2,
     "n": 54,
     "detalle": "enfermedad renal, ausencia de un miembro, tumores"
    }
   ],
   "edad": [
    {
     "nombre": "0 a 5",
     "valor": 4.5,
     "n": 15
    },
    {
     "nombre": "6 a 17",
     "valor": 13.5,
     "n": 45
    },
    {
     "nombre": "18 a 29",
     "valor": 11.4,
     "n": 38
    },
    {
     "nombre": "30 a 44",
     "valor": 19.5,
     "n": 65
    },
    {
     "nombre": "45 a 64",
     "valor": 44.3,
     "n": 148
    },
    {
     "nombre": "65 o más",
     "valor": 6.9,
     "n": 23
    }
   ]
  },
  "economia": {
   "personas": 251,
   "carencias_promedio": 1.85,
   "dependiente": 53.0,
   "apoyo_social": 5.6,
   "carencias": [
    {
     "nombre": "Sin afiliación a servicios de salud",
     "valor": 63.3,
     "n": 159
    },
    {
     "nombre": "No terminó la primaria",
     "valor": 21.9,
     "n": 55
    },
    {
     "nombre": "Sin trabajo",
     "valor": 49.4,
     "n": 124
    },
    {
     "nombre": "Vivienda precaria",
     "valor": 3.2,
     "n": 8
    },
    {
     "nombre": "Le falta un aparato de apoyo",
     "valor": 47.4,
     "n": 119
    }
   ],
   "actividad": [
    {
     "nombre": "No trabaja ni estudia por barreras del entorno",
     "valor": 47.8,
     "n": 120
    },
    {
     "nombre": "Tiene trabajo",
     "valor": 10.4,
     "n": 26
    },
    {
     "nombre": "Quehaceres del hogar",
     "valor": 6.0,
     "n": 15
    },
    {
     "nombre": "Busca trabajo",
     "valor": 1.6,
     "n": 4
    },
    {
     "nombre": "Jubilado o pensionado",
     "valor": 1.6,
     "n": 4
    },
    {
     "nombre": "Estudiante",
     "valor": 0.4,
     "n": 1
    },
    {
     "nombre": "Otra o no aplica",
     "valor": 32.3,
     "n": 81
    }
   ],
   "salud": [
    {
     "nombre": "Ninguna",
     "valor": 63.3,
     "n": 159
    },
    {
     "nombre": "IMSS",
     "valor": 8.4,
     "n": 21
    },
    {
     "nombre": "ISSSTE",
     "valor": 5.2,
     "n": 13
    },
    {
     "nombre": "Bienestar",
     "valor": 3.2,
     "n": 8
    },
    {
     "nombre": "Otra o no especificado",
     "valor": 19.9,
     "n": 50
    }
   ],
   "escolaridad": [
    {
     "nombre": "Sin primaria terminada",
     "valor": 21.9,
     "n": 55
    },
    {
     "nombre": "Primaria",
     "valor": 18.3,
     "n": 46
    },
    {
     "nombre": "Secundaria",
     "valor": 33.9,
     "n": 85
    },
    {
     "nombre": "Bachillerato",
     "valor": 13.9,
     "n": 35
    },
    {
     "nombre": "Licenciatura o más",
     "valor": 8.8,
     "n": 22
    },
    {
     "nombre": "No especificado",
     "valor": 3.2,
     "n": 8
    }
   ]
  },
  "relacion": {
   "calificacion_por_carencias": [
    {
     "nombre": "0",
     "valor": 40.64,
     "n": 22
    },
    {
     "nombre": "1",
     "valor": 43.08,
     "n": 64
    },
    {
     "nombre": "2",
     "valor": 42.29,
     "n": 104
    },
    {
     "nombre": "3",
     "valor": 49.82,
     "n": 51
    },
    {
     "nombre": "4",
     "valor": 46.84,
     "n": 10
    }
   ],
   "funciones_por_carencias": [
    {
     "nombre": "0",
     "valor": 11.68,
     "n": 22
    },
    {
     "nombre": "1",
     "valor": 11.34,
     "n": 64
    },
    {
     "nombre": "2",
     "valor": 11.38,
     "n": 104
    },
    {
     "nombre": "3",
     "valor": 13.43,
     "n": 51
    },
    {
     "nombre": "4",
     "valor": 13.7,
     "n": 10
    }
   ],
   "carencias_por_apoyo": [
    {
     "nombre": "No requiere",
     "valor": 1.5,
     "n": 10
    },
    {
     "nombre": "Incitación verbal o gestual",
     "valor": 2.22,
     "n": 9
    },
    {
     "nombre": "Supervisión",
     "valor": 1.86,
     "n": 87
    },
    {
     "nombre": "Ayuda física parcial",
     "valor": 1.91,
     "n": 101
    },
    {
     "nombre": "Ayuda física total",
     "valor": 1.7,
     "n": 44
    }
   ],
   "carencias_por_nivel": [
    {
     "nombre": "25 a 40",
     "valor": 1.68,
     "n": 102
    },
    {
     "nombre": "40 a 55",
     "valor": 1.82,
     "n": 103
    },
    {
     "nombre": "55 a 70",
     "valor": 2.37,
     "n": 35
    },
    {
     "nombre": "70 o más",
     "valor": 2.18,
     "n": 11
    }
   ],
   "personas_por_nivel": [
    102,
    103,
    35,
    11
   ],
   "matriz": [
    {
     "nombre": "Sin afiliación a servicios de salud",
     "celdas": [
      63.7,
      57.3,
      80.0,
      63.6
     ]
    },
    {
     "nombre": "No terminó la primaria",
     "celdas": [
      14.7,
      27.2,
      31.4,
      9.1
     ]
    },
    {
     "nombre": "Sin trabajo",
     "celdas": [
      37.3,
      47.6,
      77.1,
      90.9
     ]
    },
    {
     "nombre": "Vivienda precaria",
     "celdas": [
      2.9,
      3.9,
      2.9,
      0.0
     ]
    },
    {
     "nombre": "Le falta un aparato de apoyo",
     "celdas": [
      49.0,
      45.6,
      45.7,
      54.5
     ]
    }
   ]
  }
 },
 "Sinaloa": {
  "discapacidad": {
   "personas": 2425,
   "edad_mediana": 46,
   "calificacion": 40.3,
   "necesita_apoyo": 49.1,
   "nivel": [
    {
     "nombre": "25 a 40",
     "valor": 53.6,
     "n": 1300
    },
    {
     "nombre": "40 a 55",
     "valor": 36.7,
     "n": 889
    },
    {
     "nombre": "55 a 70",
     "valor": 8.9,
     "n": 215
    },
    {
     "nombre": "70 o más",
     "valor": 0.9,
     "n": 21
    }
   ],
   "apoyo": [
    {
     "nombre": "No requiere",
     "valor": 50.9,
     "n": 1235
    },
    {
     "nombre": "Incitación verbal o gestual",
     "valor": 2.2,
     "n": 54
    },
    {
     "nombre": "Supervisión",
     "valor": 28.2,
     "n": 685
    },
    {
     "nombre": "Ayuda física parcial",
     "valor": 16.3,
     "n": 395
    },
    {
     "nombre": "Ayuda física total",
     "valor": 2.3,
     "n": 56
    }
   ],
   "origen": [
    {
     "nombre": "Enfermedad crónico-degenerativa",
     "valor": 38.4,
     "n": 930
    },
    {
     "nombre": "Congénita (de nacimiento)",
     "valor": 34.1,
     "n": 828
    },
    {
     "nombre": "Accidente o violencia",
     "valor": 17.5,
     "n": 425
    },
    {
     "nombre": "Embarazo, parto o recién nacido",
     "valor": 2.4,
     "n": 59
    },
    {
     "nombre": "Enfermedad infecciosa",
     "valor": 1.2,
     "n": 28
    },
    {
     "nombre": "Otra causa o no aplica",
     "valor": 6.4,
     "n": 155
    }
   ],
   "condicion": [
    {
     "nombre": "Mental y del neurodesarrollo",
     "valor": 28.6,
     "n": 694,
     "detalle": "autismo, discapacidad intelectual"
    },
    {
     "nombre": "Músculos, huesos y articulaciones",
     "valor": 17.5,
     "n": 425,
     "detalle": "artritis, artrosis de rodilla"
    },
    {
     "nombre": "Sistema nervioso",
     "valor": 11.5,
     "n": 280,
     "detalle": "epilepsia, parálisis cerebral"
    },
    {
     "nombre": "Lesiones y traumatismos",
     "valor": 8.7,
     "n": 210,
     "detalle": "amputaciones, fracturas"
    },
    {
     "nombre": "Visión",
     "valor": 7.4,
     "n": 179,
     "detalle": "ceguera, retinopatía diabética"
    },
    {
     "nombre": "Anomalías del desarrollo",
     "valor": 5.2,
     "n": 125,
     "detalle": "síndrome de Down"
    },
    {
     "nombre": "Oído",
     "valor": 4.8,
     "n": 116,
     "detalle": "hipoacusia, pérdida auditiva"
    },
    {
     "nombre": "Síntomas generales",
     "valor": 4.4,
     "n": 106,
     "detalle": "problemas de marcha, hemiplejia"
    },
    {
     "nombre": "Otras",
     "valor": 12.0,
     "n": 290,
     "detalle": "enfermedad renal, ausencia de un miembro, tumores"
    }
   ],
   "edad": [
    {
     "nombre": "0 a 5",
     "valor": 8.8,
     "n": 213
    },
    {
     "nombre": "6 a 17",
     "valor": 15.3,
     "n": 371
    },
    {
     "nombre": "18 a 29",
     "valor": 8.3,
     "n": 202
    },
    {
     "nombre": "30 a 44",
     "valor": 15.6,
     "n": 378
    },
    {
     "nombre": "45 a 64",
     "valor": 49.4,
     "n": 1199
    },
    {
     "nombre": "65 o más",
     "valor": 2.6,
     "n": 62
    }
   ]
  },
  "economia": {
   "personas": 1779,
   "carencias_promedio": 0.83,
   "dependiente": 63.9,
   "apoyo_social": 12.6,
   "carencias": [
    {
     "nombre": "Sin afiliación a servicios de salud",
     "valor": 18.5,
     "n": 329
    },
    {
     "nombre": "No terminó la primaria",
     "valor": 13.9,
     "n": 247
    },
    {
     "nombre": "Sin trabajo",
     "valor": 42.3,
     "n": 752
    },
    {
     "nombre": "Vivienda precaria",
     "valor": 0.1,
     "n": 1
    },
    {
     "nombre": "Le falta un aparato de apoyo",
     "valor": 8.1,
     "n": 144
    }
   ],
   "actividad": [
    {
     "nombre": "No trabaja ni estudia por barreras del entorno",
     "valor": 41.8,
     "n": 744
    },
    {
     "nombre": "Tiene trabajo",
     "valor": 23.6,
     "n": 419
    },
    {
     "nombre": "Jubilado o pensionado",
     "valor": 16.2,
     "n": 289
    },
    {
     "nombre": "Quehaceres del hogar",
     "valor": 12.3,
     "n": 218
    },
    {
     "nombre": "Estudiante",
     "valor": 3.3,
     "n": 59
    },
    {
     "nombre": "Busca trabajo",
     "valor": 0.4,
     "n": 8
    },
    {
     "nombre": "Otra o no aplica",
     "valor": 2.4,
     "n": 42
    }
   ],
   "salud": [
    {
     "nombre": "IMSS",
     "valor": 55.5,
     "n": 987
    },
    {
     "nombre": "Ninguna",
     "valor": 18.5,
     "n": 329
    },
    {
     "nombre": "Bienestar",
     "valor": 17.5,
     "n": 312
    },
    {
     "nombre": "ISSSTE",
     "valor": 6.9,
     "n": 122
    },
    {
     "nombre": "Otra o no especificado",
     "valor": 1.6,
     "n": 29
    }
   ],
   "escolaridad": [
    {
     "nombre": "Sin primaria terminada",
     "valor": 13.9,
     "n": 247
    },
    {
     "nombre": "Primaria",
     "valor": 17.9,
     "n": 319
    },
    {
     "nombre": "Secundaria",
     "valor": 33.9,
     "n": 603
    },
    {
     "nombre": "Bachillerato",
     "valor": 21.6,
     "n": 384
    },
    {
     "nombre": "Licenciatura o más",
     "valor": 11.9,
     "n": 212
    },
    {
     "nombre": "No especificado",
     "valor": 0.8,
     "n": 14
    }
   ]
  },
  "relacion": {
   "calificacion_por_carencias": [
    {
     "nombre": "0",
     "valor": 38.54,
     "n": 734
    },
    {
     "nombre": "1",
     "valor": 40.14,
     "n": 682
    },
    {
     "nombre": "2",
     "valor": 42.06,
     "n": 299
    },
    {
     "nombre": "3",
     "valor": 44.4,
     "n": 63
    },
    {
     "nombre": "4",
     "valor": 41.62,
     "n": 1
    }
   ],
   "funciones_por_carencias": [
    {
     "nombre": "0",
     "valor": 9.7,
     "n": 734
    },
    {
     "nombre": "1",
     "valor": 10.49,
     "n": 682
    },
    {
     "nombre": "2",
     "valor": 11.27,
     "n": 299
    },
    {
     "nombre": "3",
     "valor": 12.05,
     "n": 63
    },
    {
     "nombre": "4",
     "valor": 10.0,
     "n": 1
    }
   ],
   "carencias_por_apoyo": [
    {
     "nombre": "No requiere",
     "valor": 0.65,
     "n": 1160
    },
    {
     "nombre": "Incitación verbal o gestual",
     "valor": 1.38,
     "n": 24
    },
    {
     "nombre": "Supervisión",
     "valor": 1.1,
     "n": 309
    },
    {
     "nombre": "Ayuda física parcial",
     "valor": 1.13,
     "n": 259
    },
    {
     "nombre": "Ayuda física total",
     "valor": 1.89,
     "n": 27
    }
   ],
   "carencias_por_nivel": [
    {
     "nombre": "25 a 40",
     "valor": 0.73,
     "n": 988
    },
    {
     "nombre": "40 a 55",
     "valor": 0.9,
     "n": 620
    },
    {
     "nombre": "55 a 70",
     "valor": 1.1,
     "n": 160
    },
    {
     "nombre": "70 o más",
     "valor": 1.45,
     "n": 11
    }
   ],
   "personas_por_nivel": [
    988,
    620,
    160,
    11
   ],
   "matriz": [
    {
     "nombre": "Sin afiliación a servicios de salud",
     "celdas": [
      16.9,
      20.3,
      20.6,
      27.3
     ]
    },
    {
     "nombre": "No terminó la primaria",
     "celdas": [
      11.4,
      14.7,
      25.0,
      27.3
     ]
    },
    {
     "nombre": "Sin trabajo",
     "celdas": [
      39.0,
      44.7,
      51.2,
      72.7
     ]
    },
    {
     "nombre": "Vivienda precaria",
     "celdas": [
      0.1,
      0.0,
      0.0,
      0.0
     ]
    },
    {
     "nombre": "Le falta un aparato de apoyo",
     "celdas": [
      6.0,
      10.0,
      13.1,
      18.2
     ]
    }
   ]
  }
 },
 "Sonora": {
  "discapacidad": {
   "personas": 8034,
   "edad_mediana": 39,
   "calificacion": 49.1,
   "necesita_apoyo": 85.2,
   "nivel": [
    {
     "nombre": "25 a 40",
     "valor": 29.4,
     "n": 2362
    },
    {
     "nombre": "40 a 55",
     "valor": 37.3,
     "n": 2998
    },
    {
     "nombre": "55 a 70",
     "valor": 25.3,
     "n": 2031
    },
    {
     "nombre": "70 o más",
     "valor": 8.0,
     "n": 643
    }
   ],
   "apoyo": [
    {
     "nombre": "No requiere",
     "valor": 14.8,
     "n": 1190
    },
    {
     "nombre": "Incitación verbal o gestual",
     "valor": 8.0,
     "n": 644
    },
    {
     "nombre": "Supervisión",
     "valor": 31.8,
     "n": 2558
    },
    {
     "nombre": "Ayuda física parcial",
     "valor": 36.8,
     "n": 2956
    },
    {
     "nombre": "Ayuda física total",
     "valor": 8.5,
     "n": 686
    }
   ],
   "origen": [
    {
     "nombre": "Congénita (de nacimiento)",
     "valor": 35.5,
     "n": 2850
    },
    {
     "nombre": "Enfermedad crónico-degenerativa",
     "valor": 24.5,
     "n": 1967
    },
    {
     "nombre": "Accidente o violencia",
     "valor": 16.0,
     "n": 1284
    },
    {
     "nombre": "Embarazo, parto o recién nacido",
     "valor": 4.1,
     "n": 327
    },
    {
     "nombre": "Enfermedad infecciosa",
     "valor": 2.9,
     "n": 233
    },
    {
     "nombre": "Otra causa o no aplica",
     "valor": 17.1,
     "n": 1373
    }
   ],
   "condicion": [
    {
     "nombre": "Mental y del neurodesarrollo",
     "valor": 35.4,
     "n": 2848,
     "detalle": "autismo, discapacidad intelectual"
    },
    {
     "nombre": "Músculos, huesos y articulaciones",
     "valor": 14.0,
     "n": 1125,
     "detalle": "artritis, artrosis de rodilla"
    },
    {
     "nombre": "Sistema nervioso",
     "valor": 12.4,
     "n": 997,
     "detalle": "epilepsia, parálisis cerebral"
    },
    {
     "nombre": "Lesiones y traumatismos",
     "valor": 9.9,
     "n": 797,
     "detalle": "amputaciones, fracturas"
    },
    {
     "nombre": "Anomalías del desarrollo",
     "valor": 5.7,
     "n": 461,
     "detalle": "síndrome de Down"
    },
    {
     "nombre": "Visión",
     "valor": 5.3,
     "n": 429,
     "detalle": "ceguera, retinopatía diabética"
    },
    {
     "nombre": "Síntomas generales",
     "valor": 4.2,
     "n": 335,
     "detalle": "problemas de marcha, hemiplejia"
    },
    {
     "nombre": "Oído",
     "valor": 3.5,
     "n": 278,
     "detalle": "hipoacusia, pérdida auditiva"
    },
    {
     "nombre": "Otras",
     "valor": 9.5,
     "n": 764,
     "detalle": "enfermedad renal, ausencia de un miembro, tumores"
    }
   ],
   "edad": [
    {
     "nombre": "0 a 5",
     "valor": 11.0,
     "n": 886
    },
    {
     "nombre": "6 a 17",
     "valor": 23.6,
     "n": 1899
    },
    {
     "nombre": "18 a 29",
     "valor": 8.0,
     "n": 640
    },
    {
     "nombre": "30 a 44",
     "valor": 13.4,
     "n": 1074
    },
    {
     "nombre": "45 a 64",
     "valor": 37.6,
     "n": 3022
    },
    {
     "nombre": "65 o más",
     "valor": 6.4,
     "n": 513
    }
   ]
  },
  "economia": {
   "personas": 4736,
   "carencias_promedio": 1.26,
   "dependiente": 55.7,
   "apoyo_social": 19.2,
   "carencias": [
    {
     "nombre": "Sin afiliación a servicios de salud",
     "valor": 28.6,
     "n": 1354
    },
    {
     "nombre": "No terminó la primaria",
     "valor": 14.7,
     "n": 698
    },
    {
     "nombre": "Sin trabajo",
     "valor": 52.7,
     "n": 2495
    },
    {
     "nombre": "Vivienda precaria",
     "valor": 0.3,
     "n": 13
    },
    {
     "nombre": "Le falta un aparato de apoyo",
     "valor": 29.8,
     "n": 1413
    }
   ],
   "actividad": [
    {
     "nombre": "No trabaja ni estudia por barreras del entorno",
     "valor": 50.5,
     "n": 2394
    },
    {
     "nombre": "Jubilado o pensionado",
     "valor": 19.1,
     "n": 904
    },
    {
     "nombre": "Tiene trabajo",
     "valor": 14.0,
     "n": 661
    },
    {
     "nombre": "Quehaceres del hogar",
     "valor": 7.6,
     "n": 358
    },
    {
     "nombre": "Estudiante",
     "valor": 2.6,
     "n": 124
    },
    {
     "nombre": "Busca trabajo",
     "valor": 2.1,
     "n": 101
    },
    {
     "nombre": "Otra o no aplica",
     "valor": 4.1,
     "n": 194
    }
   ],
   "salud": [
    {
     "nombre": "IMSS",
     "valor": 51.2,
     "n": 2425
    },
    {
     "nombre": "Ninguna",
     "valor": 28.6,
     "n": 1354
    },
    {
     "nombre": "Bienestar",
     "valor": 10.6,
     "n": 503
    },
    {
     "nombre": "ISSSTE",
     "valor": 2.7,
     "n": 129
    },
    {
     "nombre": "Otra o no especificado",
     "valor": 6.9,
     "n": 325
    }
   ],
   "escolaridad": [
    {
     "nombre": "Sin primaria terminada",
     "valor": 14.7,
     "n": 698
    },
    {
     "nombre": "Primaria",
     "valor": 14.5,
     "n": 689
    },
    {
     "nombre": "Secundaria",
     "valor": 39.9,
     "n": 1891
    },
    {
     "nombre": "Bachillerato",
     "valor": 19.8,
     "n": 938
    },
    {
     "nombre": "Licenciatura o más",
     "valor": 10.1,
     "n": 476
    },
    {
     "nombre": "No especificado",
     "valor": 0.9,
     "n": 44
    }
   ]
  },
  "relacion": {
   "calificacion_por_carencias": [
    {
     "nombre": "0",
     "valor": 47.97,
     "n": 1199
    },
    {
     "nombre": "1",
     "valor": 50.4,
     "n": 1722
    },
    {
     "nombre": "2",
     "valor": 52.07,
     "n": 1270
    },
    {
     "nombre": "3",
     "valor": 53.92,
     "n": 470
    },
    {
     "nombre": "4",
     "valor": 55.82,
     "n": 74
    },
    {
     "nombre": "5",
     "valor": 50.1,
     "n": 1
    }
   ],
   "funciones_por_carencias": [
    {
     "nombre": "0",
     "valor": 13.82,
     "n": 1199
    },
    {
     "nombre": "1",
     "valor": 14.78,
     "n": 1722
    },
    {
     "nombre": "2",
     "valor": 15.34,
     "n": 1270
    },
    {
     "nombre": "3",
     "valor": 16.22,
     "n": 470
    },
    {
     "nombre": "4",
     "valor": 16.64,
     "n": 74
    },
    {
     "nombre": "5",
     "valor": 15.0,
     "n": 1
    }
   ],
   "carencias_por_apoyo": [
    {
     "nombre": "No requiere",
     "valor": 1.17,
     "n": 1009
    },
    {
     "nombre": "Incitación verbal o gestual",
     "valor": 1.12,
     "n": 233
    },
    {
     "nombre": "Supervisión",
     "valor": 1.42,
     "n": 978
    },
    {
     "nombre": "Ayuda física parcial",
     "valor": 1.19,
     "n": 2173
    },
    {
     "nombre": "Ayuda física total",
     "valor": 1.65,
     "n": 343
    }
   ],
   "carencias_por_nivel": [
    {
     "nombre": "25 a 40",
     "valor": 1.08,
     "n": 1144
    },
    {
     "nombre": "40 a 55",
     "valor": 1.22,
     "n": 1781
    },
    {
     "nombre": "55 a 70",
     "valor": 1.39,
     "n": 1415
    },
    {
     "nombre": "70 o más",
     "valor": 1.51,
     "n": 396
    }
   ],
   "personas_por_nivel": [
    1144,
    1781,
    1415,
    396
   ],
   "matriz": [
    {
     "nombre": "Sin afiliación a servicios de salud",
     "celdas": [
      29.5,
      28.1,
      29.3,
      25.8
     ]
    },
    {
     "nombre": "No terminó la primaria",
     "celdas": [
      11.9,
      13.8,
      15.4,
      24.7
     ]
    },
    {
     "nombre": "Sin trabajo",
     "celdas": [
      40.6,
      50.1,
      61.7,
      66.9
     ]
    },
    {
     "nombre": "Vivienda precaria",
     "celdas": [
      0.2,
      0.3,
      0.2,
      0.8
     ]
    },
    {
     "nombre": "Le falta un aparato de apoyo",
     "celdas": [
      25.5,
      29.6,
      32.8,
      32.6
     ]
    }
   ]
  }
 },
 "Tamaulipas": {
  "discapacidad": {
   "personas": 1252,
   "edad_mediana": 44,
   "calificacion": 41.1,
   "necesita_apoyo": 99.1,
   "nivel": [
    {
     "nombre": "25 a 40",
     "valor": 50.1,
     "n": 627
    },
    {
     "nombre": "40 a 55",
     "valor": 41.0,
     "n": 513
    },
    {
     "nombre": "55 a 70",
     "valor": 7.8,
     "n": 98
    },
    {
     "nombre": "70 o más",
     "valor": 1.1,
     "n": 14
    }
   ],
   "apoyo": [
    {
     "nombre": "No requiere",
     "valor": 0.9,
     "n": 11
    },
    {
     "nombre": "Incitación verbal o gestual",
     "valor": 8.9,
     "n": 112
    },
    {
     "nombre": "Supervisión",
     "valor": 39.3,
     "n": 492
    },
    {
     "nombre": "Ayuda física parcial",
     "valor": 45.9,
     "n": 575
    },
    {
     "nombre": "Ayuda física total",
     "valor": 5.0,
     "n": 62
    }
   ],
   "origen": [
    {
     "nombre": "Enfermedad crónico-degenerativa",
     "valor": 22.5,
     "n": 282
    },
    {
     "nombre": "Congénita (de nacimiento)",
     "valor": 13.6,
     "n": 170
    },
    {
     "nombre": "Accidente o violencia",
     "valor": 11.3,
     "n": 141
    },
    {
     "nombre": "Embarazo, parto o recién nacido",
     "valor": 6.9,
     "n": 86
    },
    {
     "nombre": "Enfermedad infecciosa",
     "valor": 5.0,
     "n": 62
    },
    {
     "nombre": "Otra causa o no aplica",
     "valor": 40.8,
     "n": 511
    }
   ],
   "condicion": [
    {
     "nombre": "Mental y del neurodesarrollo",
     "valor": 34.0,
     "n": 426,
     "detalle": "autismo, discapacidad intelectual"
    },
    {
     "nombre": "Músculos, huesos y articulaciones",
     "valor": 14.5,
     "n": 182,
     "detalle": "artritis, artrosis de rodilla"
    },
    {
     "nombre": "Sistema nervioso",
     "valor": 13.8,
     "n": 173,
     "detalle": "epilepsia, parálisis cerebral"
    },
    {
     "nombre": "Lesiones y traumatismos",
     "valor": 10.3,
     "n": 129,
     "detalle": "amputaciones, fracturas"
    },
    {
     "nombre": "Visión",
     "valor": 8.2,
     "n": 103,
     "detalle": "ceguera, retinopatía diabética"
    },
    {
     "nombre": "Anomalías del desarrollo",
     "valor": 5.7,
     "n": 71,
     "detalle": "síndrome de Down"
    },
    {
     "nombre": "Oído",
     "valor": 3.9,
     "n": 49,
     "detalle": "hipoacusia, pérdida auditiva"
    },
    {
     "nombre": "Síntomas generales",
     "valor": 3.2,
     "n": 40,
     "detalle": "problemas de marcha, hemiplejia"
    },
    {
     "nombre": "Otras",
     "valor": 6.3,
     "n": 79,
     "detalle": "enfermedad renal, ausencia de un miembro, tumores"
    }
   ],
   "edad": [
    {
     "nombre": "0 a 5",
     "valor": 9.2,
     "n": 115
    },
    {
     "nombre": "6 a 17",
     "valor": 19.1,
     "n": 239
    },
    {
     "nombre": "18 a 29",
     "valor": 8.4,
     "n": 105
    },
    {
     "nombre": "30 a 44",
     "valor": 14.4,
     "n": 180
    },
    {
     "nombre": "45 a 64",
     "valor": 46.7,
     "n": 585
    },
    {
     "nombre": "65 o más",
     "valor": 2.2,
     "n": 28
    }
   ]
  },
  "economia": {
   "personas": 870,
   "carencias_promedio": 1.14,
   "dependiente": 69.8,
   "apoyo_social": 3.1,
   "carencias": [
    {
     "nombre": "Sin afiliación a servicios de salud",
     "valor": 7.8,
     "n": 68
    },
    {
     "nombre": "No terminó la primaria",
     "valor": 14.5,
     "n": 126
    },
    {
     "nombre": "Sin trabajo",
     "valor": 64.5,
     "n": 561
    },
    {
     "nombre": "Vivienda precaria",
     "valor": 0.1,
     "n": 1
    },
    {
     "nombre": "Le falta un aparato de apoyo",
     "valor": 27.2,
     "n": 237
    }
   ],
   "actividad": [
    {
     "nombre": "No trabaja ni estudia por barreras del entorno",
     "valor": 63.9,
     "n": 556
    },
    {
     "nombre": "Jubilado o pensionado",
     "valor": 17.6,
     "n": 153
    },
    {
     "nombre": "Tiene trabajo",
     "valor": 7.7,
     "n": 67
    },
    {
     "nombre": "Quehaceres del hogar",
     "valor": 6.3,
     "n": 55
    },
    {
     "nombre": "Estudiante",
     "valor": 1.8,
     "n": 16
    },
    {
     "nombre": "Busca trabajo",
     "valor": 0.6,
     "n": 5
    },
    {
     "nombre": "Otra o no aplica",
     "valor": 2.1,
     "n": 18
    }
   ],
   "salud": [
    {
     "nombre": "Bienestar",
     "valor": 40.1,
     "n": 349
    },
    {
     "nombre": "IMSS",
     "valor": 37.6,
     "n": 327
    },
    {
     "nombre": "Ninguna",
     "valor": 7.8,
     "n": 68
    },
    {
     "nombre": "ISSSTE",
     "valor": 3.6,
     "n": 31
    },
    {
     "nombre": "Otra o no especificado",
     "valor": 10.9,
     "n": 95
    }
   ],
   "escolaridad": [
    {
     "nombre": "Sin primaria terminada",
     "valor": 14.5,
     "n": 126
    },
    {
     "nombre": "Primaria",
     "valor": 19.3,
     "n": 168
    },
    {
     "nombre": "Secundaria",
     "valor": 34.4,
     "n": 299
    },
    {
     "nombre": "Bachillerato",
     "valor": 20.2,
     "n": 176
    },
    {
     "nombre": "Licenciatura o más",
     "valor": 10.1,
     "n": 88
    },
    {
     "nombre": "No especificado",
     "valor": 1.5,
     "n": 13
    }
   ]
  },
  "relacion": {
   "calificacion_por_carencias": [
    {
     "nombre": "0",
     "valor": 40.14,
     "n": 198
    },
    {
     "nombre": "1",
     "valor": 40.85,
     "n": 406
    },
    {
     "nombre": "2",
     "valor": 42.26,
     "n": 215
    },
    {
     "nombre": "3",
     "valor": 46.17,
     "n": 47
    },
    {
     "nombre": "4",
     "valor": 48.7,
     "n": 4
    }
   ],
   "funciones_por_carencias": [
    {
     "nombre": "0",
     "valor": 11.68,
     "n": 198
    },
    {
     "nombre": "1",
     "valor": 12.1,
     "n": 406
    },
    {
     "nombre": "2",
     "valor": 13.05,
     "n": 215
    },
    {
     "nombre": "3",
     "valor": 13.36,
     "n": 47
    },
    {
     "nombre": "4",
     "valor": 12.75,
     "n": 4
    }
   ],
   "carencias_por_apoyo": [
    {
     "nombre": "No requiere",
     "valor": 1.0,
     "n": 9
    },
    {
     "nombre": "Incitación verbal o gestual",
     "valor": 1.14,
     "n": 7
    },
    {
     "nombre": "Supervisión",
     "valor": 1.19,
     "n": 304
    },
    {
     "nombre": "Ayuda física parcial",
     "valor": 1.09,
     "n": 509
    },
    {
     "nombre": "Ayuda física total",
     "valor": 1.41,
     "n": 41
    }
   ],
   "carencias_por_nivel": [
    {
     "nombre": "25 a 40",
     "valor": 1.05,
     "n": 425
    },
    {
     "nombre": "40 a 55",
     "valor": 1.18,
     "n": 362
    },
    {
     "nombre": "55 a 70",
     "valor": 1.36,
     "n": 75
    },
    {
     "nombre": "70 o más",
     "valor": 2.0,
     "n": 8
    }
   ],
   "personas_por_nivel": [
    425,
    362,
    75,
    8
   ],
   "matriz": [
    {
     "nombre": "Sin afiliación a servicios de salud",
     "celdas": [
      5.2,
      8.6,
      16.0,
      37.5
     ]
    },
    {
     "nombre": "No terminó la primaria",
     "celdas": [
      12.0,
      16.0,
      20.0,
      25.0
     ]
    },
    {
     "nombre": "Sin trabajo",
     "celdas": [
      62.8,
      65.2,
      68.0,
      87.5
     ]
    },
    {
     "nombre": "Vivienda precaria",
     "celdas": [
      0.0,
      0.0,
      1.3,
      0.0
     ]
    },
    {
     "nombre": "Le falta un aparato de apoyo",
     "celdas": [
      25.2,
      28.5,
      30.7,
      50.0
     ]
    }
   ]
  }
 },
 "Veracruz": {
  "discapacidad": {
   "personas": 878,
   "edad_mediana": 45,
   "calificacion": 55.2,
   "necesita_apoyo": 94.3,
   "nivel": [
    {
     "nombre": "25 a 40",
     "valor": 13.2,
     "n": 116
    },
    {
     "nombre": "40 a 55",
     "valor": 36.2,
     "n": 318
    },
    {
     "nombre": "55 a 70",
     "valor": 36.0,
     "n": 316
    },
    {
     "nombre": "70 o más",
     "valor": 14.6,
     "n": 128
    }
   ],
   "apoyo": [
    {
     "nombre": "No requiere",
     "valor": 5.7,
     "n": 50
    },
    {
     "nombre": "Incitación verbal o gestual",
     "valor": 0.5,
     "n": 4
    },
    {
     "nombre": "Supervisión",
     "valor": 23.5,
     "n": 206
    },
    {
     "nombre": "Ayuda física parcial",
     "valor": 18.5,
     "n": 162
    },
    {
     "nombre": "Ayuda física total",
     "valor": 51.9,
     "n": 456
    }
   ],
   "origen": [
    {
     "nombre": "Enfermedad crónico-degenerativa",
     "valor": 38.4,
     "n": 337
    },
    {
     "nombre": "Congénita (de nacimiento)",
     "valor": 37.2,
     "n": 327
    },
    {
     "nombre": "Accidente o violencia",
     "valor": 14.8,
     "n": 130
    },
    {
     "nombre": "Embarazo, parto o recién nacido",
     "valor": 4.2,
     "n": 37
    },
    {
     "nombre": "Enfermedad infecciosa",
     "valor": 2.1,
     "n": 18
    },
    {
     "nombre": "Otra causa o no aplica",
     "valor": 3.3,
     "n": 29
    }
   ],
   "condicion": [
    {
     "nombre": "Mental y del neurodesarrollo",
     "valor": 26.3,
     "n": 231,
     "detalle": "autismo, discapacidad intelectual"
    },
    {
     "nombre": "Sistema nervioso",
     "valor": 13.9,
     "n": 122,
     "detalle": "epilepsia, parálisis cerebral"
    },
    {
     "nombre": "Visión",
     "valor": 13.1,
     "n": 115,
     "detalle": "ceguera, retinopatía diabética"
    },
    {
     "nombre": "Músculos, huesos y articulaciones",
     "valor": 11.2,
     "n": 98,
     "detalle": "artritis, artrosis de rodilla"
    },
    {
     "nombre": "Lesiones y traumatismos",
     "valor": 8.3,
     "n": 73,
     "detalle": "amputaciones, fracturas"
    },
    {
     "nombre": "Anomalías del desarrollo",
     "valor": 5.7,
     "n": 50,
     "detalle": "síndrome de Down"
    },
    {
     "nombre": "Oído",
     "valor": 3.9,
     "n": 34,
     "detalle": "hipoacusia, pérdida auditiva"
    },
    {
     "nombre": "Síntomas generales",
     "valor": 3.6,
     "n": 32,
     "detalle": "problemas de marcha, hemiplejia"
    },
    {
     "nombre": "Otras",
     "valor": 14.0,
     "n": 123,
     "detalle": "enfermedad renal, ausencia de un miembro, tumores"
    }
   ],
   "edad": [
    {
     "nombre": "0 a 5",
     "valor": 6.6,
     "n": 58
    },
    {
     "nombre": "6 a 17",
     "valor": 14.6,
     "n": 128
    },
    {
     "nombre": "18 a 29",
     "valor": 9.9,
     "n": 87
    },
    {
     "nombre": "30 a 44",
     "valor": 17.7,
     "n": 155
    },
    {
     "nombre": "45 a 64",
     "valor": 50.1,
     "n": 440
    },
    {
     "nombre": "65 o más",
     "valor": 1.1,
     "n": 10
    }
   ]
  },
  "economia": {
   "personas": 682,
   "carencias_promedio": 2.17,
   "dependiente": 70.5,
   "apoyo_social": 14.5,
   "carencias": [
    {
     "nombre": "Sin afiliación a servicios de salud",
     "valor": 72.3,
     "n": 493
    },
    {
     "nombre": "No terminó la primaria",
     "valor": 18.0,
     "n": 123
    },
    {
     "nombre": "Sin trabajo",
     "valor": 77.6,
     "n": 529
    },
    {
     "nombre": "Vivienda precaria",
     "valor": 1.0,
     "n": 7
    },
    {
     "nombre": "Le falta un aparato de apoyo",
     "valor": 47.8,
     "n": 326
    }
   ],
   "actividad": [
    {
     "nombre": "No trabaja ni estudia por barreras del entorno",
     "valor": 74.6,
     "n": 509
    },
    {
     "nombre": "Tiene trabajo",
     "valor": 9.1,
     "n": 62
    },
    {
     "nombre": "Quehaceres del hogar",
     "valor": 5.1,
     "n": 35
    },
    {
     "nombre": "Jubilado o pensionado",
     "valor": 4.7,
     "n": 32
    },
    {
     "nombre": "Busca trabajo",
     "valor": 2.9,
     "n": 20
    },
    {
     "nombre": "Estudiante",
     "valor": 2.6,
     "n": 18
    },
    {
     "nombre": "Otra o no aplica",
     "valor": 0.9,
     "n": 6
    }
   ],
   "salud": [
    {
     "nombre": "Ninguna",
     "valor": 72.3,
     "n": 493
    },
    {
     "nombre": "IMSS",
     "valor": 22.7,
     "n": 155
    },
    {
     "nombre": "ISSSTE",
     "valor": 1.3,
     "n": 9
    },
    {
     "nombre": "Bienestar",
     "valor": 0.3,
     "n": 2
    },
    {
     "nombre": "Otra o no especificado",
     "valor": 3.4,
     "n": 23
    }
   ],
   "escolaridad": [
    {
     "nombre": "Sin primaria terminada",
     "valor": 18.0,
     "n": 123
    },
    {
     "nombre": "Primaria",
     "valor": 19.2,
     "n": 131
    },
    {
     "nombre": "Secundaria",
     "valor": 31.2,
     "n": 213
    },
    {
     "nombre": "Bachillerato",
     "valor": 21.6,
     "n": 147
    },
    {
     "nombre": "Licenciatura o más",
     "valor": 9.7,
     "n": 66
    },
    {
     "nombre": "No especificado",
     "valor": 0.3,
     "n": 2
    }
   ]
  },
  "relacion": {
   "calificacion_por_carencias": [
    {
     "nombre": "0",
     "valor": 53.23,
     "n": 37
    },
    {
     "nombre": "1",
     "valor": 54.88,
     "n": 115
    },
    {
     "nombre": "2",
     "valor": 55.64,
     "n": 268
    },
    {
     "nombre": "3",
     "valor": 59.63,
     "n": 223
    },
    {
     "nombre": "4",
     "valor": 58.0,
     "n": 37
    },
    {
     "nombre": "5",
     "valor": 76.98,
     "n": 2
    }
   ],
   "funciones_por_carencias": [
    {
     "nombre": "0",
     "valor": 15.38,
     "n": 37
    },
    {
     "nombre": "1",
     "valor": 14.43,
     "n": 115
    },
    {
     "nombre": "2",
     "valor": 14.09,
     "n": 268
    },
    {
     "nombre": "3",
     "valor": 14.94,
     "n": 223
    },
    {
     "nombre": "4",
     "valor": 14.81,
     "n": 37
    },
    {
     "nombre": "5",
     "valor": 16.5,
     "n": 2
    }
   ],
   "carencias_por_apoyo": [
    {
     "nombre": "No requiere",
     "valor": 1.67,
     "n": 49
    },
    {
     "nombre": "Incitación verbal o gestual",
     "valor": 2.0,
     "n": 1
    },
    {
     "nombre": "Supervisión",
     "valor": 1.78,
     "n": 126
    },
    {
     "nombre": "Ayuda física parcial",
     "valor": 2.09,
     "n": 158
    },
    {
     "nombre": "Ayuda física total",
     "valor": 2.41,
     "n": 348
    }
   ],
   "carencias_por_nivel": [
    {
     "nombre": "25 a 40",
     "valor": 2.1,
     "n": 68
    },
    {
     "nombre": "40 a 55",
     "valor": 2.0,
     "n": 233
    },
    {
     "nombre": "55 a 70",
     "valor": 2.22,
     "n": 270
    },
    {
     "nombre": "70 o más",
     "valor": 2.42,
     "n": 111
    }
   ],
   "personas_por_nivel": [
    68,
    233,
    270,
    111
   ],
   "matriz": [
    {
     "nombre": "Sin afiliación a servicios de salud",
     "celdas": [
      80.9,
      73.4,
      73.3,
      62.2
     ]
    },
    {
     "nombre": "No terminó la primaria",
     "celdas": [
      16.2,
      19.3,
      15.9,
      21.6
     ]
    },
    {
     "nombre": "Sin trabajo",
     "celdas": [
      76.5,
      67.4,
      81.1,
      91.0
     ]
    },
    {
     "nombre": "Vivienda precaria",
     "celdas": [
      4.4,
      0.9,
      0.4,
      0.9
     ]
    },
    {
     "nombre": "Le falta un aparato de apoyo",
     "celdas": [
      32.4,
      39.5,
      51.1,
      66.7
     ]
    }
   ]
  }
 },
 "Yucatán": {
  "discapacidad": {
   "personas": 821,
   "edad_mediana": 42,
   "calificacion": 42.8,
   "necesita_apoyo": 89.8,
   "nivel": [
    {
     "nombre": "25 a 40",
     "valor": 47.1,
     "n": 387
    },
    {
     "nombre": "40 a 55",
     "valor": 35.2,
     "n": 289
    },
    {
     "nombre": "55 a 70",
     "valor": 14.6,
     "n": 120
    },
    {
     "nombre": "70 o más",
     "valor": 3.0,
     "n": 25
    }
   ],
   "apoyo": [
    {
     "nombre": "No requiere",
     "valor": 10.2,
     "n": 84
    },
    {
     "nombre": "Incitación verbal o gestual",
     "valor": 6.3,
     "n": 52
    },
    {
     "nombre": "Supervisión",
     "valor": 20.8,
     "n": 171
    },
    {
     "nombre": "Ayuda física parcial",
     "valor": 47.6,
     "n": 391
    },
    {
     "nombre": "Ayuda física total",
     "valor": 15.0,
     "n": 123
    }
   ],
   "origen": [
    {
     "nombre": "Congénita (de nacimiento)",
     "valor": 43.6,
     "n": 358
    },
    {
     "nombre": "Enfermedad crónico-degenerativa",
     "valor": 25.9,
     "n": 213
    },
    {
     "nombre": "Accidente o violencia",
     "valor": 14.3,
     "n": 117
    },
    {
     "nombre": "Enfermedad infecciosa",
     "valor": 5.0,
     "n": 41
    },
    {
     "nombre": "Embarazo, parto o recién nacido",
     "valor": 3.3,
     "n": 27
    },
    {
     "nombre": "Otra causa o no aplica",
     "valor": 7.9,
     "n": 65
    }
   ],
   "condicion": [
    {
     "nombre": "Mental y del neurodesarrollo",
     "valor": 24.4,
     "n": 200,
     "detalle": "autismo, discapacidad intelectual"
    },
    {
     "nombre": "Sistema nervioso",
     "valor": 14.6,
     "n": 120,
     "detalle": "epilepsia, parálisis cerebral"
    },
    {
     "nombre": "Músculos, huesos y articulaciones",
     "valor": 10.6,
     "n": 87,
     "detalle": "artritis, artrosis de rodilla"
    },
    {
     "nombre": "Anomalías del desarrollo",
     "valor": 10.6,
     "n": 87,
     "detalle": "síndrome de Down"
    },
    {
     "nombre": "Lesiones y traumatismos",
     "valor": 10.1,
     "n": 83,
     "detalle": "amputaciones, fracturas"
    },
    {
     "nombre": "Visión",
     "valor": 9.6,
     "n": 79,
     "detalle": "ceguera, retinopatía diabética"
    },
    {
     "nombre": "Oído",
     "valor": 6.9,
     "n": 57,
     "detalle": "hipoacusia, pérdida auditiva"
    },
    {
     "nombre": "Síntomas generales",
     "valor": 4.3,
     "n": 35,
     "detalle": "problemas de marcha, hemiplejia"
    },
    {
     "nombre": "Otras",
     "valor": 8.9,
     "n": 73,
     "detalle": "enfermedad renal, ausencia de un miembro, tumores"
    }
   ],
   "edad": [
    {
     "nombre": "0 a 5",
     "valor": 8.0,
     "n": 66
    },
    {
     "nombre": "6 a 17",
     "valor": 17.9,
     "n": 147
    },
    {
     "nombre": "18 a 29",
     "valor": 9.7,
     "n": 80
    },
    {
     "nombre": "30 a 44",
     "valor": 17.4,
     "n": 143
    },
    {
     "nombre": "45 a 64",
     "valor": 45.2,
     "n": 371
    },
    {
     "nombre": "65 o más",
     "valor": 1.7,
     "n": 14
    }
   ]
  },
  "economia": {
   "personas": 594,
   "carencias_promedio": 1.82,
   "dependiente": 59.9,
   "apoyo_social": 26.4,
   "carencias": [
    {
     "nombre": "Sin afiliación a servicios de salud",
     "valor": 74.6,
     "n": 443
    },
    {
     "nombre": "No terminó la primaria",
     "valor": 26.9,
     "n": 160
    },
    {
     "nombre": "Sin trabajo",
     "valor": 52.9,
     "n": 314
    },
    {
     "nombre": "Vivienda precaria",
     "valor": 0.0,
     "n": 0
    },
    {
     "nombre": "Le falta un aparato de apoyo",
     "valor": 27.4,
     "n": 163
    }
   ],
   "actividad": [
    {
     "nombre": "No trabaja ni estudia por barreras del entorno",
     "valor": 51.2,
     "n": 304
    },
    {
     "nombre": "Tiene trabajo",
     "valor": 14.0,
     "n": 83
    },
    {
     "nombre": "Quehaceres del hogar",
     "valor": 12.6,
     "n": 75
    },
    {
     "nombre": "Jubilado o pensionado",
     "valor": 5.7,
     "n": 34
    },
    {
     "nombre": "Busca trabajo",
     "valor": 1.7,
     "n": 10
    },
    {
     "nombre": "Estudiante",
     "valor": 0.5,
     "n": 3
    },
    {
     "nombre": "Otra o no aplica",
     "valor": 14.3,
     "n": 85
    }
   ],
   "salud": [
    {
     "nombre": "Ninguna",
     "valor": 74.6,
     "n": 443
    },
    {
     "nombre": "IMSS",
     "valor": 18.7,
     "n": 111
    },
    {
     "nombre": "ISSSTE",
     "valor": 1.2,
     "n": 7
    },
    {
     "nombre": "Bienestar",
     "valor": 0.2,
     "n": 1
    },
    {
     "nombre": "Otra o no especificado",
     "valor": 5.4,
     "n": 32
    }
   ],
   "escolaridad": [
    {
     "nombre": "Sin primaria terminada",
     "valor": 26.9,
     "n": 160
    },
    {
     "nombre": "Primaria",
     "valor": 22.1,
     "n": 131
    },
    {
     "nombre": "Secundaria",
     "valor": 31.1,
     "n": 185
    },
    {
     "nombre": "Bachillerato",
     "valor": 10.9,
     "n": 65
    },
    {
     "nombre": "Licenciatura o más",
     "valor": 6.1,
     "n": 36
    },
    {
     "nombre": "No especificado",
     "valor": 2.9,
     "n": 17
    }
   ]
  },
  "relacion": {
   "calificacion_por_carencias": [
    {
     "nombre": "0",
     "valor": 39.75,
     "n": 59
    },
    {
     "nombre": "1",
     "valor": 40.94,
     "n": 146
    },
    {
     "nombre": "2",
     "valor": 41.43,
     "n": 251
    },
    {
     "nombre": "3",
     "valor": 44.86,
     "n": 120
    },
    {
     "nombre": "4",
     "valor": 45.9,
     "n": 18
    }
   ],
   "funciones_por_carencias": [
    {
     "nombre": "0",
     "valor": 10.62,
     "n": 59
    },
    {
     "nombre": "1",
     "valor": 10.67,
     "n": 146
    },
    {
     "nombre": "2",
     "valor": 10.53,
     "n": 251
    },
    {
     "nombre": "3",
     "valor": 11.35,
     "n": 120
    },
    {
     "nombre": "4",
     "valor": 13.0,
     "n": 18
    }
   ],
   "carencias_por_apoyo": [
    {
     "nombre": "No requiere",
     "valor": 1.36,
     "n": 80
    },
    {
     "nombre": "Incitación verbal o gestual",
     "valor": 2.06,
     "n": 31
    },
    {
     "nombre": "Supervisión",
     "valor": 1.73,
     "n": 120
    },
    {
     "nombre": "Ayuda física parcial",
     "valor": 1.96,
     "n": 295
    },
    {
     "nombre": "Ayuda física total",
     "valor": 1.78,
     "n": 68
    }
   ],
   "carencias_por_nivel": [
    {
     "nombre": "25 a 40",
     "valor": 1.73,
     "n": 295
    },
    {
     "nombre": "40 a 55",
     "valor": 1.8,
     "n": 201
    },
    {
     "nombre": "55 a 70",
     "valor": 2.14,
     "n": 86
    },
    {
     "nombre": "70 o más",
     "valor": 2.0,
     "n": 12
    }
   ],
   "personas_por_nivel": [
    295,
    201,
    86,
    12
   ],
   "matriz": [
    {
     "nombre": "Sin afiliación a servicios de salud",
     "celdas": [
      75.3,
      71.6,
      79.1,
      75.0
     ]
    },
    {
     "nombre": "No terminó la primaria",
     "celdas": [
      22.0,
      28.9,
      37.2,
      41.7
     ]
    },
    {
     "nombre": "Sin trabajo",
     "celdas": [
      50.2,
      55.2,
      55.8,
      58.3
     ]
    },
    {
     "nombre": "Vivienda precaria",
     "celdas": [
      0.0,
      0.0,
      0.0,
      0.0
     ]
    },
    {
     "nombre": "Le falta un aparato de apoyo",
     "celdas": [
      25.4,
      24.4,
      41.9,
      25.0
     ]
    }
   ]
  }
 }
};
