
/**
 * mysql 直接使用 操作sql的形式 来操作数据库，故使用的时候还需要对其进行封装
 */
const mysql = require('mysql')

const db = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '123456',
  database: 'demo'
})

// sql 语句
const sqlStr = 'select * from course'
db.query(sqlStr, (err, results) => {
  if (err) return console.log(err.message)
  console.log(results)
})