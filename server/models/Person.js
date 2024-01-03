const mongoose = require('mongoose')
const Schema = mongoose.Schema

const personSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: String,
    age: Number
})

const Person = mongoose.model("person", personSchema)
module.exports = Person







// const mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost:27017/peopleDB', { useNewUrlParser: true })

// const Schema = mongoose.Schema
// const personSchema = new Schema({
//   firstName: String,
//   lastName: String,
//   age: Number
// })
// const Person = mongoose.model('person', personSchema)

// let p1 = new Person({ firstName: "David", lastName: "Smith", age: 25}) //purposefully ignoring the `address` field
// p1.save()
// console.log(p1)

// Person.find({}).then(function (people) {
//     console.log(people)
// })
// let peoplePromise = Person.find({})

// peoplePromise.then(function (people) {
//     console.log(people)
// })
// .catch((err)=>console.log(err))


// let p2 = new Person({ firstName: "Shoo", lastName: "Bert", age: 50 })
// let p3 = new Person({ firstName: "Shoob", lastName: "Ert", age: 34 })
// let p4 = new Person({ firstName: "Sh", lastName: "Oobert", age: 10 })
// let p5 = new Person({ firstName: "Shoober", lastName: "T", age: 44 })

// let allTheShooberts = [p2, p3, p4, p5]
// allTheShooberts.forEach(s => s.save())

// Person.findByIdAndDelete("659437aefe26a1d30ad4d6fe").then((person)=>{
//     console.log(person)
//   })






// mongoose.connect('mongodb://localhost/computerDB')

// const Schema = mongoose.Schema

// const computerSchema = new Schema({
//     maker: String,
//     price: Number
// });

// const Computer = mongoose.model("Computer", computerSchema)

// let c1 = new Computer({ maker: "HP", price: 1300 })
// let c2 = new Computer({ maker: "Apple", price: 3900 })

// c1.save().then( () => c2.save ).then(() => {
// 	mongoose.connection.close()
// })














