/**
 * 这里定义 对应路由相关的处理函数
 */
const encrypt = require('../utils/m_encryption')
const { User } = require('../utils/m_mongo')
const moment = require('moment')


// 注册用户的处理函数
exports.regUser = (req, res) => {
  const { username, password } = req.body;
  // 查询
  User.findOne({ username, })
    .then(result => {
      if (result) {
        console.log(result)
        return res.cc('用户存在')
      } else {
        const user = new User({ username, password: encrypt.bcrype_encode(password) })
        user.save()
        return res.cc('注册成功', 0)
      }
    })
    .catch(err => { return res.cc(err) })
}

// 登录处理函数
exports.login = async (req, res) => {
  const { username, password } = req.body;
  // User.findOne({ username, })
  //   .then(result => {
  //     if (result) {
  //       // 校验密码
  //       const compareResult = encrypt.bcrype_compare(password, result.password)
  //       if (!compareResult) return res.cc('密码错误!')
  //       const user_mobj = result['_doc']
  //       const user = { ...user_mobj, password: '', user_pic: '' }
  //       User.findOneAndUpdate({ username }, { $set: { time: moment(), age: 1.23 } }).then() // 设置登录时间
  //       return res.send({
  //         status: 0,
  //         message: '登录成功',
  //         token: encrypt.get_token(user)
  //       })
  //     } else {
  //       return res.cc('用户不存在', 0)
  //     }
  //   })
  const result = await User.findOne({ username, })
  if (result) {
    // 校验密码
    const compareResult = encrypt.bcrype_compare(password, result.password)
    if (!compareResult) return res.cc('密码错误!')
    const user = { ...result, password: '', user_pic: '' }
    console.log('user', user)
    await User.findOneAndUpdate({ username }, { $set: { time: moment(), age: 1.4 } })// 设置登录时间
    return res.send({
      status: 0,
      message: '登录成功',
      token: encrypt.get_token(user)
    })
  } else {
    return res.cc('用户不存在', 0)
  }
}


exports.demoTest = (req, res) => {
  res.cc('error', 2)
}
