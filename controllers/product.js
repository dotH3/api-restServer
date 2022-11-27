const {request, response} = require('express');
const bcryptjs = require('bcryptjs');
const ProductModel = require('../models/product');
const UserModel = require('../models/user');


const productPost = async (req = request, res = response)=>{

  const {name, img, description, price, category, stock, ...rest} = req.body;
  const {_id} = req.user
  if(typeof price !== 'number'||price<=0)return res.status(400).json({msg:'El precio tiene que ser un numero real'});
  if(typeof stock !== 'number'||stock<=0)return res.status(400).json({msg:'El stock tiene que ser un numero real'});

  owner = await UserModel.findById(_id)
  owner = owner._id

  const product = new ProductModel({name, img, description, price, category, stock, owner})

  await product.save();

  // return console.log(owner)
  return res.json({product})

}

const productPut =  async (req = request, res = response) => {
  // try {
      const {id} = req.params
      const {status,_id,__v,owner,...rest} = req.body 
      product = await ProductModel.findById(id)

      if(!product)return res.status(400).json({msg:'Este producto no existe!'})

      if(product.owner+"" != req.user._id+"")return res.status(200).json({msg:"No permitido!"})
      
      product = await ProductModel.findByIdAndUpdate(id, rest, { new: true })

      return res.json(product);
  // } catch (error) {
  //     res.status(500).json({
  //         msg: "Server fatal error: " + error,
  //       })
  // }
}


module.exports = {
  productPost,
  productPut
}