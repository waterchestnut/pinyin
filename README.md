# 汉字转拼音
把汉字转化为拼音字母，由[chinalu/JSPinyin](https://github.com/chinalu/JSPinyin)改写，使用新语法并去掉mootools的依赖

## 安装
```base
npm install js-pinyin

import pinyin from 'js-pinyin'
```

## 使用示例
```js
let pinyin = require('js-pinyin');

pinyin.setOptions({checkPolyphone: false, charCase: 0});

console.log(pinyin.getFullChars('管理员'));
console.log(pinyin.getCamelChars('管理员'));
console.log(pinyin.getCamelChars('1234'));
console.log(pinyin.getCamelChars('english'));
```
