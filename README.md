# webpack-bundle
webpack导出结果分析
## 什么是commonjs方式，什么是es module方式
- 通过require exports module 引入导出
- 通过require exports module 引入导出

## 分析webpack打包出的结果
webpack打包最终都是commonjs方式，如果不是commonjs的模块会做处理
- 通过commonjs方式导出，commonjs方式引入，不需要处理（/bak/1.同步加载.js）
    - 1.定义所有模块(给exports赋值)
    - 2.定义require方法，返回模块导出的对象（生成module对象，调用模块中对应的模块方法，給exports赋值）
    - 3.执行入口文件逻辑
- 通过es module方式导出，commonjs方式引入(/bak/3.comm+es.js）)
    - 流程如上，但是需要处理es module导出的模块
    - 在第一步时，需调用require的其他两个方法
        - require.r => 给exports对象标记是es模块的导出对象，给exports添加__esModule = true;
        - require.d => 遍历模块导出的属性，加到创建的exports对象中
- 通过es module方式导出，es module方式引入(/bak/4.es+es.js）)
- 通过commonjs方式导出，es module方式引入(/bak/5.es+common.js）)
## commonjs和es modules导出值的区别(/bak/3.comm+es.js）)
- commonjs 值导出
    - 通过commonjs方式导出模块的时候，给exports赋值，是直接通过值的赋值 =》name=xx; exports.name = name(值)，后续通过异步的方式改变name，仅仅改变了name的值
- es modules 引用导出
    - 通过es module的方式导出模块时，给exports赋的是一个个get函数 =》name = xx; exports = { name: () => { name }}; 形成了一个闭包，后续通过异步方式改变name的值，当取exports的name时，取的还是name变量
