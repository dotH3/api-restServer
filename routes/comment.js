const { Router } = require('express');
const { check } = require('express-validator');
const { commentPost } = require('../controllers/comment');
const validarCampos = require('../middlewares/validar-campos');
const { validarJwt } = require('../middlewares/validar-jwt');
const router = Router();

router.post('/',[
    validarJwt,
    check('content','El contenido es obligatorio').not().isEmpty(),
    validarCampos
],commentPost);

module.exports = router