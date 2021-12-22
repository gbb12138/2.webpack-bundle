// defineProperty, 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象
let obj = {};
var ageValue = 10;

Object.defineProperty(obj, "age", {
    //writable: true, //是否可修改
    //value: 10, //writeable 和 set不能混用
    get() {
        return ageValue;
    },
    set(newValue) {
        ageValue = newValue;
    },

    enumerable: true, //是否可枚举
    configurable: true, //是否可配置可删除
});

console.log(obj.age);
obj.age = 20;
console.log(obj.age);
