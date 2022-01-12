// express 项目通用模板
const express = require('express')
const cors = require('cors')
const joi = require('@hapi/joi')
// 创建 express 的服务器实例
const userRouter = require('./routes/user');
const expressJWT = require('express-jwt')
const config = require('./config')


const app = express()
// 跨域
app.use(cors())
// 解析json
app.use(express.json())
// 解析x-www-form-urlencoded 格式表单
app.use(express.urlencoded({ extended: false }))
// 响应处理失败结果统一中间件
app.use((req, res, next) => {
  res.cc = (err, status = 1) => {
    res.send({
      // 状态
      status,
      message: err instanceof Error ? err.message : err
    })
  }
  next()
})
// token验证中间件
app.use(expressJWT({ secret: config.jwtSecretKey }).unless({ path: [/^\/api\//] })) // 排除 /api 开头的



app.use('/api', userRouter);

app.get('/test', (req, res) => {
  console.log(req.user)
  res.send({
    message: 'ok'
  })
})



// 错误处理 需要放在最后，参数验证 
app.use((err, req, res, next) => {
  // 数据验证错误
  console.log('error', err.message)
  if (err instanceof joi.ValidationError) return res.cc(err)
  // token 验证错误
  if (err.name === 'UnauthorizedError') return res.cc('身份验证失败!')
  // 未知错误
  res.cc(err)
  next()
})

// 调用app.listen 方法指定端口号
app.listen(3005, () => {
  console.log('api server running at http://127.0.0.1:3005')
})