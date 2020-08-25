const express = require('express')
const usersController = require('../controllers/users')
const router = express.Router()
const { upload } = require('../middleware/multer')
// const { formatFile } = require('')

router
  .post('/register',upload.single('image'),/*(req, res, next) => {
    const user = new User({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      imageURL: req.file.path
    });
    user.save().then(result => {
      res.status(201).json({
        message: "User registered successfully!",
      })
    })
  } ,*/usersController.register)
  .post('/login', usersController.login)
module.exports = router
