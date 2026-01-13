import React, { useState } from "react";  

function React_Ejercicio3() {
  // Estado para almacenar los elementos de la lista
  const [lista, setLista] = useState([]);
  // Estado para almacenar el texto del input
  const [texto, setTexto] = useState("");

  // Maneja el cambio en el input
  const handleChange = (e) => {
    setTexto(e.target.value);
  };

  // Función que agrega un elemento a la lista
  const agregarElemento = () => {
    // Evita agregar elementos vacíos o solo espacios
    if (texto.trim() === "") return;

    // Agrega el nuevo elemento al array
    setLista([...lista, texto]);

    // Limpia el input después de agregar
    setTexto("");
  };

  // Función que elimina un elemento de la lista por su índice
  const eliminarElemento = (index) => {
    setLista(lista.filter((_, i) => i !== index));
  };

  // Maneja la pulsación de teclas en el input
  const handleKeyPress = (e) => {
    // Si la tecla presionada es Enter, agrega el elemento
    if (e.key === "Enter") {
      agregarElemento();
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
      }}
    >
      {/* Título de la actividad */}
      <h1>Lista Dinámica</h1>

      {/* Input y botón de agregar */}
      <div>
        <input
          type="text"
          value={texto}
          onChange={handleChange}     // Actualiza el estado al escribir
          onKeyDown={handleKeyPress}  // Permite agregar con Enter
          placeholder="Escribe algo"
        />
        <button onClick={agregarElemento}>Agregar</button>
      </div>

      {/* Lista de elementos */}
      <ul>
        {lista.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <button onClick={() => eliminarElemento(index)}>Eliminar</button>
          </li>
        ))}
      </ul>

      {/* Enlace para volver al menú */}
      <a href="./">Volver al menú</a>
    </div>
  );
}

export default React_Ejercicio3;
