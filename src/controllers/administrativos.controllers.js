import { pool } from "../db.js";

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
    const { correo, nombre_completo, telefono, password } = req.body;
    const rows = await pool.query(
      "INSERT INTO administrativos (correo, nombre_completo, telefono, password) VALUES (?,?,?,?)",
      [correo, nombre_completo, telefono, password]
    );
    res.status(201).json({ id: rows[0].insertId, nombre_completo, telefono });
  } catch (error) {
    res.status(500);
    console.log(error);
  }
};

export const updateAdministrativo = async (req, res) => {
  try {
    console.log(req.body);
    const { nombre_completo, telefono, contraseña } = req.body;
    const { id } = req.params;
    const rows = await pool.query(
      "UPDATE administrativos set nombre_completo = ?,  telefono = ?, contraseña = ? WHERE id_administrativo = ?",
      [nombre_completo, telefono, contraseña, id]
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

export const loginAdministrativo = async (req, res) => {
  try {
    const { correo, contrasea } = req.body;
    const rows = await pool.query(
      "SELECT * FROM administrativos WHERE correo = ?",
      [correo]
    );
    if (rows[0].length === 0) {
      return res.status(404).json({ message: "Administrativo no encontrado" });
    }

    const administrativo = rows[0][0];
    if (administrativo.contrasea !== contrasea) {
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }

    res.json({ message: "Inicio de sesión exitoso" });
  } catch (error) {
    res.status(500);
    console.log(error);
  }
};
