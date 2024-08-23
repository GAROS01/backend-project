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
