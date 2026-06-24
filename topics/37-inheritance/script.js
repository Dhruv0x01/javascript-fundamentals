// Inheritance => allows a new class to inherit properties and methods from an existing class
//                (parent -> child)
//                helps with code reusability

// Syntax to create child class
// class childClass extends parentClass{ }

// Parent class
class Animal{
    alive = true;

    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}

// Child class Rabbit
class Rabbit extends Animal{
    name = "rabbit";
    run(){
        console.log(`This ${this.name} is running`);
    }
}

// Child class Fish
class Fish extends Animal{
    name = "fish";
    swim(){
        console.log(`This ${this.name} is swimming`);
    }
}

// Child class Hawk
class Hawk extends Animal{
    name = "hawk";
    fly(){
        console.log(`This ${this.name} is flying`);
    }
}

// created objects for the child class 
const rabbit1 = new Rabbit; 
const fish1 = new Fish;
const hawk1 = new Hawk;

// object of the child class could access parent class non static properties
console.log(rabbit1.alive); 
rabbit1.eat();
rabbit1.sleep();
rabbit1.run(); // A method exclusive to rabbit class (child class)

console.log(fish1.alive);
fish1.eat();
fish1.sleep();
fish1.swim(); // A method exclusive to fish class (child class)

console.log(hawk1.alive);
hawk1.eat();
hawk1.sleep();
hawk1.fly(); // A method exclusive to hawk class (child class)

//fish1.run(); // doesn't work as child class fish can't access method of another child class rabbit




