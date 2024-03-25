import express from "express";
import cors from "cors";

// import userRoutes from "./src/routes/users.js";
import productRoutes from "./src/routes/products.js";

const PORT = 3001;

const app = express();
app.use(cors());

// BODY PARSER
app.use(express.urlencoded({ extended: false, limit: "5mb" }));
app.use(express.json({ limit: "5mb" }));

// app.use("/api/v1", userRoutes);
app.use("/api/v2", productRoutes);

app.listen(PORT, () => console.log(`App running on http://localhost:${PORT}`));
