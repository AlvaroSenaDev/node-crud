import { prisma } from '../infra/prisma';

export class CreateProductUseCase {
  async execute({ name, description, price }: { name: string, description: string, price: number }) {

    await prisma.product.create({
      data: {
        name,
        description,
        priceInCents: price * 100,
      }
    });
  }
}