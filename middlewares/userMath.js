const jwt = require('jsonwebtoken');
const User = require('../models/user');

const userMatch = async (req, res, next) => {
  const token = req.header("token")
  const { id } = req.params
  const {data} = jwt.decode(token, process.env.SECRETORPRIVATEKEY);
  if(!data)return res.status(400).json({msg:`Token error`})

  const model = await User.findById(id)
  if (!model) return res.status(400).json({ msg: `No existe un User con el id ${id}` })

  if (id !== data.user._id) return res.status(401).json({ msg: "No autorizado." })
  
  next()
}

module.exports = {userMatch}