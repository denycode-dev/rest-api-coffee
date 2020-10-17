const express = require('express')
const historyController = require('../controllers/history')
const router = express.Router()

router
  .get('/', historyController.getAllHistory)
  .get('/amout', historyController.getAllamout)
  .get('/total', historyController.getTotalInvoice)
  .post('/addInvoice', historyController.insertInvoice)
module.exports = router