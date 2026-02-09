const express = require("express");
const cors = require("cors");
const app = express();

const authRoutes = require("./routes/authRoutes");
const clienteRoutes = require("./routes/clienteRoutes");
const precoRoutes = require("./routes/precoRoutes");
const pedidoRoutes = require("./routes/pedidoRoutes");
const { verificarToken } = require("./middlewares/authMiddleware");

app.use(cors());
app.use(express.json());
app.use(authRoutes);

app.use("/clientes", verificarToken, clienteRoutes);
app.use("/precos", verificarToken, precoRoutes);
app.use("/pedidos", verificarToken, pedidoRoutes);

app.get("/", (req, res) => {
  res.send("API rodando");
});

module.exports = app;