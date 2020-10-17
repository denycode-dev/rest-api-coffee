module.exports = {
  renponse: (res, result, status, err) => {
    const resultPrint = {}
    resultPrint.status = err ? 'error' : 'request success'
    resultPrint.status_code = status
    resultPrint.result = result
    resultPrint.err = err || 'no error'
    return res.status(resultPrint.status_code).json(resultPrint)
  }
}
