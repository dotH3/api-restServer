const {Router} = require('express');
const { check, header } = require('express-validator');
const { login, tokenVerify } = require('../controllers/auth');
const checkUser = require('../middlewares/checkUser');
const validarCampos = require('../middlewares/validar-campos');
const { validarJwt } = require('../middlewares/validar-jwt');

const router = Router();

router.post('/login',[
    check('mail','Debe ingresar un correo válido').isEmail(),
    check('password','La contraseña es obligatoria').notEmpty(),
    checkUser,
    validarCampos
],login)

router.post('/token-verify',[
    validarJwt,
    header('token','Debe ingresar un token').notEmpty(),
    validarCampos
],tokenVerify)



module.exports = router