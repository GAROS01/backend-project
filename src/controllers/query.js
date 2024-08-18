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
