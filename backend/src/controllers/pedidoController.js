const service = require("../services/pedidoService");

async function criar(req, res) {
  try {
    const pedido = await service.criarPedido(req.body);
    res.json(pedido);

  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
}

async function listar(req, res) {
  const lista = await service.listarPedidos();
  res.json(lista);
}

module.exports = {
  criar,
  listar
};