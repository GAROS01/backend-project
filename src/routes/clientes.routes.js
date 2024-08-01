import { Router } from "express";
import {
  getClients,
  getClient,
  createClient,
  updateClient,
  deleteClient,
} from "../controllers/clientes.controllers.js";

const router = Router();

router.get("/clientes", getClients);

router.get("/clientes/:id", getClient);

router.post("/clientes", createClient);

router.put("/clientes/:id", updateClient);

router.delete("/clientes/:id", deleteClient);

export default router;
