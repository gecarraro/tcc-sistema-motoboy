const prisma = require("../../prismaClient");

async function criarFuncionario(data) {
  return prisma.funcionario.create({ data });
}

async function listarFuncionarios() {
  return prisma.funcionario.findMany({
    orderBy: { id: "desc" }
  });
}

module.exports = {
  criarFuncionario,
  listarFuncionarios
};