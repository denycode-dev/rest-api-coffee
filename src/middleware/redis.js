const redis = require('redis')
const client = redis.createClient()
const helper = require('../helpers/helpers')
module.exports = {
  getall: (req, res, next) => {
    client.get('getAllProduct', (err, data) => {
      if (err) throw err
      if (data !== null) {
        helper.renponse(res, JSON.parse(data), 200)
      } else {
        next()
      }
    })
  }
  // cleargetall: (req, res, next) => {
  //   client.del('getallproduct')
  //   next()
  // }
}
