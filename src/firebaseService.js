import { db } from "./firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";

export const addEasterEgg = async (titulo, descripcion, dificultad, juego, fechaSalida, sugerencias) => {
  try {
    await addDoc(collection(db, "easterEggs"), {
      titulo,
      descripcion,
      dificultad,
      juego,
      fechaSalida,
      sugerencias
    });
    console.log("Easter Egg agregado con éxito!");
  } catch (error) {
    console.error("Error al agregar Easter Egg: ", error);
  }
};

export const getEasterEggs = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "easterEggs"));
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error al obtener los Easter Eggs: ", error);
    return [];
  }
};