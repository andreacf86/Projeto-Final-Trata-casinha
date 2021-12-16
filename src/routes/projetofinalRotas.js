const express = require("express");
const router = express.Router();
const controller = require("../controller/projetoFinalController");

router.get("/all", controller.getAll);
router.get("/bairro", controller.getBairro);
router.get("/reforma", controller.getReforma);
router.get("/telhado", controller.getTelhado);
router.post("/cadastro", controller.createUser);
router.patch("/")
router.delete("/")
module.exports = router;
