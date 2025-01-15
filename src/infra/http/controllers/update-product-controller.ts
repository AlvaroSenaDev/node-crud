import { Request, Response } from 'express';
import { prisma } from '../../prisma';

export class UpdateProductController {
  async handle(request: Request, reply: Response) {
    try {
      const { id } = request.params;
      const { name, description, price } = await request.body;
    
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
    
      reply.status(201).send();
    } catch (err) {
      reply.status(400).json(err);
    }
  }
}