const gulp = require('gulp');  
const cleanCSS = require('gulp-clean-css');  
const uglify = require('gulp-uglify');  
const htmlmin = require('gulp-htmlmin');  
const imagemin = require('gulp-imagemin');  
  
// 压缩CSS  
gulp.task('minify-css', () => {  
  return gulp.src('css/*.css') // 匹配所有的css文件  
    .pipe(cleanCSS()) // 压缩CSS  
    .pipe(gulp.dest('dist/css')); // 输出到dist/css目录  
});  
  
// 压缩JavaScript  
gulp.task('minify-js', () => {  
  return gulp.src('js/*.js') // 匹配所有的js文件  
    .pipe(uglify()) // 压缩JavaScript  
    .pipe(gulp.dest('dist/js')); // 输出到dist/js目录  
});  
  
// 压缩HTML  
gulp.task('minify-html', () => {  
  return gulp.src('*.html') // 匹配所有的html文件  
    .pipe(htmlmin({ collapseWhitespace: true })) // 压缩HTML  
    .pipe(gulp.dest('dist')); // 输出到dist目录  
});  
  
// 压缩图片  
gulp.task('imagemin', () => {  
  return gulp.src('images/*') // 匹配所有的图片文件  
    .pipe(imagemin()) // 压缩图片  
    .pipe(gulp.dest('dist/images')); // 输出到dist/images目录  
});  
  
// 默认任务，执行所有压缩任务  
gulp.task('default', gulp.series('minify-css', 'minify-js', 'minify-html', 'imagemin'));