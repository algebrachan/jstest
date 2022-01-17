const { connect, Schema, model } = require('mongoose')

connect('mongodb://127.0.0.1:27017/test', { useNewUrlParser: true })
  .then(() => console.log('suc'))
  .catch(err => console.log(err, 'err'))

const userSchema = new Schema({
  username: String,
  password: String,
  nickname: String,
  email: String,
  age: Number,
  time: Date,
})

const User = model('user', userSchema)
// User.findOne()
// https://mongoosejs.com/docs/index.html

module.exports = {
  User,
}