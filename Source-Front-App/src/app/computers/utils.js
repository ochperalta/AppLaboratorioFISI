const columns = [
  { name: "CÓDIGO", uid: "code", sortable: true },
  { name: "CPU", uid: "cpu", sortable: true },
  { name: "RAM", uid: "ram", sortable: true },
  { name: "GRAPHICS", uid: "graphics", sortable: true },
  { name: "STORAGE", uid: "storage", sortable: true },
  { name: "OS", uid: "os", sortable: true },
  { name: "ESTADO", uid: "state", sortable: true },
  { name: "ACTIONS", uid: "actions" }
];

const statusOptions = [
  { name: "Activo", uid: "A" },
  { name: "Mantenimiento", uid: "M" },
];

const INITIAL_VISIBLE_COLUMNS = [
  "code",
  "cpu",
  "ram",
  "graphics",
  "storage",
  "os",
  "state",
  "actions",
];

const statusColorMap = {
  A: "success",
  M: "warning",
};

export { columns, statusOptions, INITIAL_VISIBLE_COLUMNS, statusColorMap };