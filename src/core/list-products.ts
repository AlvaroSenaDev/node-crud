import { prisma } from "../infra/prisma";

export class ListProductsUseCase {
  async execute() {
    const products = await prisma.product.findMany();

    return {
      products,
    }
  }
}