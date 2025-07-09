class Observed {
  constructor() {
    this.observers = []
  }
  addObserver(observer) {
    //添加观察者
    this.observers.push(observer)
  }
  notify() {
    //通知观察者变更
    this.observers.forEach((observer) => observer.update())
  }
}

class Observer {
  constructor(name) {
    this.name = name
  }
  update() {
    //观察者更新方法
    console.log(`${this.name} has been notified of a change.`)
  }
}

let actor = new Observed()
let wacther1 = new Observer('Watcher 1')
let wacther2 = new Observer('Watcher 2')
actor.addObserver(wacther1)
actor.addObserver(wacther2)
actor.notify() // 输出: Watcher 1 has been notified of a change. Watcher
