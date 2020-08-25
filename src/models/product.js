const connection = require('../configs/db')

const books = {
  getBookById: (id) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM product where id = ?', id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getAllbook: () => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM product', (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  searchByName: (nama) => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM product WHERE name LIKE "%${nama}%"`, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  sortProduct: (table) => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM product ORDER BY ${table} ASC`, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  pageProduct: (num) => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM product LIMIT ${num} `, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  updateBook: (id, data) => {
    return new Promise((resolve, reject) => {
      connection.query('UPDATE product SET ? WHERE id = ?', [data, id], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  deleteBook: (id) => {
    return new Promise((resolve, reject) => {
      connection.query('DELETE FROM product WHERE id = ?', id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  insertBook: (data) => {
    console.log(data)
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO product SET ?', data, (err, result) => {
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
