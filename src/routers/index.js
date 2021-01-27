const express = require('express')
const routerProduct = require('./product')

const router = express.Router()

router
  .use('/message', routerProduct)

module.exports = router
