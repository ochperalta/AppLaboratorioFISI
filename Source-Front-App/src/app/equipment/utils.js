const columns = [
  { name: "CÓDIGO", uid: "code", sortable: true },
  { name: "NOMBRE", uid: "name", sortable: true },
  { name: "DESCRIPCIÓN", uid: "description", sortable: true },
  { name: "ESTADO", uid: "state",sortable: true },
  { name: "ACTIONS", uid: "actions" }
];

const statusOptions = [
  { name: "Activo", uid: "A" },
  { name: "Mantenimiento", uid: "M" },
];

const statusColorMap = {
  A: "success",
  M: "warning",
};

const INITIAL_VISIBLE_COLUMNS = [
  "code",
  "name",
  "description",
  "state",
  "actions",
];

export { columns, statusOptions, statusColorMap, INITIAL_VISIBLE_COLUMNS };