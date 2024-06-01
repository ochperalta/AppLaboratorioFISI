const columns = [
  { name: "NOMBRE", uid: "name", sortable: true },
  { name: "DESCRIPCIÓN", uid: "description", sortable: true },
  { name: "VERSION", uid: "version", sortable: true },
  { name: "OPENSOURCE", uid: "openSource", sortable: true },
  { name: "KEY", uid: "key"},
  { name: "EXPIRACIÓN", uid: "expiration", sortable: true },
  { name: "ESTADO", uid: "state", sortable: true },
  { name: "ACTIONS", uid: "actions" }
];

const statusOptions = [
  { name: "Activo", uid: "A" },
  { name: "Expirado", uid: "E" },
];

const statusColorMap = {
  A: "success",
  E: "warning",
};

const INITIAL_VISIBLE_COLUMNS = [
  "name",
  "description",
  "version",
  "openSource",
  "expiration",
  "state",
  "actions",
];

export { columns, statusOptions, statusColorMap, INITIAL_VISIBLE_COLUMNS };