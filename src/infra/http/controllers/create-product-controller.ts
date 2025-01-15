import { Request, Response } from 'express';
import { CreateProductUseCase } from '../../../core/create-product';

export class CreateProductController {
  async handle(request: Request, reply: Response) {
    try {
      const { name, description, price } = request.body;

      const createProduct = new CreateProductUseCase();
      
      await createProduct.execute({ name, description, price });

    
      reply.status(201).send();
    } catch (err) {
      reply.status(400).json(err);
    }
  }
}