const booksModels = require('../models/product')
const helpers = require('../helpers/helpers')
const redis = require('redis')
const client = redis.createClient(process.env.PORT_REDIS)

const books = {
  getBookById: (req, res) => {
    const id = req.params.id
    booksModels.getBookById(id)
      .then((result) => {
        resultBooks = result
        helpers.response(res, null, resultBooks, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  getAllbook: (req, res) => {
    // const sortdata = req.query.sort || 'id';
    // const typeSort = req.query.typesort || 'ASC' 
    // const search = req.query.search
    // const limit = req.query.limit || 9
    // const offset = ((req.query.page || 1) -1) * limit
    // booksModels.getAllbook({sortdata,typeSort, search, limit, offset})
    booksModels.getAllbook()
      .then((result) => {
        resultBooks = result
        client.setex('getAllProduct', 60 * 60 * 8, JSON.stringify(resultBooks))
        helpers.response(res, null, resultBooks, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  searchByName: (req, res) => {
    const nama = req.params.nama
    booksModels.searchByName(nama)
      .then((result) => {
        resultProduct = result
        helpers.response(res, null, resultProduct, 200, null)
      })
      .catch((err) => {
        console.log(err)
      }).then((result) => {
        resultProduct = result
        helpers.response(res, null, resultProduct, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  sortProductASC: (req, res) => {
    const table = req.params.table
    console.log(table)
    booksModels.sortProductASC(table)
    .then((result) => {
      resultProduct = result
      helpers.response(res, null, resultProduct, 200, null)
    })
    .catch((err) => {
      console.log(err)
    })
  },
  sortProductDESC: (req, res) => {
    const table = req.params.table
    console.log(table)
    booksModels.sortProductDESC(table)
    .then((result) => {
      resultProduct = result
      helpers.response(res, null, resultProduct, 200, null)
    })
    .catch((err) => {
      console.log(err)
    })
  },
  pageProduct: (req, res) => {
    const num = req.params.num
    booksModels.pageProduct(num)
      .then((result) => {
        resultProduct = result
        helpers.response(res, null, resultProduct, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  updateBook: (req, res) => {
    const id = req.params.id
    const {
      name,
      price,
      image,
      idCategory
    } = req.body

    const data = {
      name,
      price,
      image,
      idCategory
    }

    if (req.files) {
      data.image = req.files.map((file) => {
        return process.env.BASE_URL+ '/uploads/image/'+ file.filename
      }).join()
    }

    booksModels.updateBook(id, data)
      .then((result) => {
        const resultBooks = result
        console.log(result)
        helpers.response(res, null, resultBooks, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  insertBook: (req, res) => {
    console.log(req.body)
    const {
      name,
      price,
      image,
      idCategory
    } = req.body
    const data = {
      name,
      image,
      price,
      idCategory
    }
    if (req.files) {
      data.image = req.files.map((file) => {
        return process.env.BASE_URL+ '/uploads/image/'+ file.filename
      }).join()
    }
    booksModels.insertBook(data)
      .then((result) => {
        const resultBooks = result
        console.log(result)
        helpers.response(res, null, resultBooks, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  deleteBook: (req, res) => {
    const id = req.params.id
    booksModels.deleteBook(id)
      .then((result) => {
        resultBooks = result
        helpers.response(res, null, resultBooks, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

module.exports = books
