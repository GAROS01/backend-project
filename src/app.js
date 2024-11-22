import express from "express";
import morgan from "morgan";
import cors from "cors";
import clientesRoutes from "./routes/clientes.routes.js";
import adminRoutes from "./routes/administrativos.routes.js";
import manicuristasRoutes from "./routes/manicuristas.routes.js";
import citasRoutes from "./routes/citas.routes.js";
import userValidation from "./routes/validate-user.routes.js";
import validateCita from "./routes/validate-client-cita.js";
import index from "./routes/index.routes.js";

const app = express();
app.use(morgan("tiny"));
app.use(cors());

app.use(express.json());
app.use("/api", clientesRoutes);
app.use("/api", adminRoutes);
app.use("/api", manicuristasRoutes);
app.use("/api", citasRoutes);
app.use("/api", userValidation);
app.use("/api", validateCita);
app.use(index);

app.use((req, res) => {
  res.status(404).json({
    error: "Not found",
  });
});

morgan(":method :url :status :res[content-length] - :response-time ms");

export default app;
