import { Request, Response } from 'express';
import { prisma } from '../../prisma';

export class CreateProductController {
  async handle(request: Request, reply: Response) {
    try {
      const { name, description, price } = request.body;

      await prisma.product.create({
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