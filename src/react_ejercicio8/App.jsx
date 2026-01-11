import { useState } from "react";

function App() {
  // Estado para almacenar el texto ingresado
  const [texto, setTexto] = useState("");
  // Estado para almacenar el conteo de palabras
  const [palabras, setPalabras] = useState(0);
  // Estado para almacenar el conteo de caracteres (sin espacios ni saltos)
  const [caracteres, setCaracteres] = useState(0);

  // Función que se llama cada vez que el usuario escribe
  const handleChange = (e) => {
    const valor = e.target.value;
    setTexto(valor);

    // Contar palabras: separar por espacios y filtrar elementos vacíos
    const listaPalabras = valor.trim().split(/\s+/).filter(Boolean);
    setPalabras(listaPalabras.length);

    // Contar caracteres: eliminar espacios y saltos de línea
    const numCaracteres = valor.replace(/\s/g, "").length;
    setCaracteres(numCaracteres);
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
      <h1>Contador de Palabras y Caracteres</h1>

      {/* Campo de texto */}
      <textarea
        value={texto}
        onChange={handleChange}
        placeholder="Escribe tu párrafo aquí..."
        rows={6}
        cols={50}
        style={{ resize: "none" }}
      />

      {/* Mostrar conteos en tiempo real */}
      <p>Palabras: {palabras}</p>
      <p>Caracteres (sin espacios): {caracteres}</p>

      {/* Enlace para volver al menú */}
      <a href="/">Volver al menú</a>
    </div>
  );
}

export default App;
