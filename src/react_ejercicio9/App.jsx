import { useState, useEffect } from "react";

function App() {
  // Cargar tareas desde localStorage al inicio
  const tareasIniciales = () => {
    const tareasGuardadas = localStorage.getItem("tareas");
    return tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
  };

  const [tareas, setTareas] = useState(tareasIniciales);
  const [texto, setTexto] = useState("");

  // Guardar tareas en localStorage cada vez que cambian
  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  // Manejar el cambio del input
  const handleChange = (e) => setTexto(e.target.value);

  // Agregar nueva tarea
  const agregarTarea = () => {
    if (texto.trim() === "") return;
    const nuevaTarea = { texto: texto.trim(), completada: false };
    setTareas([...tareas, nuevaTarea]);
    setTexto("");
  };

  // Permitir agregar con Enter
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      agregarTarea();
    }
  };

  // Alternar completado
  const toggleCompletada = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].completada = !nuevasTareas[index].completada;
    setTareas(nuevasTareas);
  };

  // Limpiar completadas
  const limpiarCompletadas = () => {
    setTareas(tareas.filter(t => !t.completada));
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        paddingTop: "20px"
      }}
    >
      <h1>Lista de Tareas con LocalStorage</h1>

      <div>
        <input
          type="text"
          value={texto}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          placeholder="Nueva tarea"
        />
        <button onClick={agregarTarea}>Agregar</button>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {tareas.map((tarea, index) => (
          <li key={index} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <input
              type="checkbox"
              checked={tarea.completada}
              onChange={() => toggleCompletada(index)}
            />
            <span style={{ textDecoration: tarea.completada ? "line-through" : "none" }}>
              {tarea.texto}
            </span>
          </li>
        ))}
      </ul>

      <button onClick={limpiarCompletadas}>Limpiar tareas completadas</button>

      <a href="/">Volver al menú</a>
    </div>
  );
}

export default App;
