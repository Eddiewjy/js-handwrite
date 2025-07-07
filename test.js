const obj = {}
Object.defineProperty(obj, Symbol.toStringTag, { value: 'module' })
console.log(Object.prototype.toString.call(obj))
