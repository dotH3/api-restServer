const {Router} = require('express');
const { check } = require('express-validator');
const { login } = require('../controllers/auth');
const checkUser = require('../middlewares/checkUser');
const validarCampos = require('../middlewares/validar-campos');

const router = Router();

router.post('/login',[
    check('mail','Debe ingresar un correo válido').isEmail(),
    check('password','La contraseña es obligatoria').notEmpty(),
    checkUser,
    validarCampos
],login)

module.exports = router