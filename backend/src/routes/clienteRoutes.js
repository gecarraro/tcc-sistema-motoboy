const express = require("express");
const router = express.Router();
const controller = require("../controllers/clienteController");
const { verificarToken } = require("../auth");

router.post("/", verificarToken, controller.criar);
router.get("/", verificarToken, controller.listar);

module.exports = router;