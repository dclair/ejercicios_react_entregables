import React, { useState } from "react";

function React_Ejercicio4() {
  // Lista inicial de elementos
  const elementosIniciales = ["Orangutan", "Perro", "Gato", "Pez", "Conejo", "Loro", "Tortuga", "Supercalifagilisticoespialidoso","Zetepeta"];

  // Estado para almacenar el texto del input
  const [busqueda, setBusqueda] = useState("");
  // Estado para almacenar la lista filtrada
  const [listaFiltrada, setListaFiltrada] = useState(elementosIniciales);

  // Maneja el cambio en el input
  const handleChange = (e) => {
    const valor = e.target.value;
    setBusqueda(valor);

    // Filtra los elementos que contienen el texto escrito (sin importar mayúsculas)
    const filtrados = elementosIniciales.filter((item) =>
      item.toLowerCase().includes(valor.toLowerCase())
    );

    setListaFiltrada(filtrados);
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
      <h1>Filtro en Tiempo Real</h1>

      {/* Input de búsqueda */}
      <input
        type="text"
        value={busqueda}
        onChange={handleChange}  // Actualiza la búsqueda y la lista filtrada
        placeholder="Escribe para filtrar"
      />

      {/* Lista filtrada */}
      <ul>
        {listaFiltrada.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* Enlace para volver al menú */}
      <a href="./">Volver al menú</a>
    </div>
  );
}

export default React_Ejercicio4;
