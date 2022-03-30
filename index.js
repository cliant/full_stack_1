//express module get
const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const { User } = require("./models/User");

const config = require('./config/key');

//application/x-www-from-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

//application/json
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose
.connect(config.mongoURI)
.then(() => console.log('MongoDB connected'))
.catch((e) => console.log('MongoDB error: ', e))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/register', (req, res) => {
  
  //회원 가입 정보
  //데이터 베이스에 저장

  const user = new User(req.body)

  console.log(user);

  user.save((err, userInfo) => {
    if(err) return res.json({ success: false, err})
    return res.status(200).json({
      success: true
    })
  })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})