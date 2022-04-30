//const res = require('express/lib/response');
//const Categorie = require('../models/categorie');
//const Product = require('../models/product');
//const Role = require('../models/role');
const User = require('../models/user');

const existMail = async(mail='')=>{

      //Verifiar si el usuario existe
      const mailExist =  await User.findOne({mail});
      if(mailExist){
          throw new Error(`El mail ${mail} ya esta registrado`)
      }
}

const exisUserForID = async(id)=>{
    //Verifiar si el id existe
    const userExist =  await User.findById(id);
    if(!userExist){
        throw new Error(`El id ${id} no existe`)
    }
}

module.exports = {
    existMail,
    exisUserForID
}