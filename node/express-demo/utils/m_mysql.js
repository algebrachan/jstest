const mysql = require('mysql')

const db = mysql.createPool({
  connectionLimit: 10,
  host: '127.0.0.1',
  user: 'root',
  password: '123456',
  database: 'demo'
})

module.exports = db

