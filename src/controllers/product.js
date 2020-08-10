const booksModels = require('../models/product')
const hellper = require('../helpers/helpers')

const books = {
  getBookById: (req, res) => {
    const id = req.params.id
    booksModels.getBookById(id)
      .then((result) => {
        resultBooks = result
        // res.json(resultBooks);
        hellper.renponse(res, resultBooks, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  getAllbook: (req, res) => {
    booksModels.getAllbook()
      .then((result) => {
        resultBooks = result
        // res.json(resultBooks);
        hellper.renponse(res, resultBooks, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  updateBook: (req, res) => {
    const id = req.params.idtes
    const {
      name,
      image,
      price,
      idCategory
    } = req.body
    const data = {
      name,
      image,
      price,
      idCategory
    }
    booksModels.updateBook(id, data)
      .then((result) => {
        const resultBooks = result
        console.log(result)
        res.json(resultBooks)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  deleteBook: (req, res) => {
    const id = req.params.id
    booksModels.deleteBook(id)
      .then((result) => {
        resultBooks = result
        res.json(resultBooks)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  insertBook: (req, res) => {
    console.log('hello')
    console.log(req.body)
    const {
      name,
      image,
      price,
      idCategory
    } = req.body
    const data = {
      name,
      image,
      price,
      idCategory
    }
    booksModels.insertBook(data)
      .then((result) => {
        const resultBooks = result
        console.log(result)
        hellper.renponse(res, resultBooks, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

module.exports = books
