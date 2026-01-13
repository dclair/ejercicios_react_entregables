import React, { useState } from "react";

function React_Ejercicio5() {
  // Estados para los dos números y el resultado
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [resultado, setResultado] = useState("");

  // Maneja el cambio del primer input
  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  // Maneja el cambio del segundo input
  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  // Función para validar entradas
  const validar = () => {
    if (num1 === "" || num2 === "") {
      setResultado("Por favor, ingresa ambos números");
      return false;
    }
    if (isNaN(num1) || isNaN(num2)) {
      setResultado("Los valores deben ser números");
      return false;
    }
    return true;
  };

  // Funciones de operación
  const sumar = () => {
    if (!validar()) return;
    setResultado(Number(num1) + Number(num2));
  };

  const restar = () => {
    if (!validar()) return;
    setResultado(Number(num1) - Number(num2));
  };

  const multiplicar = () => {
    if (!validar()) return;
    setResultado(Number(num1) * Number(num2));
  };

  const dividir = () => {
    if (!validar()) return;
    if (Number(num2) === 0) {
      setResultado("No se puede dividir entre 0");
      return;
    }
    setResultado(Number(num1) / Number(num2));
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
      <h1>Calculadora Sencilla</h1>

      {/* Inputs de números */}
      <input
        type="text"
        value={num1}
        onChange={handleNum1Change}
        placeholder="Número 1"
      />
      <input
        type="text"
        value={num2}
        onChange={handleNum2Change}
        placeholder="Número 2"
      />

      {/* Botones de operaciones */}
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={sumar}>Sumar</button>
        <button onClick={restar}>Restar</button>
        <button onClick={multiplicar}>Multiplicar</button>
        <button onClick={dividir}>Dividir</button>
      </div>

      {/* Mostrar el resultado */}
      <p>Resultado: {resultado}</p>

      {/* Enlace para volver al menú */}
      <a href="./">Volver al menú</a>
    </div>
  );
}

export default React_Ejercicio5;
