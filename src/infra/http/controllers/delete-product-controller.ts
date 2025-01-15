import { Request, Response } from 'express';
import { prisma } from '../../prisma';

export class DeleteProductController {
  async handle(request: Request, reply: Response) {
    try {
      const { id } = request.params;

      await prisma.product.delete({
        where: {
          id,
        },
      });
    
      reply.status(204).send();
    } catch (err) {
      reply.status(400).json(err);
    }
  }
}