(() => {
    /**
     * 定义模块
     * @type {{"./src/title.js": modules."./src/title.js"}}
     */
    var modules = {
        /**
         * es module导出
         * @param module
         * @param exports
         * @param require
         */
        './src/title.js': (module, exports, require) => {
            // 如果监测到代码里有export和import关键字，就认为是es modules
            require.r(exports);
            let default_export = 'title_name';
            let age = 'title_age';
            setTimeout(() => {
                age = 'new age'
            }, 1000)
            require.d(exports, {
                default: () => default_export,
                age: () => age  // age导出是一个函数，形成了一个闭包， 去找age这个变量
            })
        },
        /**
         * commonjs导出
         * @param module
         * @param exports
         * @param requore
         */
        './src/common.js': (module, exports, requore) => {
            let age = 'title_age';
            exports.age = age;  // 仅仅是值的赋值
            setTimeout(() => {
                age = 'new age';
            }, 1000);
        }
    }

    /**
     * require 方法
     * @type {{}}
     */
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
    require.r = (exports) => {
        // 表示这个exports对象是es模块的导出对象 [object Module]
        Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        //  exports.__esModule = true
        Object.defineProperty(exports, '__esModule', { value: true });
    }
    require.d = (exports, definition) => {
        for(let key in definition) {
            Object.defineProperty(exports, key, { get: definition[key] })
        }
    }

    /**
     * 执行入口文件， 调用require方法
     * @type {{}}
     */
        // let title = require('./src/common.js'); // 取得还是旧的值 title_age
    let title = require('./src/title.js');  // 取的是新的值 new age
    console.log(title);
    setTimeout(() => {
        console.log(title.age);
    }, 2000)
})();
