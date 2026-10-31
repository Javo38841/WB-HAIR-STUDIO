// Todo el contenido editable del sitio vive aquí.
// `null` = dato pendiente: la página lo muestra marcado como "por confirmar".

const telefono = '56942502267';
const direccion = 'Av. Ramón Pérez Opazo 3070';
const apertura = '10:00';
const cierre = '20:00';
const mensaje = 'Hola, quiero reservar una hora en WB Hair Studio';

export const sitio = {
  nombre: 'WB Hair Studio',
  descripcion:
    'Barbería en Alto Hospicio: cortes degradados y clásicos, barba, cejas y diseños. Todos los días de 10:00 a 20:00. Reserva por WhatsApp.',
  direccion,
  piso: '2do piso',
  ciudad: 'Alto Hospicio',
  region: 'Tarapacá',
  telefono: `+${telefono}`,
  telefonoVisible: '+56 9 4250 2267',
  instagram: 'mundobrillante.hairstudio',
  urlInstagram: 'https://www.instagram.com/mundobrillante.hairstudio/',
  urlWhatsapp: `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`,
  urlMapa: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${direccion}, Alto Hospicio, Chile`)}`,
  apertura,
  cierre,
  horario: `Todos los días, de ${apertura} a ${cierre} hrs`,
  credito: {
    autor: 'Javier Choque',
    url: 'https://biblioteca.gitflow.cl/',
  },
  dueno: {
    nombre: 'Braulio',
    cargo: 'Dueño',
  },
};

export const servicios: { nombre: string; detalle: string; precio: string | null }[] = [
  { nombre: 'Corte degradado', detalle: 'Transiciones limpias', precio: '$10.000' },
  { nombre: 'Corte clásico', detalle: 'Limpio y atemporal', precio: '$8.000' },
  { nombre: 'Cejas', detalle: 'Definición y limpieza', precio: '$3.000' },
  { nombre: 'Barba', detalle: 'Forma y perfilado', precio: '$5.000' },
  { nombre: 'Lavado de pelo', detalle: 'Para cerrar el servicio', precio: '$3.000' },
  { nombre: 'Diseños', detalle: 'Líneas a navaja', precio: null },
];

export const navegacion = [
  { texto: 'Estudio', href: '#estudio' },
  { texto: 'Servicios', href: '#servicios' },
  { texto: 'Trabajos', href: '#trabajos' },
  { texto: 'Ubicación', href: '#ubicacion' },
];
