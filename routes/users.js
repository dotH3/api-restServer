const {Router} = require('express');
const { check } = require('express-validator');
const validarCampos = require('../middlewares/validar-campos');
const {existMail, exisUserForID} = require('../helpers/db-validators');
const { validarJwt } = require('../middlewares/validar-jwt');
const { userPost } = require('../controllers/user');

const router = Router();

router.post('/',[
    // validarJwt,
    check('name','El nombre es obligatorio').notEmpty(),
    check('mail','El email es invalido').isEmail(),
    check('mail').custom(existMail),
    check('password','La contraseña es obligatoria').notEmpty(),
    validarCampos
],
userPost);

module.exports = router;

