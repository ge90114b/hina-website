import gulp from 'gulp';  
import cleanCSS from 'gulp-clean-css';  
import uglify from 'gulp-uglify';  
import htmlmin from 'gulp-htmlmin';  
import imagemin from 'gulp-imagemin';  
import fs from 'fs';  
import path from 'path';  
import { fileURLToPath } from 'url';  
import { dirname } from 'path';  
  
// 获取当前文件的 URL  
const __filename = fileURLToPath(import.meta.url);  
const __dirname = dirname(__filename);
  
// 创建一个函数来确保dist文件夹存在  
function ensureDistFolder() {  
  if (!fs.existsSync(path.join(__dirname, 'dist'))) {  
    fs.mkdirSync(path.join(__dirname, 'dist'), { recursive: true });  
  }  
}  
  
// 压缩CSS  
gulp.task('minify-css', function() {  
  ensureDistFolder();  
  return gulp.src('css/*.css')  
    .pipe(cleanCSS())  
    .pipe(gulp.dest('dist/css'));  
});  
  
// 压缩JavaScript  
gulp.task('minify-js', function() {  
  ensureDistFolder();  
  return gulp.src('js/*.js')  
    .pipe(uglify())  
    .pipe(gulp.dest('dist/js'));  
});  
// 复制图片
gulp.task('copy-images', () => {  
    return gulp.src('images/*') // 匹配所有的图片文件  
        .pipe(gulp.dest('dist/images')); // 直接输出到dist/images目录，不进行压缩  
});
// 复制ico
gulp.task('copy-ico', () => {  
    return gulp.src('*.ico') // 匹配所有的图片文件  
        .pipe(gulp.dest('dist')); // 直接输出到dist/images目录，不进行压缩  
});
// 压缩HTML  
gulp.task('minify-html', function() {  
  ensureDistFolder();  
  return gulp.src('*.html')  
    .pipe(htmlmin({ collapseWhitespace: true }))  
    .pipe(gulp.dest('dist'));  
});  
  
// 默认任务，执行所有压缩任务  
gulp.task('default', gulp.series('minify-css', 'minify-js', 'minify-html','copy-images','copy-ico', function(done) {  
  console.log('Build completed!');  
  done();  
}));