function shalowClone(obj) {
  const newObj = {}
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      //hasOwnProperty 检查是否为对象自身的属性,而不是原型链上的属性
      newObj[key] = obj[key] //共享引用地址
    }
  }
  return newObj
}
//深拷贝的讲究比较多，假如要处理的对象可序列化，那么直接JSON.parse(JSON.stringify(obj))就可以了；但是有许多数据，比如函数，Symbol，
function deepClone(obj) {
  let cache = new Map()
  function _deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
      // 如果是基本类型或 null，直接返回
      return obj
    }
    if (cache.has(obj)) {
      // 如果已经缓存过，直接返回缓存的值，这一步是为了处理循环引用；如果没有缓存，循环引用将一直递归直到溢出
      return cache.get(obj)
    }
    const res = Array.isArray(obj) ? [] : {} //判断是数组还是对象
    for (let key in obj) {
      cache.set(obj, res) //缓存当前对象
      res[key] = _deepClone(obj[key]) //递归调用
    }
    return res
  }
  return _deepClone(obj) //调用内部函数
}

const obj = {
  arr: [],
  a: 4
}
obj.arr.push(obj) //循环引用
const obj2 = deepClone(obj)
console.log(obj2) // 输出: { arr: [Circular], a: 4 }
