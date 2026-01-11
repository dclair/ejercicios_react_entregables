// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Menu.jsx";

// Importa cada ejercicio desde sus carpetas renombradas
import React_Ejercicio1 from "./react_ejercicio1/App.jsx";
import React_Ejercicio2 from "./react_ejercicio2/App.jsx";
import React_Ejercicio3 from " ./react_ejercicio3/App.jsx";
import React_Ejercicio4 from "./react_ejercicio4/App.jsx";
import React_Ejercicio5 from "./react_ejercicio5/App.jsx";
import React_Ejercicio6 from "./react_ejercicio6/App.jsx";
import React_Ejercicio7 from "./react_ejercicio7/App.jsx";
import React_Ejercicio8 from "./react_ejercicio8/App.jsx";
import React_Ejercicio9 from "./react_ejercicio9/App.jsx";


function App() {
  return (
    <BrowserRouter basename="/ejercicios_react_entregables/">
      <Routes>
        {/* Menú principal */}
        <Route path="/" element={<Menu />} />

        {/* Rutas para cada actividad */}
        <Route path="/actividad1" element={<React_Ejercicio1 />} />
        <Route path="/actividad2" element={<React_Ejercicio2 />} />
        <Route path="/actividad3" element={<React_Ejercicio3 />} />
        <Route path="/actividad4" element={<React_Ejercicio4 />} />
        <Route path="/actividad5" element={<React_Ejercicio5 />} />
        <Route path="/actividad6" element={<React_Ejercicio6 />} />
        <Route path="/actividad7" element={<React_Ejercicio7 />} />
        <Route path="/actividad8" element={<React_Ejercicio8 />} />
        <Route path="/actividad9" element={<React_Ejercicio9 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

