import { Request, Response } from 'express';
import { prisma } from '../infra/prisma';

export class GetProductUseCase {
  async execute({ id }: { id: string }) {
    const product = await prisma.product.findUnique({
      where: {
        id,
      },
    });

    return {
      product,
    }
  }
}