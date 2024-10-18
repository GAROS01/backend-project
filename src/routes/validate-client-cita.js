import { Router } from "express";
import validateToken from "../supabase/auth.js";
import { pool } from "../db.js";

const router = Router();

router.post("/crear-cita", validateToken, async (req, res) => {
  const user = req.user;
  console.log(user);

  // Extrae el correo y el nombre del objeto user
  const correo = user.user_metadata.email;

  if (!correo) {
    return res.status(400).json({ error: "Correo no encontrado..." });
  }

  try {
    // Inserta los datos en la base de datos
    const rows = await pool.query("SELECT * FROM clientes WHERE correo = ?", [
      correo,
    ]);
    if (rows[0].length === 0) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }
    const id_cliente = rows[0][0].id_cliente;
    const { fecha, hora, id_manicurista } = req.body;
    const query = await pool.query(
      "INSERT INTO citas (fecha, hora, id_cliente, id_manicurista) VALUES (?,?,?,?)",
      [fecha, hora, id_cliente, id_manicurista]
    );
    res.json({ message: "Cita creada", id: query[0].insertId });
  } catch (error) {
    console.error("Error al insertar en la base de datos:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

export default router;
