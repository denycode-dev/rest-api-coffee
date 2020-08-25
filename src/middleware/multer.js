const multer = require('multer')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './src/uploads/image')
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString().replace(/[\/\\:]/g, '_') + file.originalname)
  },
  // fileFilter: function(req, file, cb) {
  //   cb(null, {
  //     storage: storage,
  //     limits: { fileSize: 1 * 1024 * 1024 }
  //   }).fields({name: 'image', maxCount: 1});
  // }
})

const upload = multer({ storage: storage })

module.exports = {
  upload
}
