const express = require('express')
// const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./config/DB')

const bookRoutes = require('./expressRoutes/bookRoutes')

mongoose.Promise = global.Promise
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => { console.log('Database is connected') },
  err => { console.log('Can not connect to the database' + err) }
)

const app = express()
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(cors())

app.use('/books', bookRoutes)

const port = process.env.PORT || 4000

app.listen(port, function () { console.log('Listening on port ' + port) })
