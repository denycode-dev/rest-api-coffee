const booksHistory = require('../models/history')
const hellper = require('../helpers/helpers')

const books = {
  getAllbook: (req, res) => {
    booksHistory.getAllbook()
      .then((result) => {
        resultBooks = result
        hellper.renponse(res, resultBooks, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

module.exports = books
