function curried(fn) {
  let judge = (...args) => {
    if (args.length === fn.length) {
      //fn.lengh是函数期望参数个数
      return fn(...args)
    } else {
      return (...args2) => {
        return judge(...args, ...args2)
      }
    }
  }
  return judge
}
function add(a, b, c) {
  return a + b + c
}
let curriedAdd = curried(add)
console.log(curriedAdd(1)(2)) //[Function (anonymous)]
console.log(curriedAdd(1)(2)(3)) //6
