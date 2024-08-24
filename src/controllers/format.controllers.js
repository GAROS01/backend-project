export const formatClients = (rows) => {
  return rows.map((row) => ({
    id: row.id_cliente,
    nombre: row.cliente_nombre,
    apellido: row.cliente_apellido,
    telefono: row.cliente_telefono,
    fecha_registro: row.fecha_registro,
    creador_administrativo: {
      id: row.admin_id,
      nombre: row.admin_nombre,
      apellido: row.admin_apellido,
      telefono: row.admin_telefono,
    },
  }));
};

export const formatManicuristas = (rows) => {
  return rows.map((row) => ({
    id_manicurista: row.id_manicurista,
    nombre: row.manicurista_nombre,
    apellido: row.manicurista_apellido,
    telefono: row.manicurista_telefono,
    creado_por_administrativo: {
      id_administrativo: row.id_administrativo,
      nombre: row.admin_nombre,
      apellido: row.admin_apellido,
      telefono: row.admin_telefono,
    },
  }));
};

export const formatCitas = (rows) => {
  return rows.map((row) => ({
    id_cita: row.id_cita,
    fecha: row.fecha,
    hora: row.hora,
    fecha_creacion: row.fecha_creacion,
    id_cliente: {
      id_cliente: row.id_cliente,
      nombre: row.cliente_nombre,
      apellido: row.cliente_apellido,
      telefono: row.cliente_telefono,
    },
    id_manicurista: {
      id_manicurista: row.id_manicurista,
      nombre: row.manicurista_nombre,
      apellido: row.manicurista_apellido,
      telefono: row.manicurista_telefono,
    },
    gestiona_administrativo: {
      id_administrativo: row.id_administrativo,
      nombre: row.admin_nombre,
      apellido: row.admin_apellido,
      telefono: row.admin_telefono,
    },
  }));
};
