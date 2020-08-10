const express = require('express')
const booksController = require('../controllers/product')
const router = express.Router()

router
  .get('/:id', booksController.getBookById)
  .get('/', booksController.getAllbook)
  .post('/', booksController.insertBook)
  .patch('/:idtes', booksController.updateBook)
  .delete('/:id', booksController.deleteBook)

module.exports = router
