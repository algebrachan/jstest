// 引入express框架
const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');

const routes = require('./routes/index');
// 创建网站服务器
const app = express();
// app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.send('Hello. Express')
})
//设置路由
app.use((req, res, next) => {
  console.log('请求走了app.use()中间件');
  next();
})
app.use('/wc', routes);

app.get('/list', (req, res) => {
  res.send({ name: 'wc', age: 27 })
})

app.use('/request', (req, res, next) => {
  console.log('请求走了app.use /request 中间件');
  next();
})

app.get('/request', (req, res, next) => {
  req.name = 'wc';
  next();
})
app.get('/request', (req, res) => {
  res.send(req.name);
})

app.get('/index', (req, res, next) => {
  // throw new Error('未知异常');
  // res.send('正常执行')
  fs.readFile('./12.txt', 'utf8', (err, result) => {
    if (err) {
      next(err);
    } else {
      res.send(result);
    }
  })
})
// 错误处理中间件
app.use((err, req, res, next) => {
  res.status(500).send(err.message);
  next()
})

// 模块化路由
const home = express.Router();
app.use('/home', home);
//创建二级路由
home.get('/index', (req, res) => {
  res.send(req.query);
})
// POST请求
app.post('/add', (req, res) => {
  console.log('req', req.body)
  res.send(req.body);
})

// 实现静态资源访问功能
app.use('/static', express.static(__dirname))
// 监听端口
app.listen(3500)
console.log('网站启动成功 http://localhost:3500')