var multer  = require('multer');
const { v4: uuidv4 } = require('uuid');
var path = require('path');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
      cb(null, uuidv4() + path.extname(file.originalname))
    }
  })
   
  var upload = multer({ storage: storage })
  
exports.upload=upload;