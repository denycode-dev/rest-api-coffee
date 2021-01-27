const booksModels = require('../models/product')
const helpers = require('../helpers/helpers')

const books = {
  getAllbook: (req, res) => {
    booksModels.getAllbook()
      .then((result) => {
        resultBooks = result
        helpers.response(res, null, resultBooks, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  insertBook: (req, res) => {
    console.log(req.body)
    const {
      name,
      message
    } = req.body
    const data = {
      name,
      message
    }
    booksModels.insertBook(data)
      .then((result) => {
        const resultBooks = result
        helpers.response(res, null, resultBooks, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

module.exports = books
