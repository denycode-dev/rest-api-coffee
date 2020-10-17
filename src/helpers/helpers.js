// module.exports = {
//   renponse: (res, result, status, err) => {
//     const resultPrint = {}
//     resultPrint.status = err ? 'error' : 'request success'
//     resultPrint.status_code = status
//     resultPrint.result = result
//     resultPrint.err = err || 'no error'
//     return res.status(resultPrint.status_code).json(resultPrint)
//   }
// }
const helpers = {
  response: (res, page, result, status, err, message) => {
    const resultPrint = {}

    if (status === 201) {
      resultPrint.status = 'Created success'
    } else if (status !== 200) {
      resultPrint.status = 'Failed'
    } else {
      resultPrint.status = 'Success'
    }

    if (page !== null) {
      resultPrint.page = page
    }

    if (typeof result !== 'string') {
      if (status === 404) {
        resultPrint.totalItem = 0
      } else {
        resultPrint.totalItem = result.length
      }
    }

    if (message !== null) {
      resultPrint.message = message
    }

    resultPrint.status_code = status
    resultPrint.result = result
    resultPrint.err = err || null
    return res.status(resultPrint.status_code).json(resultPrint)
  }
}

module.exports = helpers
