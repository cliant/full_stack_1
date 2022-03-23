//express module get
const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose
.connect('mongodb+srv://jun:1234@cluster0.ec5ft.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(() => console.log('MongoDB connected'))
.catch((e) => console.log('MongoDB error: ', e))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})