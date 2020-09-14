const express = require('express')
const usersController = require('../controllers/users')
const router = express.Router()
const { upload } = require('../middleware/multer')
// const { formatFile } = require('')

router
  .post('/register',upload.single('image'),usersController.register)
  .post('/login', usersController.login)
module.exports = router
