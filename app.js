require('dotenv').config()

const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const morgan = require('morgan')
const cors = require('cors')
const routes = require('./src/routers/index')

// use module
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}))

// parse application/json
app.use(bodyParser.json())
// use morgan
app.use(morgan('dev'))
// use cors
app.use(cors())

// use custom params
app.use('/api/v1/', routes)

// config PORT on .env
const PORT = process.env.PORT

app.use('/uploads/image', express.static('./src/uploads/image'))

app.listen(PORT, () => {
  console.log(`[ server running on port => ${PORT} ]`)
})
