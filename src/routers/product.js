const express = require('express')
const booksController = require('../controllers/product')
const router = express.Router()


router
  .get('/', booksController.getAllbook)
  .post('/', booksController.insertBook)

  module.exports = router
