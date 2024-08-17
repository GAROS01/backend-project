import express from "express";
import PORT from "./config.js";
import indexRoutes from "./routes/clientes.routes.js";
import adminRoutes from "./routes/administrativos.routes.js";

const app = express();

app.use(express.json());
app.use("/api", indexRoutes);
app.use("/api", adminRoutes);

app.listen(PORT);
console.log("Server on port", PORT);
