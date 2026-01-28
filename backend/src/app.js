import express from "express";
import cors from "cors";

import factionRoutes from "./routes/faction.routes.js";
import mobileSuitRoutes from "./routes/mobileSuit.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/factions", factionRoutes);
app.use("/mobile-suits", mobileSuitRoutes);

export default app;
