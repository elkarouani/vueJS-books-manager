let express = require('express')
let app = express()
let bookRoutes = express.Router()

let Book = require('../models/Book')

bookRoutes.route('/add').post((req, res) => {
  let book = new Book(req.body)
  book.save()
    .then(book => { res.status(200).json({ 'book': 'Book added successfully' }) })
    .catch(err => { res.status(400).send('unable to save to database : ' + err) })
})

bookRoutes.route('/').get((req, res) => {
  Book.find((err, books) => { if (err) { console.log(err) } else { res.json(books) } })
})

bookRoutes.route('/edit/:id').get((req, res) => {
  let id = req.params.id
  Book.findById(id, (err, book) => { if (err) { console.log(err) } else { res.json(book) } })
})

bookRoutes.route('/update/:id').post((req, res) => {
  Book.findById(req.params.id, (err, book) => { 
    if (err || !book) { console.log(err) }
    else {
      book.book_title = req.body.book_title
      book.autor_name = req.book.autor_name
      book.price = req.book.price

      book.save().then(book => {
        res.json('Update complete')
      })
        .catch(err => { res.status(400).send('unable to update the database : ' + err) })
    }
  })
})

bookRoutes.route('/delete/:id').get((req, res) => {
  Book.findByIdAndRemove({ _id: req.params.id }, (err, book) {
    if(err) res.json(err)
    else res.json('Successfully removed')
  })
})

models.exports = bookRoutes
