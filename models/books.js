let mongoose = require('mongoose')
let Schema = mongoose.Schema

let Book = new Schema({
  book_title: {
    type: String
  },
  autor_name: {
    type: String
  },
  price: {
    type: Number
  }
}, {
  collection: 'books'
})

module.exports = mongoose.model('Book', Book)
