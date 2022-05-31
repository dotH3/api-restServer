const { request, response } = require("express");
const Comment = require("../models/comment");

const commentPost = async (req = request, res = response) => {
  const { content, authorId } = req.body;

  //Confirmacion si existe el user
  //if( !mongoose.Types.ObjectId.isValid(id) ) return res.status(400).json({ errors: [{ msg: "El id usuario no existe" }] })
  //const user = await User.findById(id)
  //if(!user) return res.status(400).json({ errors: [{ msg: "El usuario no existe" }] })

  const comment = new Comment({ content, authorId });
  await comment.save();
  res.json({
    comment
  });
};

module.exports = { commentPost };
