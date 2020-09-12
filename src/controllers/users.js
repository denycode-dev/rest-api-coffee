const bcrypt = require('bcrypt')
const modelUser = require('../models/users')
const hellper = require('../helpers/helpers')
const jwt = require('jsonwebtoken')
const saltRounds = 10
// const myPlaintextPassword = process.env.PLAINPASSWORD
const salt = bcrypt.genSaltSync(saltRounds);

// const someOtherPlaintextPassword = 'not_bacon';
module.exports = {
  register: (req, res) => {
    const { name, division, email, tlpNumber, password, roleId} = req.body
    const data = {
      name,
      division,
      email,
      tlpNumber,
      password,
      roleId ,
      image: `${process.env.BASE_URL}/uploads/image/${req.file.filename}`,
      createAt: new Date(),
      updateAt: new Date()
    }
    bcrypt.hash(password, salt, function (err, hash) {
      data.password = hash
      modelUser.register(data)
        .then((result) => {
          hellper.renponse(res, result, 201, null)
        })
        .catch((err) => {
          console.log(err)
        })
    })
  },
  login: (req, res) => {
    const { email, password } = req.body
    modelUser.nameCheck(email)
      .then((result) => {
        if (result.length < 1) return hellper.renponse(res, { message: 'Name Not Found' }, 401, null)
        const user = result[0]
        bcrypt.compare(password, user.password).then(function (resultsCompare) {
          if (!resultsCompare) return hellper.renponse(res, { message: 'incored password' }, 403, null)
          const payload = {
            id: user.id,
            name: user.email,
            roleId: user.roleId
          }
          jwt.sign(payload, process.env.RUMPI, { expiresIn: '1d' }, (err, token) => {
            user.token = token
            delete user.password
            delete user.updateAt
            delete user.createAt
            hellper.renponse(res, user, 200)
          })
        })
          .catch((err) => {
            console.log(err)
          })
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
