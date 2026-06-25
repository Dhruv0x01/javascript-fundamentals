// super => keyword is used in classes to call the constructor or access the properties and methods of a parent (superclass)
//                  this = this object
//                  super = the parent


// We need to call super() within the child's class constructor then we can use the this keyword in child constructor
// By calling super() within child constructor, we end up calling constructor of parent class
// After that only this keyword will work in child contructor


// If there is any property that all children share, we can just send it to parent class to avoid repetition of code
// But we do need to pass those arguments to parent constructor



class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    // name and age are settled in the contructor of parent class(current class) hence we used it as this.
    
    // speed is settled for each child class in there, so we accept a speed -> and when we call this inside child class
    move(speed){
        console.log(`This ${this.name} at a ripe age of ${this.age} moves at a speed of ${speed} km/hr`);
    }

}

// Child class constructor argument accepts name, age, run/swim/fly Speed
// Any property they(child class) share in common, we can send it to parent constructor by passing those arguments inside the super()

class Rabbit extends Animal{
    constructor(name, age, runSpeed){
        super(name, age); // sending name and age argument to parent class
        this.runSpeed = runSpeed;
    }

    run(){
        console.log(`This ${this.name} can run`);

        // To use method from a parent class we use super
        super.move(this.runSpeed);
    }

}

class Fish extends Animal{
    constructor(name, age, swimSpeed){
        super(name, age); // sending name and age argument to parent class
        this.swimSpeed = swimSpeed;
    }

    swim(){
        console.log(`This ${this.name} can swim`);
        super.move(this.swimSpeed);
    }
    
}

class Hawk extends Animal{
    constructor(name, age, flySpeed){
        super(name, age); // sending name and age argument to parent class
        this.flySpeed = flySpeed;
    }

    fly(){
        console.log(`This ${this.name} can fly`);
        super.move(this.flySpeed);
    }
    
}

const rabbit = new Rabbit("rabbit", 21, 55);
const fish = new Fish("fish", 24, 78);
const hawk = new Hawk("hawk", 27, 51);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);

console.log(fish.name);
console.log(fish.age);
console.log(fish.swimSpeed);

console.log(hawk.name);
console.log(hawk.age);
console.log(hawk.flySpeed);

rabbit.run();
fish.swim();
hawk.fly();