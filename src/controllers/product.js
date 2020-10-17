const booksModels = require('../models/product')
const hellper = require('../helpers/helpers')
const redis = require('redis')
const client = redis.createClient(process.env.PORT_REDIS)

const books = {
  getBookById: (req, res) => {
    const id = req.params.id
    booksModels.getBookById(id)
      .then((result) => {
        resultBooks = result
        hellper.renponse(res, resultBooks, 200, null)
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
        client.setex('getAllProduct', 60 * 60 * 24, JSON.stringify(resultBooks))
        hellper.renponse(res, resultBooks, 200, null)
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
        hellper.renponse(res, resultProduct, 200, null)
      })
      .catch((err) => {
        console.log(err)
      }).then((result) => {
        resultProduct = result
        hellper.renponse(res, resultProduct, 200, null)
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
      hellper.renponse(res, resultProduct, 200, null)
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
      hellper.renponse(res, resultProduct, 200, null)
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
        hellper.renponse(res, resultProduct, 200, null)
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
      image: `${process.env.BASE_URL}/uploads/image/${req.file.filename}`,
      price,
      idCategory
    }
    booksModels.updateBook(id, data)
      .then((result) => {
        const resultBooks = result
        console.log(result)
        hellper.renponse(res, resultBooks, 200, null)
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
      image: `${process.env.BASE_URL}/uploads/image/${req.file.filename}`,
      price,
      idCategory
    }
    booksModels.insertBook(data)
      .then((result) => {
        const resultBooks = result
        console.log(result)
        hellper.renponse(res, resultBooks, 200, null)
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
        hellper.renponse(res, resultBooks, 204, null)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

module.exports = books
