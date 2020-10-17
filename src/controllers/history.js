const amoutHistory = require('../models/history')
const helpers = require('../helpers/helpers')

const books = {
  getAllHistory: (req, res) => {
    amoutHistory.getAllHistory()
      .then((result) => {
        resultBooks = result
        helpers.response(res, null, resultBooks, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  getAllamout: (req, res) => {
    amoutHistory.getAllamout()
      .then((result) => {
        resultBooks = result
        helpers.response(res, null, resultBooks, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  getTotalInvoice: (req, res) => {
    amoutHistory.getTotalInvoice()
      .then((result) => {
        resultBooks = result
        helpers.response(res, null, resultBooks, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  insertInvoice: (req, res) => {
    console.log(req.body)
    const {
      invoice,
      cashierId,
      date,
      orderOn,
      amout
    } = req.body
    const data = {
      invoice,
      cashierId,
      date: new Date(),
      orderOn,
      amout
    }
    amoutHistory.insertInvoice(data)
      .then((result) => {
        const resultInvoice = result
        console.log(resultInvoice)
        helpers.response(res, null, resultInvoice, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

module.exports = books
