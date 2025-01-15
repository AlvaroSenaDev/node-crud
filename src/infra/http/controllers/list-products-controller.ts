import { Request, Response } from 'express';
import { prisma } from '../../prisma';
import { ListProductsUseCase } from '../../../core/list-products';

export class ListProductsController {
  async handle(request: Request, reply: Response) {
    try {

      const listProducts = new ListProductsUseCase();
      const products = await listProducts.execute();

      reply.json(products);

    } catch (err) {
      reply.status(400).json(err);
    }
  }
}