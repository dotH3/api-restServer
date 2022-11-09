const {request, response} = require('express');
const User = require('../models/user')
const bcryptjs = require('bcryptjs');


const userPost = async (req = request, res = response)=>{

    const {name,mail,password,bio} = req.body;
    const user = new User({name, mail, password, bio});

    const salt = bcryptjs.genSaltSync()
    user.password = bcryptjs.hashSync(password, salt);

    await user.save();
    return res.json({
      user,
    })

}


module.exports = {
    // userGet,
    userPost,
    // userDelete
}