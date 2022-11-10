const bcrypt = require("bcryptjs")
const { response } = require("express")
const jwt = require("jsonwebtoken")
const { createJwt } = require("../helpers/createJwt")
const User = require("../models/user")

const login = async (req, res) => {
    try {
      const user = req.user
      const token = await createJwt({user},'30d')
      return res.json({token})
    } catch (error) {
      return res.status(500).json({
        msg: "Server fatal error: " + error,
      })
    }
  }

module.exports = {
    login
};