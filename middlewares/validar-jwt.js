const { request, response } = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const validarJwt = async (req, res = response, next) => {
  const token = req.header("x-token");
  if (!token) {
    return res.status(401).json({ msg: "No hay toquen de autorizacion" });
  }

  try {
    const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);

    //leer el usuario que corresponde al uid
    const user = await User.findById(uid);

    if (!user) {
      return res
        .status(401)
        .json({ msg: "Token no valido - usuario no existente" });
    }

    // Verificar su el uid tiene status en true
    if (!user.status) {
      return res
        .status(401)
        .json({ msg: "Token no valido - usuario deshabilitado" });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({
      error,
    });
  }
};

const userMatch = async (req = request, res = response, next) => {
  //jwt.decode(token, process.env.SECRETORPRIVATEKEY)
  const token = req.header("x-token");
  const { authorId } = req.body;
  if (!token) return res.status(401).json({ msg: "No hay toquen de autorizacion" });

  try {
    const { uid } = jwt.decode(token, process.env.SECRETORPRIVATEKEY);
    if(uid!==authorId)return res.json({ msg: "No es tu ID de usuario" });
    next();
  } catch (error) {
    return res.status(401).json({ error });
  }
};

module.exports = {
  validarJwt,
  userMatch,
};
