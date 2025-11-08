import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import deepseekRoutes from "./Deepseekroutes.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Register Routes BEFORE app.listen
app.use("/api", deepseekRoutes);
//p.use("/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
