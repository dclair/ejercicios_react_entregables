// src/Menu.jsx
import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Menú de Actividades React</h1>
      <ul>
        <li>
          <Link to="/actividad1">Actividad 1 - Cambiador de Color de Fondo</Link>
        </li>
        <li>
          <Link to="/actividad2">Actividad 2 - Contador de Clics</Link>
        </li>
        <li>
          <Link to="/actividad3">Actividad 3 - Lista Dinámica</Link>
        </li>
        <li>
          <Link to="/actividad4">Actividad 4 - Filtro de Búsqueda en Tiempo Real</Link>
        </li>
        <li>
          <Link to="/actividad5">Actividad 5 - Calculadora Sencilla</Link>
        </li>
        <li>
          <Link to="/actividad6">Actividad 6 - Temporizador con Inicio, Pausa y Reinicio</Link>
        </li>
        <li>
          <Link to="/actividad7">Actividad 7 - Generador de Contraseñas Aleatorias</Link>
        </li>
        <li>
          <Link to="/actividad8">Actividad 8 - Contador de Palabras y Caracteres</Link>
        </li>
        <li>
          <Link to="/actividad9">Actividad 9 - Lista de Tareas con LocalStorage</Link>
        </li>
        
      </ul>
    </div>
  );
}

export default Menu;
