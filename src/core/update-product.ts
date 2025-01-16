import { prisma } from '../infra/prisma';

export class UpdateProductUseCase {
  async execute({ id, name, description, price }: { id: string, name: string, description: string, price: number }) {
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