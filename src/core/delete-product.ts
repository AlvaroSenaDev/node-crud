import { prisma } from "../infra/prisma";

export class DeleteProductUseCase {
  async execute({ id }: { id: string }) {
    await prisma.product.delete({
      where: {
        id,
      },
    });
  }
}