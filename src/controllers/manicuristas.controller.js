import { pool } from "../db.js";

export const getManicuristas = async (req, res) => {
  try {
    const rows = await pool.query("SELECT * FROM manicuristas");
    res.json(rows[0]);
  } catch (error) {
    res.status(500);
    console.log(error);
  }
};

export const getManicurista = async (req, res) => {
  try {
    const { id } = req.params;
    const rows = await pool.query(
      "SELECT * FROM manicuristas WHERE id_manicurista = ?",
      [id]
    );
    if (rows[0].length === 0) {
      return res.status(404).json({ message: "Manicurista no encontrado" });
    }
    res.json(rows[0]);
  } catch (error) {
    res.status(500);
    console.log(error);
  }
};

export const createManicurista = async (req, res) => {
  try {
    console.log(req.body);
    const { nombre, apellido, telefono, creado_por_administrativo } = req.body;
    const rows = await pool.query(
      "INSERT INTO manicuristas (nombre, apellido, telefono, creado_por_administrativo) VALUES (?,?,?,?)",
      [nombre, apellido, telefono, creado_por_administrativo]
    );
    res.json({
      id: rows.insertId,
      nombre,
      apellido,
      telefono,
      creado_por_administrativo,
    });
  } catch (error) {
    res.status(500);
    console.log(error);
  }
};

export const updateManicurista = async (req, res) => {
  try {
    console.log(req.body);
    const { nombre, apellido, telefono } = req.body;
    const { id } = req.params;
    const rows = await pool.query(
      "UPDATE manicuristas set nombre = ?, apellido = ?,  telefono = ? WHERE id_manicurista = ?",
      [nombre, apellido, telefono, id]
    );
    if (rows[0].affectedRows === 0) {
      return res.status(404).json({ message: "Manicurista no encontrado" });
    }
    res.json({ message: "Manicurista actualizado" });
  } catch (error) {
    res.status(500);
    console.log(error);
  }
};

export const deleteManicurista = async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM manicuristas WHERE id_manicurista = ?", [id]);
    res.json({ message: "Manicurista eliminado" });
  } catch (error) {
    res.status(500);
    console.log(error);
  } finally {
    res.end();
  }
};
