const express = require('express')
const booksController = require('../controllers/product')
const { verification } = require('../middleware/auth')
const router = express.Router()
const { upload } = require('../middleware/multer')
const { getall } = require('../middleware/redis')
// const { cleargetall } = require('../middleware/redis')

router
  .get('/', getall, booksController.getAllbook)
  .get('/:id', booksController.getBookById)
  .get('/search/:nama', booksController.searchByName)
  .get('/sort/:table', booksController.sortProduct)
  .get('/limit/:num', booksController.pageProduct)

  .post('/' /*verification*/, upload.single('image'), booksController.insertBook)
  .patch('/:id' /*verification*/, booksController.updateBook,upload.single('image'))
  .delete('/:id' /*verification*/, booksController.deleteBook)

module.exports = router
