const service = require("../services/pedidoService");

async function criar(req, res) {
  try {
    const { clienteId } = req.body;
    const pedido = await service.criarPedido(clienteId);
    res.json(pedido);
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
}

async function listar(req, res) {
  const pedidos = await service.listarPedidos();
  res.json(pedidos);
}

module.exports = { criar, listar };