import { Router } from "express";
import {
  getManicuristas,
  getManicurista,
  createManicurista,
  updateManicurista,
  deleteManicurista,
} from "../controllers/manicuristas.controller.js";

const router = Router();

router.get("/manicuristas", getManicuristas);
router.get("/manicuristas/:id", getManicurista);
router.post("/manicuristas", createManicurista);
router.put("/manicuristas/:id", updateManicurista);
router.delete("/manicuristas/:id", deleteManicurista);

export default router;
