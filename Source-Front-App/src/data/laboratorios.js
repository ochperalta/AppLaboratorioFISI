import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const columns = [
  { name: "NOMBRE", uid: "nombre", sortable: true },
  { name: "AULA", uid: "aula", sortable: true },
  { name: "PABELLON", uid: "pabellon", sortable: true },
  { name: "PISO", uid: "piso" },
  { name: "ESTADO", uid: "estado", sortable: true },
  { name: "ACTIONS", uid: "actions" },
];

const statusOptions = [
  { name: "Activo", uid: "activo" },
  { name: "Mantenimiento", uid: "mantenimiento" },
];

const getLaboratorios = async () => {
  let laboratorios = [];
  const querySnapshot = await getDocs(collection(db, "laboratorios"));
  querySnapshot.forEach((item) => {
    let data = item.data();
    let lab = {
      id: item.id,
      nombre: data.nombre,
      aula: data.aula,
      pabellon: data.pabellon=== "AP" ? "Antiguo Pabellón" : "Nuevo Pabellón",
      estado: data.estado === "A" ? "activo" : "mantenimiento",
      piso: data.piso,
      equipos: data.equipos,
      aplicaciones: data.aplicaciones,
    };
    console.log(lab);
    laboratorios.push(lab);
  });
  return laboratorios;
};

export { columns, statusOptions, getLaboratorios };
