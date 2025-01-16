import { prisma } from '../infra/prisma';
import { ResourceNotFoundError } from './errors/resource-not-found-error';

export class GetProductUseCase {
  async execute({ id }: { id: string }) {
    const product = await prisma.product.findUnique({
      where: {
        id,
      },
    });

    if (!product) {
      throw new ResourceNotFoundError('Product not found');
    }

    return {
      product,
    }
  }
}