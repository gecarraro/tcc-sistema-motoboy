const jwt = require("jsonwebtoken");

const SECRET = "tccmotoboy";

function gerarToken(user) {
  return jwt.sign(
    { id: user.id, email: user.email, tipo: user.tipo },
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
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ erro: "Token inválido" });
  }
}

module.exports = { gerarToken, verificarToken };