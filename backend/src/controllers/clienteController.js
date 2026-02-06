const service = require("../services/clienteService");

async function criar(req, res) {
  try {
    const cliente = await service.criarCliente(req.body);
    res.json(cliente);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
}

async function listar(req, res) {
  const clientes = await service.listarClientes();
  res.json(clientes);
}

module.exports = { criar, listar };