import React, { useState, useRef } from "react";

function React_Ejercicio6() {
  // Estado para tiempo en segundos
  const [segundos, setSegundos] = useState(0);
  const intervaloRef = useRef(null); // referencia para el setInterval

  // Formatear tiempo a hh:mm:ss
  const formatearTiempo = () => {
    const h = String(Math.floor(segundos / 3600)).padStart(2,"0");
    const m = String(Math.floor((segundos % 3600)/60)).padStart(2,"0");
    const s = String(segundos % 60).padStart(2,"0");
    return `${h}:${m}:${s}`;
  };

  // Función Iniciar
  const iniciar = () => {
    if(intervaloRef.current !== null) return; // evita múltiples intervalos
    intervaloRef.current = setInterval(() => {
      setSegundos(prev => prev + 1);
    }, 1000);
  };

  // Función Pausar
  const pausar = () => {
    clearInterval(intervaloRef.current);
    intervaloRef.current = null;
  };

  // Función Reiniciar
  const reiniciar = () => {
    pausar();
    setSegundos(0);
  };

  return (
    <div style={{
      height: "100vh",
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      gap:"10px"
    }}>
      <h1>Temporizador</h1>

      <h2>{formatearTiempo()}</h2>

      <div style={{display:"flex", gap:"10px"}}>
        <button onClick={iniciar}>Iniciar</button>
        <button onClick={pausar}>Pausar</button>
        <button onClick={reiniciar}>Reiniciar</button>
      </div>

        
    </div>
  );
}

export default React_Ejercicio6;
