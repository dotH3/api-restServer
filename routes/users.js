const {Router} = require('express');
const { check } = require('express-validator');
const { usersGet, usersPost, usersDelete } = require('../controllers/users');
const validarCampos = require('../middlewares/validar-campos');
const {existMail, exisUserForID} = require('../helpers/db-validators');
const { validarJwt } = require('../middlewares/validar-jwt');

const router = Router();

router.get('/',[
    validarJwt,
    validarCampos
],
usersGet);

router.post('/',[
    //validarJwt,
    check('name','El nombre es obligatorio (MIN:3 MAX:20)').not().isEmpty().isLength({min:3}).isLength({max:20}),
    check('mail','El email es invalido').isEmail(),
    check('mail').custom(existMail),
    check('password','La contraseña debe contener al menos 3 caracteres (MIN:3 MAX:20)').isLength({min:3}).isLength({max:20}),
    validarCampos
],
usersPost);

router.delete('/:id',[
    validarJwt,
    check('id','No es un ID valido').isMongoId(),
    check('id').custom(exisUserForID),
    validarCampos
],
usersDelete);


module.exports = router;

