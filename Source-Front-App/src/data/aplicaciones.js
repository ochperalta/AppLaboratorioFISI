import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { version } from "react";

const columns = [
  { name: "NOMBRE", uid: "nombre", sortable: true },
  { name: "CATEGORIA", uid: "categoria", sortable: true },
  { name: "DESCRIPCIÓN", uid: "descripcion", sortable: true },
  { name: "VERSION", uid: "version" },
  { name: "ACTIONS", uid: "actions" }
];

const getAplicaciones = async () => {
  let aplicaciones = [];
  const querySnapshot = await getDocs(collection(db, "aplicaciones"));
  querySnapshot.forEach((item) => {
    let data = item.data();
    let app = {
      id: item.id,
      nombre: data.nombre,
      descripcion: data.descripcion,
      version: data.version,
      categoria: data.categoria,
    };
    aplicaciones.push(app);
  });
  return aplicaciones;
};

export { columns, getAplicaciones };
