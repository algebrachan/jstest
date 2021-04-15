const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true })
    .then(() => console.log('suc'))
    .catch(err => console.log(err, 'err'))

// 创建集合规则    
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    isPublished: Boolean,
})
// 使用规则创建集合
// 1.集合名称
// 2.集合规则
const Course = mongoose.model('Course', courseSchema) // course

// 创建文档
// const course = new Course({
//     name: 'wangchen',
//     author: 'wc',
//     isPublished: true
// });
// 将文档插入到数据库
// course.save();

// Course.create({name:'javascript基础',author:'heima',isPublished:false},(err,result)=>{
//     console.log(err)
//     console.log(result)
// })
// Course.create({ name: 'javascript基础', author: 'heima', isPublished: false })
//     .then(doc => console.log(doc))
//     .catch(err => console.log(err))

// 返回 对象数组
// Course.find().then(result => console.log(result))
// 通过 _id 查找
// Course.find({ _id: '607847f49f8ba933b06f7911' }).then(result => console.log(result))

// 返回一个对象
// Course.findOne({name:'wangchen'}).then(res=>console.log(res))
// Course.find().select('name author -_id').then(res=>console.log(res))

// Course.findOneAndDelete({_id:'607849a96e96364bd4d63808'}).then(res=>console.log(res))
// Course.deleteMany({}).then(res=>console.log(res))

Course.update({name:'wangchen'},{name:'wangxiaoyuan'}).then(res=>console.log(res))
