const amoutHistory = require('../models/history')
const hellper = require('../helpers/helpers')

const books = {
  getAllHistory: (req, res) => {
    amoutHistory.getAllHistory()
      .then((result) => {
        resultBooks = result
        hellper.renponse(res, resultBooks, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  getAllamout: (req, res) => {
    amoutHistory.getAllamout()
      .then((result) => {
        resultBooks = result
        hellper.renponse(res, resultBooks, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  getTotalInvoice: (req, res) => {
    amoutHistory.getTotalInvoice()
      .then((result) => {
        resultBooks = result
        hellper.renponse(res, resultBooks, 200, null)
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
        hellper.renponse(res, resultInvoice, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

module.exports = books
