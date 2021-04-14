const gulp = require('gulp')
// 1.名称 2.callback
gulp.task('first',()=>{
    gulp.src('./1.txt')
    .pipe(gulp.dest('./dist/css'));
})


// 构建任务 一次执行
gulp.task('default',['first']);