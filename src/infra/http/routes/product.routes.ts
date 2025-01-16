import { Router } from "express";
import { CreateProductController } from "../controllers/create-product-controller";
import { DeleteProductController } from "../controllers/delete-product-controller";
import { GetProductController } from "../controllers/get-product-controller";
import { ListProductsController } from "../controllers/list-products-controller";
import { UpdateProductController } from "../controllers/update-product-controller";

export const productRoutes = Router();

const createProduct = new CreateProductController();
const getProduct = new GetProductController();
const listProducts = new ListProductsController();
const updateProduct = new UpdateProductController();
const deleteProduct = new DeleteProductController(); 

productRoutes.get('/', listProducts.handle);

productRoutes.get('/:id', getProduct.handle);

productRoutes.post('/', createProduct.handle);

productRoutes.put('/:id', updateProduct.handle);

productRoutes.delete('/:id', deleteProduct.handle);