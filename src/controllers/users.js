const bcrypt = require('bcrypt')
const modelUser = require('../models/users')
const hellper = require('../helpers/helpers')
const jwt = require('jsonwebtoken')
const saltRounds = 10
const redis = require('redis')
// const myPlaintextPassword = process.env.PLAINPASSWORD
const salt = bcrypt.genSaltSync(saltRounds)
const client = redis.createClient(process.env.PORT_REDIS)

// const someOtherPlaintextPassword = 'not_bacon';
module.exports = {
  register: (req, res) => {
    const { name, email, tlpNumber, password} = req.body
    const data = {
      name,
      email,
      tlpNumber,
      roleId: 2,
      password,
      image: `${process.env.BASE_URL}/uploads/image/${req.file.filename}`,
      createAt: new Date(),
      updateAt: new Date()
    }
    bcrypt.hash(password, salt, function (err, hash) {
      data.password = hash
      modelUser.register(data)
        .then((result) => {
          hellper.response(res, null, result, 201, null)
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
        if (result.length < 1) return hellper.response(res, null, { message: 'Name Not Found' }, 401, null)
        const user = result[0]
        bcrypt.compare(password, user.password).then(function (resultsCompare) {
          if (!resultsCompare) return hellper.response(res, null, { message: 'incored password' }, 403, null)
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
            hellper.response(res, null, user, 200)
          })
        })
          .catch((err) => {
            console.log(err)
          })
      })
      .catch((err) => {
        console.log(err)
      })
  },
  getAllUsers: (req, res) => {
    modelUser.getAllUsers()
      .then((result) => {
        user = result
        client.setex('getAllUser', 60 * 60 * 24, JSON.stringify(user))
        hellper.response(res, null, user, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  getUserById: (req, res) => {
    const id = req.params.id
    modelUser.getUserById(id)
      .then((result) => {
        resultBooks = result
        hellper.response(res, null, resultBooks, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  updateUsers: (req, res) => {
    const id = req.params.id
    const {
      name,
      email,
      tlpNumber,
      password,
    } = req.body
    const data = {
      name,
      email,
      tlpNumber,
      password,
      image: `${process.env.BASE_URL}/uploads/image/${req.file.filename}`,
      updateAt : new Date()
    }
    booksModels.updateBook(id, data)
      .then((result) => {
        const resultUser = result
        console.log(result)
        hellper.response(res, null, resultUser, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
