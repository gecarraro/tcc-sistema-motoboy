const prisma = require("../../prismaClient");

async function criarCliente(data) {
  return prisma.cliente.create({ data });
}

async function listarClientes() {
  return prisma.cliente.findMany({
    orderBy:{id:"desc"}
  });
}

module.exports = {
  criarCliente,
  listarClientes
};
