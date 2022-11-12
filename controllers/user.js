const {request, response} = require('express');
const User = require('../models/user')
const bcryptjs = require('bcryptjs');


const userPost = async (req = request, res = response)=>{

    const {name,mail,password,bio} = req.body;
    const user = new User({name, mail, password, bio});

    const salt = bcryptjs.genSaltSync()
    user.password = bcryptjs.hashSync(password, salt);

    await user.save();
    return res.json({user})

}

const userPut =  async (req = request, res = response) => {
  try {
      const {id} = req.params
      const {password, status,mail,...rest} = req.body 
      if(!await User.findById({_id:id})){
          if(await User.findOne({mail})){
              return res.status(400).json({
                  'msg': 'Este email ya esta registrado'
              })
          }
      }
      rest.mail = mail
      const user = await User.findByIdAndUpdate(id, rest, { new: true })
      return res.json(user);
      
  } catch (error) {
      res.status(500).json({
          msg: "Server fatal error: " + error,
        })
  }
}


module.exports = {
    userPost,
    userPut
}