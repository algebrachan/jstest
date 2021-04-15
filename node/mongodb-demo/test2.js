const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true })
    .then(() => console.log('suc'))
    .catch(err => console.log(err, 'err'))

// 创建集合规则    
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, '请传入文章标题'],
        minlength: [2, '最小为2'],
        maxlength: [5, '最大为5'],
        trim: true,
    },
    age: {
        type: Number,
        min: 18,
        max: 100
    },
    publishDate: {
        type: Date,
        default: Date.now
    },
    category: {
        type: String,
        enum: ['html', 'css', 'java', 'js', 'node']
    },
    author: {
        type: String,
        validate: {
            validator: v => {
                return v && v.length > 4
            },
            message: '传入的值不符合验证规则'
        }
    }
});

const Post = mongoose.model('Post', postSchema);

Post.create({ title: 'ac', age: 20, category: 'js', author: 'bd' }).then(res => console.log(res))
    .catch(error =>{
        const err = error.errors;
        for(var attr in err){
            console.log(err[attr]['message']);
        }
    })