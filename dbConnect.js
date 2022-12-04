const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://vikas69:Vikas%40123@cluster0.mvptd.mongodb.net/expense-1' , {useNewUrlParser : true , useUnifiedTopology : true})
console.log("hello")
const connection = mongoose.connection

connection.on('error', err => console.log(err))

connection.on('connected' , () => console.log('Mongo DB Connection Successfull'))