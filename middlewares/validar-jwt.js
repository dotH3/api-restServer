const { request, response } = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const validarJwt = async (req, res = response, next) => {
  const token = req.header("token");
  if (!token) return res.status(401).json({ msg: "No hay toquen de autorizacion" });

  try {
    const { data } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
    const user = await User.findById(data.user._id);
    if (!user) return res.status(401).json({ msg: "Token no valido - usuario no existente" });
    if (!user.status) return res.status(401).json({ msg: "Token no valido - usuario deshabilitado" });

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({
      error,
    });
  }
};

module.exports = {
  validarJwt
};
