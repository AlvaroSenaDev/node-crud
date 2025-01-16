import { Router } from "express";
import { productRoutes } from "./product.routes";

export const router = Router();
router.use('/api/v1/products', productRoutes);