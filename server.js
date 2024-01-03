// Server setup
const express = require('express')
const app = express()
const api = require('./server/routes/api')

// Mongoose setup
const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/peopleDB'", {
  useNewUrlParser: true,
}).catch((err)=> console.log(err))

app.use('/', api)

const port = 1100
app.listen(port, function () {
    console.log(`Running on port ${port}`)
})