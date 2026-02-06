const bcrypt = require("bcrypt");
const prisma = require("../../prismaClient");

async function criarUsuario(data) {
  const senhaHash = await bcrypt.hash(data.senha, 10);

  return prisma.usuario.create({
    data: {
      nome: data.nome,
      email: data.email,
      senha: senhaHash,
      tipo: data.tipo
    }
  });
}

async function login(email, senha) {
  const user = await prisma.usuario.findUnique({
    where: { email }
  });

  if (!user) throw new Error("Usuário não encontrado");

  const senhaOk = await bcrypt.compare(senha, user.senha);

  if (!senhaOk) throw new Error("Senha inválida");

  return user;
}

module.exports = { criarUsuario, login };
