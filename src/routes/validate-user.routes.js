import { Router } from "express";
import validateToken from "../supabase/auth.js";
import { pool } from "../db.js";

const router = Router();

router.post("/validate-user", validateToken, async (req, res) => {
  const user = req.user;
  console.log(user);

  // Extrae el correo y el nombre del objeto user
  const correo = user.email;
  const nombre = user.user_metadata.name;

  if (!correo || !nombre) {
    return res.status(400).json({ error: "Correo y nombre son requeridos" });
  }

  try {
    // Inserta los datos en la base de datos
    const rows = await pool.query(
      "INSERT INTO clientes (correo, nombre) VALUES (?,?)",
      [correo, nombre]
    );
    res.json({ correo, nombre });
  } catch (error) {
    console.error("Error al insertar en la base de datos:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

export default router;
