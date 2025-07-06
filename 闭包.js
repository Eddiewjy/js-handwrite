function outer() {
  const x = 10

  //普通函数
  const normalFn = function () {
    console.log(x) //形成作业
    console.log(this) //自己的this
  }

  //箭头函数
  const arrowFn = () => {
    console.log(x) //同样形成闭包
    console.log(this) //继承自outer的this
  }

  return { normalFn, arrowFn }
}

const obj = outer()
obj.normalFn() //this指向obj
obj.arrowFn() //this指向outer
