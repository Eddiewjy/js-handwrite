//一个大类，有订阅，发布，取消订阅三个方法。
//通过一个大的obj存储，key是事件名，value是一个数组，存储所有订阅这个事件的函数。订阅和取消的入参是key-val，发布是key-agrs。
class EventEmiiter {
  constructor() {
    this.events = {}
  }
  on(name, callback) {
    if (!this.events[name]) {
      this.events[name] = []
    }
    this.events[name].push(callback)
  }
  emit(name, ...args) {
    if (this.events[name]) {
      this.events[name].forEach((callback) => {
        callback(...args)
      })
    }
  }
  off(name, callback) {
    if (!this.events[name]) return
    this.events[name] = this.events[name].filter((cb) => cb !== callback)
  }
}

let emitter = new EventEmiiter()
emitter.on(
  'event1',
  (cb = (data) => {
    console.log('event1 triggered with data:', data)
  })
)
emitter.emit('event1', 'hello')
emitter.off('event1', cb)
emitter.emit('event1', 'hello again') // 不会输出，因为已经取消订阅了
