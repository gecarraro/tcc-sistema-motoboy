require("dotenv").config({ path: ".env.test" });

const request = require("supertest");
const app = require("../src/app");
const prisma = require("../prismaClient");

describe("Testes da API", () => {

  let token = "";

  beforeAll(async () => {
    await prisma.pedido.deleteMany({});
    await prisma.cliente.deleteMany({});
    await prisma.usuario.deleteMany({
        where: { email: "teste@teste.com" }
  });

  await request(app)
    .post("/user")
    .send({
      nome: "Teste",
      email: "teste@teste.com",
      senha: "123456",
      tipo: "admin"
    });
});

  test("API deve responder na raiz", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
  });

  test("Login deve funcionar", async () => {
    const res = await request(app)
      .post("/login")
      .send({
        email: "teste@teste.com",
        senha: "123456"
      });

    expect(res.statusCode).toBe(200);
    expect(res.body.token).toBeDefined();

    token = res.body.token;
  });

  test("Rota protegida sem token deve falhar", async () => {
    const res = await request(app).get("/clientes");
    expect(res.statusCode).toBe(401);
  });

  test("Criar cliente com token", async () => {
    const res = await request(app)
      .post("/clientes")
      .set("Authorization", `Bearer ${token}`)
      .send({
        nome: "Cliente Teste",
        telefone: "41999999999",
        endereco: "Rua Teste",
        bairro: "Centro"
      });

    expect(res.statusCode).toBe(200);
  });

});
