export const formatCitas = (rows) => {
  return rows.map((row) => ({
    id_cita: row.id_cita,
    fecha: row.fecha,
    hora: row.hora,
    fecha_creacion: row.fecha_creacion,
    id_cliente: {
      id_cliente: row.id_cliente,
      correo: row.cliente_correo,
      nombre_completo: row.cliente_nombre_completo,
      telefono: row.cliente_telefono,
    },
    id_manicurista: {
      id_manicurista: row.id_manicurista,
      correo: row.manicurista_correo,
      nombre_completo: row.manicurista_nombre_completo,
      telefono: row.manicurista_telefono,
    },
  }));
};
