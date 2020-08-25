const connection = require('../configs/db')

const books = {
  getAllbook: () => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM history', (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}

module.exports = books
