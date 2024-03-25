import express from "express";
import { createProduct } from "../controllers/products.js";

const routes = express.Router();

routes.post("/products/new", createProduct);

export default routes;
