const express = require('express')
const mongoose = require('mongoose')
const router = require('./routers/router')
const cors = require('cors')
mongoose.connect('mongodb://localhost:27017/MeanStack')
  .then(() => console.log('Connected!'));
const app = express()


app.use(cors())
app.use(express.json())
app.use('/', router)


app.listen(5000, ()=>console.log('The Server is running'))
