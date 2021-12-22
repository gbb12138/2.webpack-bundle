;(() => {
    // 声明模块定义
    var modules = {
        // key是模块的id，相对路径
        // webpack打包之后都是common.js
        // module:当前的模块，exports:模块的导出对象，require：加载其他模块的加载方法
        './src/title.js': (module, exports, require) => {
            module.exports = 'title'
        }
    }
    // 缓存对象，如果模块加载过，就不再加载
    var caches = {}; // 创建缓存

    function require (moduleId) {
        if (caches[moduleId]) {
            return caches[moduleId]
        }
        var module = caches[moduleId] = {
            exports: {}
        }
        // 执行模块定义的方法，给导出模块赋值
        modules[moduleId](module, module.exports, require);
        // 返回导出的对象
        return module.exports;
    }
    debugger
    // 执行入口文件
    let title = require('./src/title.js');
    console.log(title);

})()
