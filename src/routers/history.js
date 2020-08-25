const express = require('express')
const booksController = require('../controllers/history')
const router = express.Router()

router
  .get('/', booksController.getAllbook)

module.exports = router
