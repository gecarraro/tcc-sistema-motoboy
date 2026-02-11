/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Cliente` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Funcionario` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Pedido` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Usuario` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Cliente" DROP COLUMN "createdAt",
ADD COLUMN     "dataCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Funcionario" DROP COLUMN "createdAt",
ADD COLUMN     "dataCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Pedido" DROP COLUMN "createdAt",
ADD COLUMN     "dataCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Usuario" DROP COLUMN "createdAt",
ADD COLUMN     "dataCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
