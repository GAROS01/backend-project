import { Router } from "express";
import {
  getCitas,
  getCita,
  createCita,
  updateCita,
  deleteCita,
} from "../controllers/citas.controller.js";

const router = Router();

router.get("/citas", getCitas);

router.get("/citas/:id", getCita);

router.post("/citas", createCita);

router.put("/citas/:id", updateCita);

router.delete("/citas/:id", deleteCita);

export default router;
