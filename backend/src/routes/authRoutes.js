const express = require("express");
const router = express.Router();
const controller = require("../controllers/authController");

router.post("/user", controller.registrar);
router.post("/login", controller.login);

module.exports = router;