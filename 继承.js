//原型链继承
function NBA() {
  this.teams = ['Lakers', 'Cavaliers']
}
NBA.prototype.getTeam = function () {
  return this.teams
}
function Player() {}
Player.prototype = new NBA()

let lebron = new Player()
lebron.teams.push('Heat') //所有实例的teams都被修改
let james = new Player()
console.log(lebron.getTeam()) // ['Lakers', 'Cavaliers', 'Heat']

//构造函数继承
function NBA2() {
  this.teams = ['Lakers', 'Cavaliers']
}
function Player2() {
  NBA2.call(this) // 调用父类构造函数
}
let lebron2 = new Player2()
lebron2.teams.push('Heat') //只有这个实例的teams被修改
let james2 = new Player2()
console.log(lebron2.teams) // ['Lakers', 'Cavaliers', 'Heat']
console.log(james2.teams) // ['Lakers', 'Cavaliers']

//组合继承
function NBA3() {
  this.teams = ['Lakers', 'Cavaliers']
}
NBA3.prototype.getTeam = function () {
  return this.teams
}
function Player3(position) {
  NBA3.call(this) // 父类构造函数
  this.position = position
}
Player3.prototype = new NBA3() // 父类原型
Player3.prototype.constructor = Player3 // 修正构造函数指向
let lebron3 = new Player3('Forward')
lebron3.teams.push('Heat') //只有这个实例的teams被修改
let james3 = new Player3('Guard')
console.log(lebron3) //{ teams: [ 'Lakers', 'Cavaliers', 'Heat' ], position: 'Forward' }
console.log(james3) //{ teams: [ 'Lakers', 'Cavaliers' ], position: 'Guard' }
