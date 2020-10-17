const express = require('express')
const booksController = require('../controllers/product')
const { verification } = require('../middleware/auth')
const router = express.Router()
const { upload } = require('../middleware/multer')
// const { redis } = require('../middleware/redis')
// const { cleargetall } = require('../middleware/redis')

router
  .get('/', booksController.getAllbook)
  .get('/:id', booksController.getBookById)
  .get('/search/:nama', booksController.searchByName)
  .get('/sort/asc/:table', booksController.sortProductASC)
  .get('/sort/desc/:table', booksController.sortProductDESC)
  .get('/limit/:num', booksController.pageProduct)

  .post('/' /*verification*/, upload.single('image'), booksController.insertBook)
  .patch('/:id' /*verification*/,upload.single('image') , booksController.updateBook)
  .delete('/:id' /*verification*/, booksController.deleteBook)

module.exports = router
