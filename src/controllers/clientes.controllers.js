import { pool } from "../db.js";
import { queryGetClients, queryGetClient } from "./query.js";
import { formatClients } from "./format.controllers.js";

export const getClients = async (req, res) => {
  try {
    const rows = await pool.query(queryGetClients);
    res.json(formatClients(rows[0]));
  } catch (error) {
    res.status(500);
    console.log(error);
  }
};

export const getClient = async (req, res) => {
  try {
    const { id } = req.params;
    const rows = await pool.query(queryGetClient, [id]);
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
    const { nombre, apellido, telefono, creador_administrativo } = req.body;
    const rows = await pool.query(
      "INSERT INTO clientes (nombre, apellido, telefono, creador_administrativo) VALUES (?,?,?,?)",
      [nombre, apellido, telefono, creador_administrativo]
    );
    res.json({ message: "Cliente creado", id: rows[0].insertId });
  } catch (error) {
    res.status(500);
    console.log(error);
  }
};

export const updateClient = async (req, res) => {
  try {
    const { nombre, apellido, telefono } = req.body;
    const { id } = req.params;
    const rows = await pool.query(
      "UPDATE clientes set nombre = ?, apellido = ?,  telefono = ? WHERE id_cliente = ?",
      [nombre, apellido, telefono, id]
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
