// toStringTag
console.log(Object.prototype.toString.call("foo")); // "[object String]"
console.log(Object.prototype.toString.call([1, 2])); // "[object Array]"
console.log(Object.prototype.toString.call(3)); // "[object Number]"
console.log(Object.prototype.toString.call(true)); // "[object Boolean]"
console.log(Object.prototype.toString.call(undefined)); // "[object Undefined]"
console.log(Object.prototype.toString.call(null)); // "[object Null]"
console.log(Object.prototype.toString.call({})); // "[object Object]"

// 能准确知道类型是哪个对象
let myExports = {};
Object.defineProperty(myExports, Symbol.toStringTag, { value: "test" });
console.log(Object.prototype.toString.call(myExports)); //[object test]
