import { Router } from "express";
import validateToken from "../supabase/auth.js";

const router = Router();

router.post("/validate-user", validateToken, (req, res) => {
  const user = req.user;
  console.log(user);
  res.json({ correo: user.email, nombre: user.user_metadata.name });
});

export default router;
