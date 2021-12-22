# webpack-bundle
webpack原理
## common.js（/bak/1.同步加载.js）
- 通过require exports module 引入导出
## es modules （/bak/2.comm+comm.js）
- 通过import export 引入导出
## commonjs和es modules导出值的区别(/bak/3.comm+es.js）)
- commonjs 值导出
    - 通过commonjs方式导出模块的时候，给exports赋值，是直接通过值的赋值 =》name=xx; exports.name = name(值)，后续通过异步的方式改变name，仅仅改变了name的值
- es modules 引用导出
    - 通过es module的方式导出模块时，给exports赋的是一个个get函数 =》name = xx; exports = { name: () => { name }}; 形成了一个闭包，后续通过异步方式改变name的值，当取exports的name时，取的还是name变量
