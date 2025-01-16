import { Request, Response } from 'express';
import { GetProductUseCase } from '../../../core/get-product';

export class GetProductController {
  async handle(request: Request, reply: Response) {
    try {
      const { id } = request.params;

      const getProduct = new GetProductUseCase();
      const product = await getProduct.execute({ id });

    
      reply.json(product);
    } catch (err) {
      console.log(err);
      reply.status(400).json(err);
    }
  }
}