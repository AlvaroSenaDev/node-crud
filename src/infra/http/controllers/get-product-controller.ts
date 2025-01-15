import { Request, Response } from 'express';
import { prisma } from '../../prisma';

export class GetProductController {
  async handle(request: Request, reply: Response) {
    try {
      const { id } = request.params;

      const product = await prisma.product.findUnique({
        where: {
          id,
        },
      });
    
      reply.json({ product });
    } catch (err) {
      reply.status(400).json(err);
    }
  }
}