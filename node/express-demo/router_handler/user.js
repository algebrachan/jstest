/**
 * 这里定义 对应路由相关的处理函数
 */
const encrypt = require('../utils/m_encryption')

// 注册用户的处理函数
exports.regUser = (req, res) => {
  const { name } = req.body;
  let str = encrypt.bcrype_encode(name);
  res.send('reguser OK ' + str);
}

// 登录处理函数
exports.login = (req, res) => {
  const { name, bcrypt } = req.body;
  let isOk = encrypt.bcrype_compare(name, bcrypt)
  res.send('login OK ' + isOk)
}

exports.demoTest = (req, res) => {
  res.cc('error', 2)
}