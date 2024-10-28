import { Router } from "express";
import {
  getAdministrativo,
  createAdministrativo,
  updateAdministrativo,
  deleteAdministrativo,
  loginAdministrativo,
} from "../controllers/administrativos.controllers.js";

const router = Router();

router.get("/administrativos/:id", getAdministrativo);

router.post("/administrativos", createAdministrativo);

router.post("/administrativos/login", loginAdministrativo);

router.put("/administrativos/:id", updateAdministrativo);

router.delete("/administrativos/:id", deleteAdministrativo);

export default router;
