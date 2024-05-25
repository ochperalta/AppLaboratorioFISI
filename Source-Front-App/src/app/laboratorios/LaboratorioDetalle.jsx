import React from "react";
import { useLocation } from "react-router-dom";
import {
  Accordion,
  AccordionItem,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  getKeyValue,
  Tooltip,
  Button,
} from "@nextui-org/react";
import { DeleteIcon } from "./DeleteIcon";
import { EditIcon } from "./EditIcon";

const users = [
  {
    key: "1",
    name: "Tony Reichert",
    role: "CEO",
    status: "Active",
  },
  {
    key: "2",
    name: "Zoey Lang",
    role: "Technical Lead",
    status: "Paused",
  },
  {
    key: "3",
    name: "Jane Fisher",
    role: "Senior Developer",
    status: "Active",
  },
  {
    key: "4",
    name: "William Howard",
    role: "Community Manager",
    status: "Vacation",
  },
  {
    key: "5",
    name: "Emily Collins",
    role: "Marketing Manager",
    status: "Active",
  },
  {
    key: "6",
    name: "Brian Kim",
    role: "Product Manager",
    status: "Active",
  },
  {
    key: "7",
    name: "Laura Thompson",
    role: "UX Designer",
    status: "Active",
  },
  {
    key: "8",
    name: "Michael Stevens",
    role: "Data Analyst",
    status: "Paused",
  },
  {
    key: "9",
    name: "Sophia Nguyen",
    role: "Quality Assurance",
    status: "Active",
  },
  {
    key: "10",
    name: "James Wilson",
    role: "Front-end Developer",
    status: "Vacation",
  },
  {
    key: "11",
    name: "Ava Johnson",
    role: "Back-end Developer",
    status: "Active",
  },
  {
    key: "12",
    name: "Isabella Smith",
    role: "Graphic Designer",
    status: "Active",
  },
  {
    key: "13",
    name: "Oliver Brown",
    role: "Content Writer",
    status: "Paused",
  },
  {
    key: "14",
    name: "Lucas Jones",
    role: "Project Manager",
    status: "Active",
  },
  {
    key: "15",
    name: "Grace Davis",
    role: "HR Manager",
    status: "Active",
  },
  {
    key: "16",
    name: "Elijah Garcia",
    role: "Network Administrator",
    status: "Active",
  },
  {
    key: "17",
    name: "Emma Martinez",
    role: "Accountant",
    status: "Vacation",
  },
  {
    key: "18",
    name: "Benjamin Lee",
    role: "Operations Manager",
    status: "Active",
  },
  {
    key: "19",
    name: "Mia Hernandez",
    role: "Sales Manager",
    status: "Paused",
  },
  {
    key: "20",
    name: "Daniel Lewis",
    role: "DevOps Engineer",
    status: "Active",
  },
  {
    key: "21",
    name: "Amelia Clark",
    role: "Social Media Specialist",
    status: "Active",
  },
  {
    key: "22",
    name: "Jackson Walker",
    role: "Customer Support",
    status: "Active",
  },
  {
    key: "23",
    name: "Henry Hall",
    role: "Security Analyst",
    status: "Active",
  },
  {
    key: "24",
    name: "Charlotte Young",
    role: "PR Specialist",
    status: "Paused",
  },
  {
    key: "25",
    name: "Liam King",
    role: "Mobile App Developer",
    status: "Active",
  },
];

const LaboratorioDetalle = ({ infoLaboratorio }) => {
  const { state } = useLocation();
  const [laboratorio, setLaboratorio] = React.useState({});
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 5;

  const pages = Math.ceil(users.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return users.slice(start, end);
  }, [page, users]);

  const renderCell = React.useCallback((user, columnKey) => {
    const cellValue = user[columnKey];
    if (columnKey == "actions") {
      return (
        <div className="relative flex items-center justify-center gap-2">
          <Tooltip content="Editar">
            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
              <EditIcon />
            </span>
          </Tooltip>
          <Tooltip color="danger" content="Remover">
            <span className="text-lg text-danger cursor-pointer active:opacity-50">
              <DeleteIcon />
            </span>
          </Tooltip>
        </div>
      );
    }
    return cellValue;
  }, []);

  React.useEffect(() => {
    // Google Analytics
    setLaboratorio(state);
    console.log(laboratorio);
  }, [location]);

  return (
    <>
      <div className="detalle-container">
        <section className="detalle-info">
          <header>
            <h3 className="text-2xl mb-2">Información:</h3>
          </header>
          <p>{laboratorio.nombre}</p>
          <p>{laboratorio.pabellon}</p>
          <p>
            Aula: {laboratorio.aula}- {laboratorio.piso}
          </p>
          <p>Aplicaciones: {laboratorio.aplicaciones}</p>
          <p>Equipos(PC): {laboratorio.equipos}</p>
          <p>Mobiliario: {laboratorio.equipos}</p>
        </section>
        <section className="detalle-tables">
          <Accordion isCompact defaultExpandedKeys={["2"]}>
            <AccordionItem
              key="1"
              aria-label="Aplicaciones"
              title="Aplicaciones"
              subtitle={`Aplicaciones: ${laboratorio.aplicaciones}`}
            >
              <div className="px-4 pb-4">
                <div className="flex w-ful justify-end mb-4">
                  <Button size="sm" color="primary">Añadir</Button>
                </div>
                <Table
                  aria-label="Example table with client side pagination"
                  bottomContent={
                    <div className="flex w-full justify-center">
                      <Pagination
                        isCompact
                        showControls
                        showShadow
                        color="secondary"
                        page={page}
                        total={pages}
                        onChange={(page) => setPage(page)}
                      />
                    </div>
                  }
                  classNames={{
                    wrapper: "min-h-[222px]",
                  }}
                >
                  <TableHeader>
                    <TableColumn key="name">NOMBRE</TableColumn>
                    <TableColumn key="role">VERSIÓN</TableColumn>
                    <TableColumn key="role">CANTIDAD</TableColumn>
                    <TableColumn key="status">ESTADO</TableColumn>
                    <TableColumn
                      key="actions"
                      className="flex items-center justify-center"
                    >
                      ACCIONES
                    </TableColumn>
                  </TableHeader>
                  <TableBody items={items}>
                    {(item) => (
                      <TableRow key={item.name}>
                        {(columnKey) => (
                          <TableCell>{renderCell(item, columnKey)}</TableCell>
                        )}
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="Equipos (PC)"
              title="Equipos (PC)" 
              subtitle={`Equipos (PC): ${laboratorio.equipos}`}
            >
              <div className="px-4 pb-4">
                <div className="flex w-ful justify-end mb-4">
                  <Button size="sm" color="primary">Añadir</Button>
                </div>
                <Table
                  aria-label="Example table with client side pagination"
                  bottomContent={
                    <div className="flex w-full justify-center">
                      <Pagination
                        isCompact
                        showControls
                        showShadow
                        color="secondary"
                        page={page}
                        total={pages}
                        onChange={(page) => setPage(page)}
                      />
                    </div>
                  }
                  classNames={{
                    wrapper: "min-h-[222px]",
                  }}
                >
                  <TableHeader>
                    <TableColumn key="name">CÓDIGO</TableColumn>
                    <TableColumn key="role">CARACTERÍSTICAS</TableColumn>
                    <TableColumn key="status">COMPONENTES</TableColumn>
                    <TableColumn key="status">ESTADO</TableColumn>
                    <TableColumn
                      key="actions"
                      className="flex items-center justify-center"
                    >
                      ACCIONES
                    </TableColumn>
                  </TableHeader>
                  <TableBody items={items}>
                    {(item) => (
                      <TableRow key={item.name}>
                        {(columnKey) => (
                          <TableCell>{renderCell(item, columnKey)}</TableCell>
                        )}
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </AccordionItem>
            <AccordionItem
              key="3"
              aria-label="Mobiliarios"
              title="Mobiliarios"
              subtitle={`Mobiliarios: ${laboratorio.equipos}`}
            >
              <div className="px-4 pb-4">
                <div className="flex w-ful justify-end mb-4">
                  <Button size="sm" color="primary">Añadir</Button>
                </div>
                <Table
                  aria-label="Example table with client side pagination"
                  bottomContent={
                    <div className="flex w-full justify-center">
                      <Pagination
                        isCompact
                        showControls
                        showShadow
                        color="secondary"
                        page={page}
                        total={pages}
                        onChange={(page) => setPage(page)}
                      />
                    </div>
                  }
                  classNames={{
                    wrapper: "min-h-[222px]",
                  }}
                >
                  <TableHeader>
                    <TableColumn key="name">TIPO</TableColumn>
                    <TableColumn key="role">DESCRIPCIÓN</TableColumn>
                    <TableColumn key="status">CANTIDAD</TableColumn>
                    <TableColumn key="status">ESTADO</TableColumn>
                    <TableColumn
                      key="actions"
                      className="flex items-center justify-center"
                    >
                      ACCIONES
                    </TableColumn>
                  </TableHeader>
                  <TableBody items={items}>
                    {(item) => (
                      <TableRow key={item.name}>
                        {(columnKey) => (
                          <TableCell>{renderCell(item, columnKey)}</TableCell>
                        )}
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </AccordionItem>
          </Accordion>
        </section>
      </div>
    </>
  );
};

export default LaboratorioDetalle;
