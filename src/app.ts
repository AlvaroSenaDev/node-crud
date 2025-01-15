import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
app.use(express.json());

const prisma = new PrismaClient();

app.get('/', (req, res) => {
  res.json({ message: 'hello, world' })
});

app.get('/api/v1/products', async (req, res) => {
  const products = await prisma.product.findMany();

  res.json({ products });
});

app.get('/api/v1/products/:id', async (req, res) => {
  const { id } = req.params;

  const product = await prisma.product.findUnique({
    where: {
      id,
    },
  });

  res.json({ product });
});

app.post('/api/v1/products', async (req, res) => {
  const { name, description, price } = req.body;

  await prisma.product.create({
    data: {
      name,
      description,
      priceInCents: price * 100,
    }
  });

  res.status(201).send();
});

app.put('/api/v1/products/:id', async (req, res) => {
  const { id } = req.params;
  const { name, description, price } = await req.body;

  await prisma.product.update({
    where: {
      id,
    },
    data: {
      name,
      description,
      priceInCents: price * 100,
    }
  });

  res.status(201).send();
});

app.delete('/api/v1/products/:id', async (req, res) => {
  const { id } = req.params;

  await prisma.product.delete({
    where: {
      id,
    },
  });

  res.status(204).send();
});

app.listen(8080, () => console.log('Server is running on http://localhost:8080'));