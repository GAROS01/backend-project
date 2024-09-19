import express from "express";
import morgan from "morgan";
import cors from "cors";
import PORT from "./config.js";
import clientesRoutes from "./routes/clientes.routes.js";
import adminRoutes from "./routes/administrativos.routes.js";
import manicuristasRoutes from "./routes/manicuristas.routes.js";
import citasRoutes from "./routes/citas.routes.js";
import userValidation from "./routes/validate-user.routes.js";

const app = express();
app.use(morgan("tiny"));
app.use(cors());

app.use(express.json());
app.use("/api", clientesRoutes);
app.use("/api", adminRoutes);
app.use("/api", manicuristasRoutes);
app.use("/api", citasRoutes);
app.use("/api", userValidation);

morgan(":method :url :status :res[content-length] - :response-time ms");

app.listen(PORT);
console.log("Server on port", PORT);
