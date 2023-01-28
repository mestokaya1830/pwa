const mongoose = require('mongoose')

const db = mongoose.connect('mongodb://localhost:27017/works',{
  useNewUrlParser:true,
  useUnifiedTopology: false
}).then(() => {
  console.log('Connected')
}).catch((err) => {console.log(err)})

module.exports = db