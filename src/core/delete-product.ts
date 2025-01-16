import { prisma } from "../infra/prisma";
import { ResourceNotFoundError } from "./errors/resource-not-found-error";

export class DeleteProductUseCase {
  async execute({ id }: { id: string }) {
    const product = await prisma.product.findUnique({
      where: {
        id,
      },
    });

    if (!product) {
      throw new ResourceNotFoundError('Product not found.');
    }

    await prisma.product.delete({
      where: {
        id,
      },
    });
  }
}