const jwt = require("jsonwebtoken");

const SECRET = "tccmotoboy";

function gerarToken(usuario) {
  return jwt.sign(
    { id: usuario.id, email: usuario.email, tipo: usuario.tipo },
    SECRET,
    { expiresIn: "8h" }
  );
}

function verificarToken(req, res, next) {
  const auth = req.headers.authorization;

  if (!auth) return res.status(401).json({ erro: "Token não enviado" });

  const token = auth.split(" ")[1];

  try {
    const decoded = jwt.verify(token, SECRET);
    req.usuario = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ erro: "Token inválido" });
  }
}

module.exports = { gerarToken, verificarToken };