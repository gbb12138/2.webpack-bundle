(() => {
    // 定义模块模块名：赋值函数
    var __webpack_modules__ = ({
        "./src/title.js": ((__unused_webpack_module, exports) => {
            // 模块的导出对象
            exports.name = 'title_name';
            exports.age = 'title_age';
        })
    });
    // 缓存
    var __webpack_module_cache__ = {};

    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== undefined) {
            return cachedModule.exports;
        }
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        // 调用模块的赋值函数
        __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
        // 返回模块的导出对象
        return module.exports;
    }

    var __webpack_exports__ = {};
    // 执行打包入口文件
    (() => {
        let title = __webpack_require__("./src/title.js");
        console.log(title);
    })();
})()
;
