import { Router } from "express";
import {
  getAdministrativos,
  getAdministrativo,
  createAdministrativo,
  updateAdministrativo,
  deleteAdministrativo,
} from "../controllers/administrativos.controllers.js";

const router = Router();

router.get("/administrativos", getAdministrativos);

router.get("/administrativos/:id", getAdministrativo);

router.post("/administrativos", createAdministrativo);

router.put("/administrativos/:id", updateAdministrativo);

router.delete("/administrativos/:id", deleteAdministrativo);

export default router;
