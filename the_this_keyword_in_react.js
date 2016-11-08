/*
  - Implicit Binding
  - Explicit Binding
  - New Binding
  - Window binding
*/

// Implicit Binding
// Left of th eDot at Call Time

// var me = {
//   name: 'Oscar',
//   age: '31',
//   sayName: function () {
//     console.log(this.name)
//   }
// }
// me.sayName()

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// var sayNameMixin = function (obj) {
//   obj.sayName = function () {
//     console.log(this.name)
//   }
// }

// var me = {
//   name: 'Oscar',
//   age: 31
// }

// var you = {
//   name: 'Dulce',
//   age: 30
// }

// sayNameMixin(me)
// sayNameMixin(you)

// me.sayName()
// you.sayName()

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// var Person = function (name, age) {
//   return {
//     name: name,
//     age: age,
//     sayName: function () {
//       console.log(this.name)
//     },
//     mother: {
//       name: 'Stacey',
//       sayName: function () {
//         console.log(this.name)
//       }
//     }
//   }
// }

// var jim = Person('Jim', 22)
// jim.sayName()
// jim.mother.sayName()

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Explicit Binding
// call, apply, bind

// var sayName = function () {
//   console.log('My name is ' + this.name)
// }
//
// var stacy = {
//   'name': 'Stacy',
//   age: 55
// }
//
// sayName.call(stacy)

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// var sayName = function (lang1, lang2, lang3) {
//   console.log('My name is ' + this.name + ' and I know ' + lang1 + ' ' + lang2 + ' ' + lang3);
// }
//
//
// var stacy = {
//   name: 'Stacy',
//   age: 54
// }
//
// var languages = ['Javascript', 'Ruby', 'Python']
//
// sayName.call(stacy, languages[0], languages[1], languages[2])

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// var sayName = function (lang1, lang2, lang3) {
//   console.log('My name is ' + this.name + ' and I know ' + lang1 + ' ' + lang2 + ' ' + lang3);
// }

// var stacy = {
//   name: 'Stacy',
//   age: 54
// }

// var languages = ['Javascript', 'Ruby', 'Python']

// var newFn = sayName.bind(stacy, languages[0], languages[1], languages[2])
// console.log('HERE')
// newFn()

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// New Binding
// 
// var Animal = function (color, name, type) {
//   this.color = color
//   this.name = name
//   this.type = type
// }
//
// var zebra = new Animal('black and white', 'zorro', 'zebra')


// Window Binding
// var sayAge = function () {
//
//   console.log(this.age)
// }
//
// var me = {
//   age: 25
// }
//
// sayAge()
// window.age = 35
// sayAge()
