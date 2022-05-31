const { request, response } = require('express');
const Comment = require('../models/comment')

const commentPost = async (req = request, res = response) => {
    const { content, id } = req.body;
    const user = await Comment.findOne({ _id:id })
    if (!user) return res.status(400).json({ errors: [{ msg: "El usuario no existe" }] })

    const comment = new Comment({ content });
    res.json({
        "status":"todo ok"
    })
}

module.exports = { commentPost }