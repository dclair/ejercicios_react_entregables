import React, { useState } from "react";

function React_Ejercicio7() {
  // Estado para la longitud de la contraseña
  const [longitud, setLongitud] = useState("");
  // Estado para la contraseña generada
  const [contrasena, setContrasena] = useState("");
  // Estado para el mensaje de error
  const [error, setError] = useState(false);

  // Maneja el cambio del input
  const handleChange = (e) => setLongitud(e.target.value);

  // Función para generar una contraseña aleatoria
  const generarContrasena = () => {
    const len = Number(longitud);

    // Validación: campo vacío o menor a 4
    if (!len || len < 4) {
      setError(true);
      setContrasena("La longitud debe ser mayor o igual a 4");
      return;
    }

    setError(false);

    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";
    let resultado = "";

    for (let i = 0; i < len; i++) {
      const indice = Math.floor(Math.random() * caracteres.length);
      resultado += caracteres[indice];
    }

    setContrasena(resultado);
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
      {/* Título */}
      <h1>Generador de Contraseñas Aleatorias</h1>

      {/* Input de longitud */}
      <input
        type="number"
        value={longitud}
        onChange={handleChange}
        placeholder="Longitud de la contraseña"
      />

      {/* Botón para generar contraseña */}
      <button onClick={generarContrasena}>Generar contraseña</button>

      {/* Mostrar la contraseña o mensaje de error */}
      <p style={{ color: error ? "red" : "black" }}>{contrasena}</p>

      {/* Enlace para volver al menú */}
      <a href="./">Volver al menú</a>
    </div>
  );
}

export default React_Ejercicio7;
