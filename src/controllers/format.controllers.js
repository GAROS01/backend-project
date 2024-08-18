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
