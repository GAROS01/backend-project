import { pool } from "../db.js";

export const getClients = async (req, res) => {
  try {
    const rows = await pool.query("SELECT * FROM clientes");
    console.log(rows[0]);
    res.json(rows[0]);
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
    res.json(rows[0]);
  } catch (error) {
    res.status(500);
    console.log(error);
  }
};

export const createClient = async (req, res) => {
  try {
    console.log(req.body);
    const { nombre, apellido, telefono, creador_administrativo } = req.body;
    console.log(nombre, apellido, telefono, creador_administrativo);
    const rows = await pool.query(
      "INSERT INTO clientes (nombre, apellido, telefono, creador_administrativo) VALUES (?,?,?,?)",
      [nombre, apellido, telefono, creador_administrativo]
    );
    res.json({
      id: rows.insertId,
      nombre,
      apellido,
      telefono,
      creador_administrativo,
    });
  } catch (error) {
    res.status(500);
    console.log(error);
  }
};

export const updateClient = async (req, res) => {
  try {
    console.log(req.body);
    const { nombre, apellido, telefono } = req.body;
    const { id } = req.params;
    const rows = await pool.query(
      "UPDATE clientes set nombre = ?, apellido = ?,  telefono = ? WHERE id_cliente = ?",
      [nombre, apellido, telefono, id]
    );
    res.json({ id, nombre, apellido, telefono });
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
