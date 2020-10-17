const connection = require('../configs/db')

const books = {
  getAllHistory: () => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM history', (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getAllamout: () => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT SUM(amout) FROM history AS total', (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getTotalInvoice: () => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT COUNT(invoice) FROM history', (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  insertInvoice: (data) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO history SET ?', data, (err, result) => {
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
