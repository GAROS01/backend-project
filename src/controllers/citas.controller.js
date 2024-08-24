import { pool } from "../db.js";

export const getCitas = async (req, res) => {
  try {
    const rows = await pool.query("SELECT * FROM citas");
    res.json(rows[0]);
  } catch (error) {
    res.status(500);
    console.log(error);
  }
};

export const getCita = async (req, res) => {
  try {
    const { id } = req.params;
    const rows = await pool.query("SELECT * FROM citas WHERE id_cita = ?", [
      id,
    ]);
    if (rows[0].length === 0) {
      return res.status(404).json({ message: "Cita no encontrada" });
    }
    res.json(rows[0][0]);
  } catch (error) {
    res.status(500);
    console.log(error);
  }
};

export const createCita = async (req, res) => {
  try {
    const { fecha, hora, id_cliente, id_manicurista } = req.body;
    const rows = await pool.query(
      "INSERT INTO citas (fecha, hora, id_cliente, id_manicurista) VALUES (?,?,?,?)",
      [fecha, hora, id_cliente, id_manicurista]
    );
    res.json({ message: "Cita creada", id: rows[0].insertId });
  } catch (error) {
    res.status(500);
    console.log(error);
  }
};

export const updateCita = async (req, res) => {
  try {
    const { fecha, hora, id_cliente, id_manicurista } = req.body;
    const { id } = req.params;
    const rows = await pool.query(
      "UPDATE citas set fecha = ?, hora = ?, id_cliente = ?, id_manicurista = ? WHERE id_cita = ?",
      [fecha, hora, id_cliente, id_manicurista, id]
    );
    if (rows[0].affectedRows === 0) {
      return res.status(404).json({ message: "Cita no encontrada" });
    }
    res.json({ message: "Cita actualizada" });
  } catch (error) {
    res.status(500);
    console.log(error);
  }
};

export const deleteCita = async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM citas WHERE id_cita = ?", [id]);
    res.json({ message: "Cita eliminada" });
  } catch (error) {
    res.status(500);
    console.log(error);
  }
};
