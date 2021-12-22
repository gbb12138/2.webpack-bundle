// commonjs 导入
// let title = require('./title.js');
// console.log(title);
// console.log(title.age);

// es module引入
// import name from "./title";
// console.log(name)


// 懒加载
let load = document.getElementById('load');
load.addEventListener('click', () => {
    import(/* webpackChunkName: 'title' */'./title.js').then(res => {
        console.log(res)
    })
})

