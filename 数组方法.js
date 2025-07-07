//Array.prototype.filter()
Array.prototype.myfilter = function (callback, thisArg) {
  //参数校验
  if (this == null) {
    throw new TypeError('this为null')
  }
  if (typeof callback !== 'function') {
    throw new TypeError('callback不是函数')
  }
  let res = []
  //严格类型转换，但其实可以不这么写因为是数组方法
  let O = Object(this)
  let len = O.length >>> 0
  for (let i = 0; i < len; i++) {
    if (callback.call(thisArg, O[i], i, O)) {
      res.push(O[i])
    }
  }
  return res
}

console.log([1, 2, 3].myfilter((val, index) => val > 2))

//Array.prototype.map()
Array.prototype.mymap = function (callback) {
  let res = []
  for (let i = 0; i < this.length; i++) {
    res.push(callback(this[i], i, this))
  }
  return res
}
console.log([1, 2, 3].mymap((val) => val * 2))

//Array.prototype.forEach()
Array.prototype.myforEach = function (callback, thisArg) {
  //参数校验
  if (this == null) {
    throw new TypeError('this为null')
  }
  if (typeof callback !== 'function') {
    throw new TypeError('callback不是函数')
  }
  for (let i = 0; i < this.length; i++) {
    callback.call(thisArg, this[i], i, this)
  }
  //不返回值
}
let sum = 0
;[1, 2, 3, 4, 5].myforEach((val) => {
  sum += val
})
console.log('累加结果:', sum) //15
//Array.prototype.reduce()
Array.prototype.myreduce = function (callback, initValue) {
  let res = initValue === undefined ? this[0] : initValue
  for (let i = 0; i < this.length; i++) {
    res = callback(res, this[i], i, this)
  }
  return res
}
console.log(
  [1, 2, 3].myreduce((acc, val) => {
    return acc + val
  }, 0)
) //6
