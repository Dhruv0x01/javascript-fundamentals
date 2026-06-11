// Objects = A collection of related properties and/or methods 
//           Can represent real world objects (people, products, places)
//           object = {key:value, 
//                     function()
//           };

// properties are the things that an object has - firstName, lastName, age and so on
// method is a function that belongs to an object - sayHello, sayBye

// Objects can't have same name(hence person1 and person2)
// const is not necessary
const person1 = {
    firstName: `Dhruv`,
    lastName: `Darad`,
    age: 21,
    isEmployed: false,
    sayHello: function(){console.log(`Hi! I am dhruv`)}, // function expression
    sayBye: function(){console.log(`Byee!! dhruv is out`)},
    eat: function(){console.log(`I am eating sandwich`)}
};

const person2 = {
    firstName: `Patrick`,
    lastName: `Agarwal`,
    age: 15,
    isEmployed: true,
    sayHello: () => console.log(`Hii, I am Patrick Agarwal`), // arrow function
    sayBye: () => console.log(`Byeee, Agarwals going back!!`),
    eat: () => console.log(`I eat burger`)
};

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);
person1.sayHello(); // function don't need console.log
person1.sayBye(); 
person1.eat();

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);
person2.sayHello();
person2.sayBye();
person2.eat();

