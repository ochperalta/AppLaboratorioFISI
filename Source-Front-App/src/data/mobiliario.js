
const columns = [
  { name: "ID", uid: "uuid", sortable: true },
  { name: "TIPO", uid: "tipo", sortable: true },
  { name: "CANTIDAD", uid: "cantidad", sortable: true },
  { name: "DESCRIPCIÓN", uid: "descripcion", sortable: true },
  { name: "ESTADO", uid: "estado" },
  { name: "MARCA", uid: "marca" },
  { name: "MODELO", uid: "modelo", sortable: true },
  { name: "COLOR", uid: "color" },
  {name: "ACTIONS", uid: "actions"}
];

const statusOptions = [
  { name: "Activo", uid: "activo" },
  { name: "Mantenimiento", uid: "mantenimiento" },
];
const mobiliarios = [
  {
    "uuid": "e33a3a3b-6e18-496f-9f10-96e29cb8581c",
    "tipo": "Escritorio",
    "cantidad": 20,
    "descripcion": "Escritorio con superficie amplia para computadora y espacio para libros o material de estudio.",
    "estado": "activo",
    "marca": "Marca X",
    "modelo": "Modelo A123",
    "color": "Blanco"
  },
  {
    "uuid": "a96318ff-7cc3-40cf-b1b2-864f6f6c2b87",
    "tipo": "Silla",
    "cantidad": 30,
    "descripcion": "Silla ergonómica con soporte lumbar ajustable y ruedas para fácil movilidad.",
    "estado": "activo",
    "marca": "Marca Y",
    "modelo": "Modelo B456",
    "color": "Negro"
  },
  {
    "uuid": "8b6ed024-5d43-4a4d-ba80-9ad7884c9ad8",
    "tipo": "Computadora de Escritorio",
    "cantidad": 25,
    "descripcion": "Computadora de escritorio con monitor, teclado y mouse, con capacidad de ejecutar software de desarrollo.",
    "estado": "activo",
    "marca": "Marca Z",
    "modelo": "Modelo C789",
    "color": "Gris"
  },
  {
    "uuid": "5f71aef2-8fc8-4a14-9d39-6342404a1c94",
    "tipo": "Pizarra Blanca",
    "cantidad": 5,
    "descripcion": "Pizarra blanca montada en la pared para anotaciones y explicaciones durante clases.",
    "estado": "mantenimiento",
    "marca": "Marca W",
    "modelo": "Modelo D101",
    "color": "Blanco"
  },
  {
    "uuid": "849e573e-5c04-44a5-a7d1-cf26a1976482",
    "tipo": "Proyector",
    "cantidad": 1,
    "descripcion": "Proyector para presentaciones y demostraciones de software.",
    "estado": "activo",
    "marca": "Marca V",
    "modelo": "Modelo E202",
    "color": "Negro"
  },
  {
    "uuid": "c426da0b-c5c6-43b0-84a7-6db96edc20b2",
    "tipo": "Escritorio",
    "cantidad": 15,
    "descripcion": "Escritorio con superficie amplia para computadora y espacio para libros o material de estudio.",
    "estado": "mantenimiento",
    "marca": "Marca X",
    "modelo": "Modelo A123",
    "color": "Blanco"
  }
]

export {columns, mobiliarios, statusOptions};