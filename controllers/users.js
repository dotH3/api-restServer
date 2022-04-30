const {request, response} = require('express');
const User = require('../models/user')

const usersGet = async (req = request, res = response)=>{
    //const filters = req.body;
    const users = await User.find({
        status:true
    })
    res.json({
        users
    })
    
}
const usersPost = async (req = request, res = response)=>{
    //Input
    const {name,mail,password} = req.body;
    const user = new User({name, mail, password});
    await user.save();
    // Out
    res.json({
        name,
        mail
    })
}
const usersDelete = async(req,res= response)=>{
    const {id} = req.params;
    const user = await User.findByIdAndDelete(id);

    res.json({
        user
    });
}


module.exports = {
    usersGet,
    usersPost,
    usersDelete
}