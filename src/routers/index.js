const express = require('express')
const routerProduct = require('./product')
const routerHistory = require('./history')
const routerUsers = require('./users')

const router = express.Router()

router
  .use('/products', routerProduct)
  .use('/history', routerHistory)
  .use('/users', routerUsers)

module.exports = router
