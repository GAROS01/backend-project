import { pool } from "../db.js";

export const getClients = async (req, res) => {
  try {
    const rows = await pool.query("SELECT * FROM clientes");
    res.json(formatClients(rows[0]));
  } catch (error) {
    res.status(500);
    console.log(error);
  }
};

export const getClient = async (req, res) => {
  try {
    const { id } = req.params;
    const rows = await pool.query(
      "SELECT * FROM clientes WHERE id_cliente = ?",
      [id]
    );
    if (rows[0].length === 0) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }
    res.json(formatClients(rows[0])[0]);
  } catch (error) {
    res.status(500);
    console.log(error);
  }
};

export const createClient = async (req, res) => {
  try {
    const { correo, nombre_completo, telefono } = req.body;
    const rows = await pool.query(
      "INSERT INTO clientes (correo, nombre_completo, telefono) VALUES (?,?,?)",
      [correo, nombre_completo, telefono]
    );
    res.status(201).json({ message: "Cliente creado", id: rows[0].insertId });
  } catch (error) {
    res.status(500);
    console.log(error);
  }
};

export const updateClient = async (req, res) => {
  try {
    const { nombre_completo, telefono } = req.body;
    const { id } = req.params;
    const rows = await pool.query(
      "UPDATE clientes set nombre_completo = ?,  telefono = ? WHERE id_cliente = ?",
      [nombre_completo, telefono, id]
    );
    if (rows[0].affectedRows === 0) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }
    res.json({ message: "Cliente actualizado" });
  } catch (error) {
    res.status(500);
    console.log(error);
  }
};

export const deleteClient = async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM clientes WHERE id_cliente = ?", [id]);
    res.json({ message: "Cliente eliminado" });
  } catch (error) {
    res.status(500);
    console.log(error);
  }
};
