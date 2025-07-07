Function.prototype.mycall = function (thisArg, ...args) {
  thisArg = thisArg === null || thisArg === undefined ? globalThis : thisArg //ES2020新增对象，可以是window，global，self（webwoker）
  thisArg._fn = this // 将函数绑定到thisArg对象上
  let res = thisArg._fn(...args) // 执行函数
  delete thisArg._fn // 删除临时属性
  return res // 返回结果
}
//1. 为什么需要临时属性？
//为了保护目标对象不被修改，避免污染全局作用域。3
//2. 为什么不直接用 thisArg 调用函数？
//因为直接调用会改变函数的 this 指向，而我们需要的是将 this 指向 thisArg。

Function.prototype.myapply = function (thisArg, args) {
  thisArg = thisArg === null || thisArg === undefined ? globalThis : thisArg //ES2020新增对象，可以是window，global，self（webwoker）
  thisArg._fn = this // 将函数绑定到thisArg对象上
  let res = thisArg._fn(...args) // 执行函数
  delete thisArg._fn // 删除临时属性
  return res // 返回结果
}
//和call只有args参数的区别，apply的args参数是一个数组，而call的args参数是一个可变参数列表。

Function.prototype.mybind = function (thisArg, ...args1) {
  thisArg = thisArg === null || thisArg === undefined ? globalThis : thisArg //ES2020新增对象，可以是window，global，self（webwoker）
  let _this = this
  return function (...args2) {
    thisArg._fn = _this // 将函数绑定到thisArg对象上
    let res = thisArg._fn(...args1, ...args2)
    delete thisArg._fn // 删除临时属性
    return res // 返回结果
  }
}
//bind方法返回一个新的函数，这个函数的this指向thisArg，并且可以预设参数。手写的时候需要善用展开运算符
