const bcrypt = require("bcryptjs");
const User = require("../models/user")

const checkUser = async (req, res, next) => {
  const { mail, password } = req.body

  const model = await User.findOne({ mail });
  if (!model) return res.status(400).json({msg: "Mail o Contraseña no son correctos"});
  if (!model.status) return res.status(400).json({msg: "Usuario deshabilitado"});
  
  const passwordVerify = bcrypt.compareSync(password, model.password)
  if (!passwordVerify) return res.status(400).json({msg: "Mail o Contraseña no son correctos"});

  req.user = model

  next()
}

module.exports = checkUser