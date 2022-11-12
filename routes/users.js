const {Router} = require('express');
const { check, param } = require('express-validator');
const validarCampos = require('../middlewares/validar-campos');
const {existMail, exisUserForID} = require('../helpers/db-validators');
const { validarJwt } = require('../middlewares/validar-jwt');
const { userPost, userPut } = require('../controllers/user');
const { userMatch } = require('../middlewares/userMath');

const router = Router();

router.post('/',[
    validarJwt,
    check('name','El nombre es obligatorio').notEmpty(),
    check('mail','El email es invalido').isEmail(),
    check('mail').custom(existMail),
    check('password','La contraseña es obligatoria').notEmpty(),
    validarCampos
],
userPost);

router.put('/:id',[
    validarJwt,
    param("id", "No es un ID valido").isMongoId(),
    validarCampos,
    userMatch,
], userPut);

module.exports = router;

