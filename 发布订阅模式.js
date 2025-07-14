class EventEmitter {
  constructor() {
    this.events = {}
  }
  on(name, callback) {
    if (!this.events[name]) {
      this.events[name] = []
    }
    this.events[name].push(callback)
  }
  off(name, callback) {
    if (!this.events[name]) {
      return
    }
    this.events[name] = this.events[name].filter((fn) => fn !== callback) //移除指定事件的回调函数
  }
  emit(name, ...args) {
    if (!this.events[name]) {
      return
    }
    this.events[name].forEach((fn) => fn(...args)) //遍历执行所有回调函数
  }
}
let bus = new EventEmitter()
bus.on('test', (data) => {
  console.log('test event:', data)
})
bus.emit('test', { a: 1 }) // 输出: test event: { a: 1 }
bus.off('test', (data) => {
  console.log('test event:', data)
}) // 移除事件监听
bus.emit('test', { a: 2 })
