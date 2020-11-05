const express = require('express')
const app = express()

const cors = require('cors')

const database = require('./models/repository')
database.connect()

const routes = require('./routes/countriesRoutes')

app.use(cors())
app.use(express.json())
app.use('/', routes)

module.exports = app