import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Image,
  Avatar,
} from "@nextui-org/react";
import { getLaboratorios } from "../../data/laboratorios";
import { useNavigate, useParams } from "react-router-dom";
import "./laboratorios.css";
import { Link, Outlet } from "react-router-dom";

const CardLaboratory = ({ laboratorio }) => {
  const navigate = useNavigate();

  const handlerNavigate = () => {
    navigate(laboratorio.nombre, { state: { key: "value" } });
  };

  return (
    <Link to={laboratorio.nombre} state={laboratorio}>
      <Card className="max-w-[400px] min-w-[250px] card-laboratory">
        <CardHeader className="flex gap-3">
          <Avatar name={laboratorio.aula} />
          <div className="flex flex-col">
            <p className="text-md">{laboratorio.nombre}</p>
            <p className="text-small text-default-500">
              {laboratorio.pabellon}
            </p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>
            Aula: {laboratorio.aula}, Piso: {laboratorio.piso}
          </p>
          <p>Equipos: {laboratorio.equipos}</p>
          <p>Aplicaciones: {laboratorio.aplicaciones}</p>
        </CardBody>
        <Divider />
      </Card>
    </Link>
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
          <CardLaboratory laboratorio={item} />
        ))}
      </section>
    </>
  );
}
