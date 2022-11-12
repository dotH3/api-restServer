const { Router } = require("express");
const { check, param } = require("express-validator");
const { productPost, productPut } = require("../controllers/product");
const { userMatch } = require("../middlewares/userMath");
const validarCampos = require("../middlewares/validar-campos");
const { validarJwt } = require("../middlewares/validar-jwt")
const router = Router();

router.post('/',[
  validarJwt,
  validarCampos,
],productPost)

router.put('/:id',[
  validarJwt,
  param("id", "No es un ID valido").isMongoId(),
  validarCampos,
], productPut);

module.exports = router;
