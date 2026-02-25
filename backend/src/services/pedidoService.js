const prisma = require("../../prismaClient");

async function criarPedido(data) {

  const clienteId = Number(data.clienteId);
  const funcionarioId = Number(data.funcionarioId);

  if (!clienteId) {
    throw new Error("clienteId não informado");
  }

  if (!funcionarioId) {
    throw new Error("funcionarioId não informado");
  }

  // validar cliente
  const cliente = await prisma.cliente.findUnique({
    where: {
      id: clienteId
    }
  });

  if (!cliente) {
    throw new Error("Cliente não encontrado");
  }

  // validar funcionário
  const funcionario = await prisma.funcionario.findUnique({
    where: {
      id: funcionarioId
    }
  });

  if (!funcionario) {
    throw new Error("Funcionário não encontrado");
  }

  // buscar preço pelo bairro
  const preco = await prisma.tabelaPreco.findFirst({
    where: {
      bairro: data.bairroEntrega
    }
  });

  if (!preco) {
    throw new Error("Preço não cadastrado para este bairro");
  }

  return prisma.pedido.create({
    data: {
      clienteId: clienteId,
      funcionarioId: funcionarioId,
      cepEntrega: data.cepEntrega,
      ruaEntrega: data.ruaEntrega,
      numeroEntrega: data.numeroEntrega,
      bairroEntrega: data.bairroEntrega,
      cidadeEntrega: data.cidadeEntrega,
      valor: preco.valor,
      status: "pendente"
    },
    include: {
      cliente: true,
      funcionario: true
    }
  });
}

async function listarPedidos() {
  return prisma.pedido.findMany({
    include: {
      cliente: true,
      funcionario: true
    },
    orderBy: { id: "desc" }
  });
}

module.exports = {
  criarPedido,
  listarPedidos
};