const service = require("../services/precoService");

async function criar(req, res) {
  try {
    const preco = await service.criarPreco(req.body);
    res.json(preco);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
}

async function listar(req, res) {
  const precos = await service.listarPrecos();
  res.json(precos);
}

module.exports = { criar, listar };