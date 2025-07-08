//类数组概念：带有 length 属性和索引元素的对象
//可迭代概念：带有 Symbol.iterator 属性的对象，实现了迭代器协议https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols
const notArrayLike = {
  0: 'a',
  1: 'b',
  2: 'c'
} //不是类数组对象，没有 length 属性
const arrayLike_notIter = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3
} //不可迭代对象，参考https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator
const arrayLike_iterable = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3,
  [Symbol.iterator]: function* () {
    for (let i = 0; i < this.length; i++) {
      yield this[i]
    }
  }
} //类数组，且可迭代
function arrayLikeToArray1(arrLike) {
  return [...arrLike] //...的条件是可迭代
}

function arrayLikeToArray2(arrLike) {
  return Array.from(arrLike) //条件是类数组或可迭代
}
function arrayLikeToArray3(arrLike) {
  return Array.prototype.slice.call(arrLike) //让this指向arrLike,slice方法只检查索引和length属性，故可以这么搞
}
// 测试
const result = arrayLikeToArray3(arrayLike_iterable)
console.log(result) // 输出: [a, b, c]
