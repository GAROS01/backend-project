import express from "express";
import PORT from "./config.js";
import indexRoutes from "./routes/clientes.routes.js";

const app = express();

app.use(express.json());
app.use(indexRoutes);

app.listen(PORT);
console.log("Server on port", PORT);
