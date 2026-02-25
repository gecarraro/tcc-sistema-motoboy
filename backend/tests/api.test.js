require("dotenv").config({ path: ".env.test" });

const request = require("supertest");
const app = require("../src/app");
const prisma = require("../prismaClient");

describe("Testes da API", () => {

  let token = "";
  let clienteId = 0;
  let funcionarioId = 0;

  beforeAll(async () => {

    // limpar banco teste
    await prisma.pedido.deleteMany({});
    await prisma.tabelaPreco.deleteMany({});
    await prisma.funcionario.deleteMany({});
    await prisma.cliente.deleteMany({});
    await prisma.usuario.deleteMany({
      where: { email: "teste@teste.com" }
    });

    // criar usuário
    await request(app)
      .post("/user")
      .send({
        nome: "Teste",
        email: "teste@teste.com",
        senha: "123456",
        tipo: "admin"
      });

    // login
    const login = await request(app)
      .post("/login")
      .send({
        email: "teste@teste.com",
        senha: "123456"
      });

    token = login.body.token;

    // criar cliente
    const cliente = await request(app)
      .post("/clientes")
      .set("Authorization", `Bearer ${token}`)
      .send({
        tipoPessoa: "PJ",
        cpfCnpj: "12345678000199",
        razaoSocial: "Empresa Teste",
        nomeFantasia: "Empresa Teste",
        telefone: "41999999999",
        cep: "82540010",
        rua: "Rua Teste",
        numero: "123",
        bairro: "Boa Vista",
        cidade: "Curitiba",
        estado: "PR"
      });

    clienteId = cliente.body.id;

    // criar funcionário
    const func = await request(app)
      .post("/funcionarios")
      .set("Authorization", `Bearer ${token}`)
      .send({
        nome: "Motoboy Teste",
        cpf: "12345678901",
        cnh: "12346578",
        telefone: "41999999999",
        cep: "82540020",
        rua: "Rua Teste",
        numero: "123",
        bairro: "Boa Vista",
        cidade: "Curitiba",
        estado: "PR"
      });

    funcionarioId = func.body.id;

    // criar preço bairro
    await request(app)
      .post("/precos")
      .set("Authorization", `Bearer ${token}`)
      .send({
        bairro: "Boa Vista",
        valor: 13
      });
  });

  test("API responde na raiz", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
  });

  test("Login funciona", async () => {
    expect(token).toBeDefined();
  });

  test("Rota protegida sem token falha", async () => {
    const res = await request(app).get("/clientes");
    expect(res.statusCode).toBe(401);
  });

  test("Criar pedido completo", async () => {
    const res = await request(app)
      .post("/pedidos")
      .set("Authorization", `Bearer ${token}`)
      .send({
        clienteId: clienteId,
        funcionarioId: funcionarioId,
        cepEntrega: "82540030",
        ruaEntrega: "Rua Entrega",
        numeroEntrega: "123",
        bairroEntrega: "Boa Vista",
        cidadeEntrega: "Curitiba"
      });

    expect(res.statusCode).toBe(200);
    expect(res.body.valor).toBeDefined();
  });

});