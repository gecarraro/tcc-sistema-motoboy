const service = require("../services/funcionarioService");

async function criar(req, res) {
  try {
    const funcionario = await service.criarFuncionario(req.body);
    res.json(funcionario);
  } catch (err) {

    if (err.code === "P2002") {
      return res.status(400).json({ erro: "CPF ou CNH já cadastrado no sistema!" });
    }

    res.status(500).json({ erro: "Erro ao criar funcionário!" });
  }
}

async function listar(req, res) {
  const lista = await service.listarFuncionarios();
  res.json(lista);
}

module.exports = {
  criar,
  listar
};
