// 引入express框架
const express = require('express');
// 创建网站服务器
const app = express();

app.get('/', (req, res) => {
    console.log('req', req)
    res.send('Hello. Express')
})

app.get('/list', (req, res) => {
    res.send({ name: 'wc', age: 27 })
})
// 监听端口
app.listen(3500)
console.log('网站启动成功')