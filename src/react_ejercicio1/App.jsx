import { useState } from "react";

function App() {
  const [color, setColor] = useState("#ffffff");

  const cambiarColor = () => {
    const colorAleatorio =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
    setColor(colorAleatorio);
  };

  return (
    <div
      style={{
        backgroundColor: color,
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Cambiar color de fondo</h1>
      
      <button onClick={cambiarColor}>
        Cambiar color
      </button>

      <p>Color actual: {color}</p>

      <a href="/">Volver al menú</a>
    </div>
  );
}

export default App;

