import React, { useState } from "react";

function React_Ejercicio2() {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    setContador(contador - 1);
  };

  const reiniciar = () => {
    setContador(0);
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Contador de clics</h1>

      <h2>Contador: {contador}</h2>

      <div>
        <button onClick={incrementar}>Incrementar</button>
        <button onClick={decrementar}>Decrementar</button>
        <button onClick={reiniciar}>Reiniciar</button>
      </div>

      <a href="./">Volver al menú</a>
    </div>
  );
}

export default React_Ejercicio2;


