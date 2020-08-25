const jwt = require('jsonwebtoken')
const helper = require('../helpers/helpers')
module.exports = {
  verification: (req, res, next) => {
    let token = req.headers.authorization
    token = token.split(' ')[1]
    jwt.verify(token, process.env.RUMPI, function (err, decoded) {
      if (err) return helper.renponse(res, { message: 'Access Forbidden' }, 403)

      next()
    })
  }
}
