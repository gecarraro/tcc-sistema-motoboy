const express = require("express");
const router = express.Router();
const controller = require("../controllers/precoController");

router.post("/precos", controller.criar);
router.get("/precos", controller.listar);

module.exports = router;