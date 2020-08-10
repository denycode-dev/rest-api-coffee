const express = require('express')
const routerProduct = require('./product')

const router = express.Router()

router
  .use('/products', routerProduct)

module.exports = router
