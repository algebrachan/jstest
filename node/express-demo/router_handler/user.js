/**
 * 这里定义 对应路由相关的处理函数
 */
const encrypt = require('../utils/m_encryption')
const db = require('../utils/m_mysql')


// 注册用户的处理函数
exports.regUser = (req, res) => {
  const { username, password } = req.body;
  const sql = `select * from user where username=?` // ? 为占位符
  db.query(sql, [username], (err, results) => {
    if (err) return res.cc(err)
    if (results.length > 0) return res.cc('用户名被占用')
    const insert = `insert into user set ?`
    db.query(insert, { username, password: encrypt.bcrype_encode(password) }, (err, results) => {
      if (err) return res.cc(err)
      if (results.affectedRows !== 1) { return res.cc('注册用户失败') }
      // 注册成功
      return res.cc('注册成功', 0)
    })
  })
}

// 登录处理函数
exports.login = (req, res) => {
  const { username, password } = req.body;
  const sql = `select * from user where username=?`
  db.query(sql, [username], ((err, results) => {
    if (err) return res.cc(err)
    if (results.length !== 1) return res.cc('登录失败!')
    const compareResult = encrypt.bcrype_compare(password, results[0].password)
    if (!compareResult) return res.cc('密码错误!')
    const user = { ...results[0], password: '', user_pic: '' }
    res.send({
      status: 0,
      message: '登录成功',
      token: encrypt.get_token(user)
    })
  }))
}

exports.demoTest = (req, res) => {
  res.cc('error', 2)
}