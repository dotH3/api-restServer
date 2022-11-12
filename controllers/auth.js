const { response, request } = require("express")
const jwt = require("jsonwebtoken")
const { createJwt } = require("../helpers/createJwt")
const User = require("../models/user")

const login = async (req = request, res = response) => {
    try {
      const user = req.user
      const token = await createJwt({user},'30m')
      return res.json({token,'user':req.user})
    } catch (error) {
      return res.status(500).json({
        msg: "Server fatal error: " + error,
      })
    }
}

const tokenVerify = async(req = request, res = response)=>{
  res.json({
    msg:'ok'
  })
}

module.exports = {
    login,
    tokenVerify
};