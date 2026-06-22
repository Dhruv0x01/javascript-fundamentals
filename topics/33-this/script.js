// this = reference to the object where THIS is used
// the object depends on the immediate context
// person.name = this.name

// this keyword doesn't work with arrow functions () => {}
// this keyword works with normal functions


// person object, name property => We have a person object and we are accesing its name property
// We can replace person with 'this' as long as we are in context of that person object

const person1 = {
    name: "Dhruv",
    favFood: "burgers",
    sayHello: function(){console.log(`Hi! I am ${this.name}`)}, 
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
}
// inside the object of person1, if i would like to access one of its property, i need to use `this`
// it won't work if i just wrote name there instead of this.name
// btw person1.name would work , hence `this` is used instead of objectName so we dont have to change it all the time or for short
// 'this' is the reference to the object we are within

person1.sayHello();
person1.eat();



const person2 = {
    name: "Godzilla",
    favFood: "pancake",
    sayHello: function(){console.log(`Hi! I am ${this.name}`)},  
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
}

person2.sayHello();
person2.eat();

// Good thing about `this` is we don't need to manually change object name inside the methods like sayHello or eat
// We can just use `this` and it will refer to the object it is currently in


// this keyword doesn't work with arrow functions
const person3 = {
    name: "Ravi",
    favFood: "Chole Bhature",
    sayHello: function(){console.log(`Hello! I am ${this.name}`)},
    eat: () => console.log(`${this.name} is eating ${this.favFood}`) // this keyword doesn't work with arrow functions
}

person3.sayHello();
person3.eat();


// When you use `this` in an arrow function, you are making reference to the window object
// our window object does have a name that's why it is appearing empty
// but it doesn't have favFood property so it says undefined



