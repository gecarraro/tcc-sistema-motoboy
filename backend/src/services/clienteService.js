const prisma = require("../../prismaClient");

async function criarCliente(data) {
  return prisma.cliente.create({
    data: {
      nome: data.nome,
      telefone: data.telefone,
      endereco: data.endereco,
      bairro: data.bairro
    }
  });
}

async function listarClientes() {
  return prisma.cliente.findMany();
}

module.exports = { criarCliente, listarClientes };