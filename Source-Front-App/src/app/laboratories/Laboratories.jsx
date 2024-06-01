import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  Avatar,
} from "@nextui-org/react";
import { useParams } from "react-router-dom";
import "./laboratories.css";
import { Link } from "react-router-dom";
import { getAll } from "../../services/laboratories";

const CardLaboratory = ({ laboratory }) => {
  return (
    <Link to={laboratory.name} state={laboratory}>
      <Card className="w-full">
        <CardHeader className="flex gap-3">
          <Avatar name={laboratory.classroom} />
          <div className="flex flex-col">
            <p className="text-md">{laboratory.name}</p>
            <p className="text-small text-default-500">
              {laboratory.pavilion}
            </p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>
            Aula: {laboratory.classroom}, Piso: {laboratory.floor}
          </p>
          <p>Computadoras: {laboratory.computersQuantity}</p>
        </CardBody>
        <Divider />
      </Card>
    </Link>
  );
};

export default function Laboratories() {
  const [laboratories, setLaboratory] = React.useState([]);

  const { id } = useParams();

  async function getAllLaboratories() {
    let data = await getAll()
    console.log(data)
    setLaboratory(data);
  }

  React.useMemo(() => {
    getAllLaboratories();
    console.log(laboratories);
  }, [id]);

  return (
    <>
      <section className="container-laboratories">
        {laboratories.map((item) => (
          <CardLaboratory laboratory={item} />
        ))}
      </section>
    </>
  );
}
