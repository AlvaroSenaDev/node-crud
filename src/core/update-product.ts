import { prisma } from '../infra/prisma';
import { ResourceNotFoundError } from './errors/resource-not-found-error';

export class UpdateProductUseCase {
  async execute({ id, name, description, price }: { id: string, name: string, description: string, price: number }) {
    const product = await prisma.product.findUnique({
      where: {
        id,
      },
    });

    if (!product) {
      throw new ResourceNotFoundError('Product not found.');
    }
    
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
  }
}