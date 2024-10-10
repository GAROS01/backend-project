import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

// Cargar las variables de entorno
dotenv.config();

// Inicializar Supabase
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

// Middleware para validar el token JWT de Supabase
export default async function validateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Token not provided" });
  }

  try {
    // Verificar y decodificar el token con la clave pública de Supabase
    const { data, error } = await supabase.auth.getUser(token);

    if (error) {
      console.error("Error validating token:", error);
      return res.status(401).json({ error: "Invalid token" });
    }

    // Adjuntar la información del usuario a la solicitud
    req.user = data.user;
    next();
  } catch (error) {
    console.error("Error validating token:", error);
    return res.status(500).json({ error: "Error validating token" });
  }
}
