import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Avatar,
} from "@nextui-org/react";
import { getLaboratorios } from "../data/laboratorios";
import { useParams } from "react-router-dom";
import './laboratorios.css'

const CardLaboratory = ({
  nombre,
  pabellon,
  aula,
  piso,
  equipos,
  aplicaciones,
}) => {
  return (
    <Card className="max-w-[400px] min-w-[250px] card-laboratory">
      <CardHeader className="flex gap-3">
        <Avatar name={aula} />
        <div className="flex flex-col">
          <p className="text-md">{nombre}</p>
          <p className="text-small text-default-500">{pabellon}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>
          Aula: {aula}, Piso: {piso}
        </p>
        <p>Equipos: {equipos}</p>
        <p>Aplicaciones: {aplicaciones}</p>
      </CardBody>
      <Divider />
    </Card>
  );
};

export default function Laboratorios() {
  const [laboratorios, setLaboratorio] = React.useState([]);

  const { id } = useParams();

  function getAllLaboratorios() {
    getLaboratorios()
      .then((data) => {
        setLaboratorio(data);
        console.log(laboratorios); // Actualiza el estado con los datos obtenidos
      })
      .catch((error) => {
        console.error("Error al obtener datos de la API:", error);
      });
  }

  React.useMemo(() => {
    getAllLaboratorios();
    console.log(laboratorios);
  }, [id]);

  return (
    <>
      <section className="flex flex-wrap gap-4 p-6">
        {laboratorios.map((item) => (
          <CardLaboratory
            nombre={item.nombre}
            pabellon={item.pabellon}
            aula={item.aula}
            piso={item.piso}
            equipos={item.equipos}
            aplicaciones={item.aplicaciones}
          />
        ))}
      </section>
    </>
  );
}


