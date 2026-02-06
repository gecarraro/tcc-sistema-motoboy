const prisma = require("../../prismaClient");

async function criarPreco(data) {
  return prisma.tabelaPreco.create({
    data: {
      bairro: data.bairro,
      valor: data.valor
    }
  });
}

async function listarPrecos() {
  return prisma.tabelaPreco.findMany();
}

module.exports = { criarPreco, listarPrecos };