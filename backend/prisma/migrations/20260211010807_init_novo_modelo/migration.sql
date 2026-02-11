/*
  Warnings:

  - You are about to drop the column `data_criacao` on the `Cliente` table. All the data in the column will be lost.
  - You are about to drop the column `endereco` on the `Cliente` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `Cliente` table. All the data in the column will be lost.
  - You are about to drop the column `bairro` on the `Pedido` table. All the data in the column will be lost.
  - You are about to drop the column `data_criacao` on the `Pedido` table. All the data in the column will be lost.
  - You are about to drop the column `data_criacao` on the `TabelaPreco` table. All the data in the column will be lost.
  - You are about to drop the column `data_criacao` on the `Usuario` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[cpfCnpj]` on the table `Cliente` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cep` to the `Cliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cidade` to the `Cliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cpfCnpj` to the `Cliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estado` to the `Cliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numero` to the `Cliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `razaoSocial` to the `Cliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rua` to the `Cliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipoPessoa` to the `Cliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bairroEntrega` to the `Pedido` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cepEntrega` to the `Pedido` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cidadeEntrega` to the `Pedido` table without a default value. This is not possible if the table is not empty.
  - Added the required column `funcionarioId` to the `Pedido` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numeroEntrega` to the `Pedido` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ruaEntrega` to the `Pedido` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cliente" DROP COLUMN "data_criacao",
DROP COLUMN "endereco",
DROP COLUMN "nome",
ADD COLUMN     "cep" TEXT NOT NULL,
ADD COLUMN     "cidade" TEXT NOT NULL,
ADD COLUMN     "cpfCnpj" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "estado" TEXT NOT NULL,
ADD COLUMN     "nomeFantasia" TEXT,
ADD COLUMN     "numero" TEXT NOT NULL,
ADD COLUMN     "razaoSocial" TEXT NOT NULL,
ADD COLUMN     "rua" TEXT NOT NULL,
ADD COLUMN     "tipoPessoa" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Pedido" DROP COLUMN "bairro",
DROP COLUMN "data_criacao",
ADD COLUMN     "bairroEntrega" TEXT NOT NULL,
ADD COLUMN     "cepEntrega" TEXT NOT NULL,
ADD COLUMN     "cidadeEntrega" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "funcionarioId" INTEGER NOT NULL,
ADD COLUMN     "numeroEntrega" TEXT NOT NULL,
ADD COLUMN     "ruaEntrega" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "TabelaPreco" DROP COLUMN "data_criacao";

-- AlterTable
ALTER TABLE "Usuario" DROP COLUMN "data_criacao",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "Funcionario" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "cnh" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "rua" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Funcionario_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Funcionario_cpf_key" ON "Funcionario"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Funcionario_cnh_key" ON "Funcionario"("cnh");

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_cpfCnpj_key" ON "Cliente"("cpfCnpj");

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_funcionarioId_fkey" FOREIGN KEY ("funcionarioId") REFERENCES "Funcionario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
