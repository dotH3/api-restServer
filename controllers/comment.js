const { request, response } = require('express');
const mongoose = require('mongoose')
const Comment = require('../models/comment');
const User = require('../models/user');

const commentPost = async (req = request, res = response) => {
    const { content, id } = req.body;
    if( !mongoose.Types.ObjectId.isValid(id) ) return res.status(400).json({ errors: [{ msg: "El id usuario no existe" }] })
    const user = await User.findById(id)
    if(!user) return res.status(400).json({ errors: [{ msg: "El usuario no existe" }] })

    const comment = new Comment({ content });
    res.json({
        "status":"todo ok"
    })
}

module.exports = { commentPost }