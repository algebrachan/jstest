const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true })
    .then(() => console.log('suc'))
    .catch(err => console.log(err, 'err'))

// 创建集合规则    
// const postSchema = new mongoose.Schema({
//     title: {
//         type: String,
//         required: [true, '请传入文章标题'],
//         minlength: [2, '最小为2'],
//         maxlength: [5, '最大为5'],
//         trim: true,
//     },
//     age: {
//         type: Number,
//         min: 18,
//         max: 100
//     },
//     publishDate: {
//         type: Date,
//         default: Date.now
//     },
//     category: {
//         type: String,
//         // enum: ['html', 'css', 'java', 'js', 'node']
//         enum:{
//             values:['html', 'css', 'java', 'js', 'node'],
//             message:'分类名称要在一定的范围内'
//         }
//     },
//     author: {
//         type: String,
//         validate: {
//             validator: v => {
//                 return v && v.length > 4
//             },
//             message: '传入的值不符合验证规则'
//         }
//     }
// });

// const Post = mongoose.model('Post', postSchema);

// Post.create({ title: 'ac', age: 14, category: 'js', author: 'bd' }).then(res => console.log(res))
//     .catch(error =>{
//         const err = error.errors;
//         for(var attr in err){
//             console.log(err[attr]['message']);
//         }
//     })

// 关联查询
// 创建用户规则
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }
})
// 文章集合规则
const postSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
})

const User = mongoose.model('User', userSchema);
const Post = mongoose.model('Post', postSchema);

// User.create({ name: 'itheima' }).then(res => console.log(res))
// Post.create({title:'js',author:'607c417ac01b563a7c6ce559'}).then(res=>console.log(res))
Post.find().populate('author').then(res => console.log(res))