import express from 'express';
import { CreateProductController } from './infra/http/controllers/create-product-controller';
import { ListProductsController } from './infra/http/controllers/list-products-controller';
import { UpdateProductController } from './infra/http/controllers/update-product-controller';
import { DeleteProductController } from './infra/http/controllers/delete-product-controller';
import { GetProductController } from './infra/http/controllers/get-product-controller';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'hello, world' })
});

const createProduct = new CreateProductController();
const getProduct = new GetProductController();
const listProducts = new ListProductsController();
const updateProduct = new UpdateProductController();
const deleteProduct = new DeleteProductController(); 

app.get('/api/v1/products', listProducts.handle);

app.get('/api/v1/products/:id', getProduct.handle);

app.post('/api/v1/products', createProduct.handle);

app.put('/api/v1/products/:id', updateProduct.handle);

app.delete('/api/v1/products/:id', deleteProduct.handle);

app.listen(8080, () => console.log('Server is running on http://localhost:8080'));