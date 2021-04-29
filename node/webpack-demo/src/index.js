/**
 * index.js : webpack入口起点文件
 * 
 * 1.运行指令：
 * 开发环境：webpack ./src/index.js -o ./build --mode=development
 * 生产环境：webpack ./src/index.js -o ./build --mode=production
 */
import data from './data.json';
import './index.css';

console.log(data)
function add(x, y) {
  return x + y;
}
console.log(add(1,2));
console.log('wc')