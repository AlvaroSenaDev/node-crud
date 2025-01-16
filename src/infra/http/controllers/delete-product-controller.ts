import { Request, Response } from 'express';
import { prisma } from '../../prisma';
import { DeleteProductUseCase } from '../../../core/delete-product';

export class DeleteProductController {
  async handle(request: Request, reply: Response) {
    try {
      const { id } = request.params;

      const deleteProduct = new DeleteProductUseCase();
      await deleteProduct.execute({ id });
    
      reply.status(204).send();
    } catch (err) {
      reply.status(400).json(err);
    }
  }
}