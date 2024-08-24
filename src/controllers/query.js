export const queryGetClients = `SELECT 
        c.id_cliente, 
        c.nombre AS cliente_nombre, 
        c.apellido AS cliente_apellido, 
        c.telefono AS cliente_telefono, 
        c.fecha_registro, 
        a.id_administrativo AS admin_id, 
        a.nombre AS admin_nombre, 
        a.apellido AS admin_apellido, 
        a.telefono AS admin_telefono
    FROM clientes c
    JOIN administrativos a ON c.creador_administrativo = a.id_administrativo;
`;

export const queryGetClient = `SELECT 
        c.id_cliente, 
        c.nombre AS cliente_nombre, 
        c.apellido AS cliente_apellido, 
        c.telefono AS cliente_telefono, 
        c.fecha_registro, 
        a.id_administrativo AS admin_id, 
        a.nombre AS admin_nombre, 
        a.apellido AS admin_apellido, 
        a.telefono AS admin_telefono
      FROM clientes c
      JOIN administrativos a ON c.creador_administrativo = a.id_administrativo
      WHERE c.id_cliente = ?`;

export const queryGetManicuristas = `
      SELECT 
        m.id_manicurista, 
        m.nombre AS manicurista_nombre, 
        m.apellido AS manicurista_apellido, 
        m.telefono AS manicurista_telefono, 
        a.id_administrativo, 
        a.nombre AS admin_nombre, 
        a.apellido AS admin_apellido, 
        a.telefono AS admin_telefono
      FROM manicuristas m
      JOIN administrativos a ON m.creado_por_administrativo = a.id_administrativo;
    `;

export const queryGetManicurista = `
      SELECT 
        m.id_manicurista, 
        m.nombre AS manicurista_nombre, 
        m.apellido AS manicurista_apellido, 
        m.telefono AS manicurista_telefono, 
        a.id_administrativo, 
        a.nombre AS admin_nombre, 
        a.apellido AS admin_apellido, 
        a.telefono AS admin_telefono
      FROM manicuristas m
      JOIN administrativos a ON m.creado_por_administrativo = a.id_administrativo
      WHERE m.id_manicurista = ?;
    `;

export const queryGetCitas = `
      SELECT 
        c.id_cita, 
        c.fecha, 
        c.hora, 
        c.fecha_creacion, 
        cl.id_cliente, 
        cl.nombre AS cliente_nombre, 
        cl.apellido AS cliente_apellido, 
        cl.telefono AS cliente_telefono, 
        m.id_manicurista, 
        m.nombre AS manicurista_nombre, 
        m.apellido AS manicurista_apellido, 
        m.telefono AS manicurista_telefono, 
        a.id_administrativo, 
        a.nombre AS admin_nombre, 
        a.apellido AS admin_apellido, 
        a.telefono AS admin_telefono
      FROM citas c
      JOIN clientes cl ON c.id_cliente = cl.id_cliente
      JOIN manicuristas m ON c.id_manicurista = m.id_manicurista
      JOIN administrativos a ON c.gestiona_administrativo = a.id_administrativo;
    `;

export const queryGetCita = `
      SELECT 
        c.id_cita, 
        c.fecha, 
        c.hora, 
        c.fecha_creacion, 
        cl.id_cliente, 
        cl.nombre AS cliente_nombre, 
        cl.apellido AS cliente_apellido, 
        cl.telefono AS cliente_telefono, 
        m.id_manicurista, 
        m.nombre AS manicurista_nombre, 
        m.apellido AS manicurista_apellido, 
        m.telefono AS manicurista_telefono, 
        a.id_administrativo, 
        a.nombre AS admin_nombre, 
        a.apellido AS admin_apellido, 
        a.telefono AS admin_telefono
      FROM citas c
      JOIN clientes cl ON c.id_cliente = cl.id_cliente
      JOIN manicuristas m ON c.id_manicurista = m.id_manicurista
      JOIN administrativos a ON c.gestiona_administrativo = a.id_administrativo
      WHERE c.id_cita = ?;
    `;
