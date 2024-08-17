import express from "express";
import PORT from "./config.js";
import clientesRoutes from "./routes/clientes.routes.js";
import adminRoutes from "./routes/administrativos.routes.js";
import manicuristasRoutes from "./routes/manicuristas.routes.js";

const app = express();

app.use(express.json());
app.use("/api", clientesRoutes);
app.use("/api", adminRoutes);
app.use("/api", manicuristasRoutes);

app.listen(PORT);
console.log("Server on port", PORT);
