const express = require("express");
const app = express();

const authRoutes = require("./routes/authRoutes");
const clienteRoutes = require("./routes/clienteRoutes");
const precoRoutes = require("./routes/precoRoutes");
const pedidoRoutes = require("./routes/pedidoRoutes");

app.use(express.json());

app.use(authRoutes);
app.use(clienteRoutes);
app.use(precoRoutes);
app.use(pedidoRoutes);

app.get("/", (req, res) => {
  res.send("API rodando");
});

module.exports = app;