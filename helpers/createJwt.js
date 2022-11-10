const jwt = require("jsonwebtoken")

const createJwt = (data,expiresIn) => {
  return new Promise((res, rej) => {
    const payload = {data }
    jwt.sign(
      payload,
      process.env.SECRETORPRIVATEKEY,
      {
        expiresIn
      },
      (err, token) => {
        if (err) {
          rej("No se puedo generar el token, "+err)
        } else {
          res(token)
        }
      }
    )
  })
}

module.exports = { createJwt }