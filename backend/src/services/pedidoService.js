const prisma = require("../../prismaClient");

async function criarPedido(clienteId) {
  // buscar cliente
  const cliente = await prisma.cliente.findUnique({
    where: { id: clienteId }
  });

  if (!cliente) {
    throw new Error("Cliente não encontrado");
  }

  // buscar preço do bairro
  const preco = await prisma.tabelaPreco.findFirst({
    where: { bairro: cliente.bairro }
  });

  if (!preco) {
    throw new Error("Preço não cadastrado para o bairro");
  }

  // criar pedido
  return prisma.pedido.create({
    data: {
      clienteId: cliente.id,
      bairro: cliente.bairro,
      valor: preco.valor
    }
  });
}

async function listarPedidos() {
  return prisma.pedido.findMany({
    include: { cliente: true }
  });
}

module.exports = { criarPedido, listarPedidos };