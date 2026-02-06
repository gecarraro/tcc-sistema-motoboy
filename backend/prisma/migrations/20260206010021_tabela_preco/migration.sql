-- CreateTable
CREATE TABLE "TabelaPreco" (
    "id" SERIAL NOT NULL,
    "bairro" TEXT NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "data_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TabelaPreco_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TabelaPreco_bairro_key" ON "TabelaPreco"("bairro");
