import React, { useEffect, useState } from "react";
import { getEasterEggs } from "../firebaseService";
import { addEasterEgg } from "../firebaseService";

const handleAddEasterEgg = async () => {
  await addEasterEgg(
    "Easter Egg de Samantha",
    "Requiere encontrar las 4 muñecas escondidas",
    "Media",
    "Call of Duty: Black Ops 3",
    "ok",
    "XD"
  );
};

const EasterEggs = () => {
  const [easterEggs, setEasterEggs] = useState([]);

  useEffect(() => {
    const fetchEasterEggs = async () => {
      try {
        console.log("Obteniendo Easter Eggs..."); // <--- PRUEBA
        const eggs = await getEasterEggs();
        console.log("Easter Eggs obtenidos:", eggs); // <--- PRUEBA
        setEasterEggs(eggs);
      } catch (error) {
        console.error("Error al obtener Easter Eggs:", error);
      }
    };
  
    fetchEasterEggs();
  }, []);  

  return (
    <div>
      <h2>Easter Eggs de Call of Duty Zombies</h2>
      <ul>
        {easterEggs.map((egg) => (
          <li key={egg.id}>
            <h3>{egg.titulo}</h3>
            <p>{egg.descripcion}</p>
            <p><strong>Dificultad:</strong> {egg.dificultad}</p>
            <p><strong>Juego:</strong> {egg.juego}</p>
          </li>
        ))}
      </ul>
      <button onClick={handleAddEasterEgg}>Agregar Easter Egg</button>
    </div>
    
  );
};

export default EasterEggs;