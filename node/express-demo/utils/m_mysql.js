const mysql = require('mysql')


const db = mysql.createPool({
  connectionLimit: 10,
  host: '127.0.0.1',
  user: 'root',
  password: '123456',
  database: 'demo'
})

module.exports = db

// const sql = `select * from user where username=?`
// db.query(sql, ['wc'], (err, results) => {
//   if (err) {
//     console.log(err.message)
//   }
//   console.log(results)
//   return
// })

