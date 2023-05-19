/**
 * @fileOverview 导出默认的实例
 * @author waterchestnut 2017/3/13
 * @module
 */
'use strict';

let pinyin = new (require('./dist/pinyin'))({charCase:0});
pinyin.setOptions({checkPolyphone: true, charCase: 0});
console.log(pinyin.getFullChars('管理员'))
console.log(pinyin.getCamelChars('管理员'))
console.log(pinyin.getCamelChars('1234'))
console.log(pinyin.getCamelChars('english'))
console.log(pinyin.getCamelChars('昕'))
console.log(pinyin.getCamelChars('佛'))
console.log(pinyin.getFullChars('佛'))
module.exports = pinyin;