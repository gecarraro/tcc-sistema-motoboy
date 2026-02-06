const authService = require("../services/authService");
const { gerarToken } = require("../middlewares/authMiddleware");

async function registrar(req, res) {
  try {
    const user = await authService.criarUsuario(req.body);
    res.json(user);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
}

async function login(req, res) {
  try {
    const { email, senha } = req.body;
    const user = await authService.login(email, senha);
    const token = gerarToken(user);

    res.json({ token });
  } catch (err) {
    res.status(401).json({ erro: err.message });
  }
}

module.exports = { registrar, login };