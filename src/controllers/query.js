export const queryGetCitas = `
      SELECT 
        c.id_cita, 
        c.fecha, 
        c.hora, 
        c.fecha_creacion, 
        cl.id_cliente, 
        cl.correo AS cliente_correo,
        cl.nombre_completo AS cliente_nombre_completo, 
        cl.telefono AS cliente_telefono, 
        m.id_manicurista, 
        m.correo AS manicurista_correo,
        m.nombre_completo AS manicurista_nombre_completo, 
        m.telefono AS manicurista_telefono
      FROM citas c
      JOIN clientes cl ON c.id_cliente = cl.id_cliente
      JOIN manicuristas m ON c.id_manicurista = m.id_manicurista;
    `;

export const queryGetCita = `
      SELECT 
        c.id_cita, 
        c.fecha, 
        c.hora, 
        c.fecha_creacion, 
        cl.id_cliente, 
        cl.correo AS cliente_correo,
        cl.nombre_completo AS cliente_nombre_completo, 
        cl.telefono AS cliente_telefono, 
        m.id_manicurista, 
        m.correo AS manicurista_correo,
        m.nombre_completo AS manicurista_nombre_completo, 
        m.telefono AS manicurista_telefono
      FROM citas c
      JOIN clientes cl ON c.id_cliente = cl.id_cliente
      JOIN manicuristas m ON c.id_manicurista = m.id_manicurista
      WHERE c.id_cita = ?;
    `;
