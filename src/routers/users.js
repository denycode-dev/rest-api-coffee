const express = require('express')
const usersController = require('../controllers/users')
const router = express.Router()
const { upload } = require('../middleware/multer')

// const { formatFile } = require('')

router
  .get('/', usersController.getAllUsers)
  .get('/:id', usersController.getUserById)
  .post('/register',upload,usersController.register)
  .post('/login', usersController.login)
  .patch('/:id', usersController.updateUsers)

module.exports = router
