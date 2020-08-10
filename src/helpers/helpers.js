module.exports = {
  renponse: (res, result, status, err) => {
    const resultPrint = {}
    resultPrint.status = 'success'
    resultPrint.status_code = status
    resultPrint.result = result
    resultPrint.err = err || null
    return res.status(resultPrint.status_code).json(resultPrint)
  }
}
