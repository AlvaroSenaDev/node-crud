import { Request, Response } from 'express';
import { prisma } from '../../prisma';
import { UpdateProductUseCase } from '../../../core/update-product';

export class UpdateProductController {
  async handle(request: Request, reply: Response) {
    try {
      const { id } = request.params;
      const { name, description, price } = await request.body;
    
      const updatedProduct = new UpdateProductUseCase();
      await updatedProduct.execute({ id, name, description, price });
    
      reply.status(201).send();
    } catch (err) {
      reply.status(400).json(err);
    }
  }
}