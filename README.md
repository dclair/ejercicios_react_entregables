# Actividades de React - Proyecto de Prácticas

## 📌 Descripción del proyecto

Este proyecto contiene **10 actividades prácticas de React** pensadas para aprender y practicar conceptos fundamentales de JavaScript y React, como:

- Manejo de estados (`useState`)  
- Eventos (`onClick`, `onChange`, `onKeyDown`)  
- Renderizado dinámico de listas y elementos  
- Manipulación del DOM mediante React  
- Persistencia de datos con `localStorage`  
- Temporizadores y lógica básica de formularios  

Cada actividad se encuentra en su propia carpeta (`actividad1`, `actividad2`, …) y cuenta con su **App.jsx**, **main.jsx** y su archivo HTML correspondiente para poder abrirse de manera independiente.  
El proyecto utiliza **Vite** como herramienta de bundling y desarrollo.

---

## 📂 Estructura del proyecto

.
├── index.html # Menú principal con enlaces a todas las actividades
├── actividad1/
│ ├── App.jsx
│ └── main.jsx
├── actividad2/
│ ├── App.jsx
│ └── main.jsx
...
├── actividad10/
│ ├── App.jsx
│ └── main.jsx
├── package.json
├── vite.config.js
└── README.md

---

## 📚 Listado de actividades

1. **Cambiador de Color de Fondo**  
   Cambia el color de fondo de la página con un botón de manera aleatoria.

2. **Contador de Clics**  
   Contador que aumenta al hacer clic en un botón y se puede reiniciar.

3. **Lista Dinámica**  
   Permite agregar y eliminar elementos de una lista, incluyendo pulsar Enter para agregar.

4. **Filtro de Búsqueda en Tiempo Real**  
   Filtra una lista predefinida mientras el usuario escribe en un input.

5. **Calculadora Sencilla**  
   Realiza sumas, restas, multiplicaciones y divisiones con validación, y permite calcular con Enter.

6. **Temporizador con Inicio, Pausa y Reinicio**  
   Temporizador que cuenta horas, minutos y segundos con control de inicio, pausa y reinicio.

7. **Generador de Contraseñas Aleatorias**  
   Genera contraseñas aleatorias según la longitud especificada por el usuario, validando longitud mínima.

8. **Contador de Palabras y Caracteres**  
   Muestra en tiempo real el número de palabras y caracteres (sin espacios) de un texto ingresado.

9. **Lista de Tareas con LocalStorage**  
   Lista de tareas persistente con checkboxes, posibilidad de eliminar completadas y agregar con Enter.

10. **(Por definir/Extra)**  
    Última actividad práctica de React (se puede agregar más adelante).

---

## ⚡ Cómo ejecutar el proyecto en local

1. Clonar el repositorio:

```bash
git clone https://github.com/usuario/nombre-del-repositorio.git
cd nombre-del-repositorio
Instalar dependencias:

npm install


Iniciar servidor de desarrollo:

npm run dev


Abrir en el navegador la URL que indique Vite (normalmente http://localhost:5173).

Cada actividad también se puede abrir individualmente desde su HTML correspondiente si quieres probar sin pasar por el menú principal.