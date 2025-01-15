import { Request, Response } from 'express';
import { prisma } from '../../prisma';

export class ListProductsController {
  async handle(request: Request, reply: Response) {
    try {
      const products = await prisma.product.findMany();

      reply.json({ products });

    } catch (err) {
      reply.status(400).json(err);
    }
  }
}