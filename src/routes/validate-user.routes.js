import { Router } from "express";
import validateToken from "../supabase/auth.js";

const router = Router();

router.post("/validate-user", validateToken, (req, res) => {
  const user = req.user;
  console.log(user);
  res.json({ email: user.email, id: user.id });
});

export default router;
