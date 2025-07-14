function mynew(constructFn, ...args) {
  let newObj = Object.create(constructFn.prototype) //创建一个新对象，原型指向构造函数的原型
  let result = constructFn.apply(newObj, args) //调用构造函数，this指向新对象
  return result instanceof Object ? result : newObj //如果构造函数返回的是对象，则返回该对象，否则返回新对象
}

function Person(name, age) {
  this.name = name
  this.age = age
}

const person = mynew(Person, 'Alice', 30)
console.log(person.age) // 输出: Person { name: 'Alice', age: 30 }
