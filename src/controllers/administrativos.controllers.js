import { pool } from "../db.js";

export const getAdministrativos = async (req, res) => {
  try {
    const rows = await pool.query("SELECT * FROM administrativos");
    res.json(rows[0]);
  } catch (error) {
    res.status(500);
    console.log(error);
  }
};

export const getAdministrativo = async (req, res) => {
  try {
    const { id } = req.params;
    const rows = await pool.query(
      "SELECT * FROM administrativos WHERE id_administrativo = ?",
      [id]
    );
    if (rows[0].length === 0) {
      return res.status(404).json({ message: "Administrador no encontrado" });
    }
    res.json(rows[0]);
  } catch (error) {
    res.status(500);
    console.log(error);
  }
};

export const createAdministrativo = async (req, res) => {
  try {
    console.log(req.body);
    const { nombre, apellido, telefono } = req.body;
    const rows = await pool.query(
      "INSERT INTO administrativos (nombre, apellido, telefono) VALUES (?,?,?)",
      [nombre, apellido, telefono]
    );
    res.json({
      id: rows.insertId,
      nombre,
      apellido,
      telefono,
    });
  } catch (error) {
    res.status(500);
    console.log(error);
  }
};

export const updateAdministrativo = async (req, res) => {
  try {
    console.log(req.body);
    const { nombre, apellido, telefono } = req.body;
    const { id } = req.params;
    const rows = await pool.query(
      "UPDATE administrativos set nombre = ?, apellido = ?,  telefono = ? WHERE id_administrativo = ?",
      [nombre, apellido, telefono, id]
    );
    if (rows[0].affectedRows === 0) {
      return res.status(404).json({ message: "Administrador no encontrado" });
    }
    res.json({ message: "Administrador actualizado" });
  } catch (error) {
    res.status(500);
    console.log(error);
  }
};

export const deleteAdministrativo = async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query(
      "DELETE FROM administrativos WHERE id_administrativo = ?",
      [id]
    );
    res.json({ message: "Administrador eliminado" });
  } catch (error) {
    res.status(500);
    console.log(error);
  } finally {
    res.end();
  }
};
