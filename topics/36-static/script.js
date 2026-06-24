// static = keyword that defines properties or methods that belong
//          to a class itself rather than the objects created
//          from that class 
//          (class owns anything static, not the objects)


// In javaScript, you can't write static outside any class

// Example 1
class MathUtilities{
    static PI = 3.14159;

    static getDiameter(radius){
        return radius*2;
    }

    static getCircumference(radius){
        return 2*this.PI*radius;
    }

    static getArea(radius){
        return this.PI * Math.pow(radius, 2);
    }
}

console.log(MathUtilities.PI);
// Since anything static belongs to the class itself, hence to access the static variable, we accessed it directly through the class
// we didn't need to create any object to access it

console.log(MathUtilities.getDiameter(5));
// Again a static method hence we can access it through the class directly without creating object

console.log(MathUtilities.getCircumference(5));

console.log(MathUtilities.getArea(10));





// Example 2

class User{
    static userCount = 0; // belongs to the class itself and not to any specific object
    // Hence to access userCount we would need to use Class.userCount

    // Automatically called when creating an object
    constructor(userName){
        this.userName = userName; // In this specific object, we added a member of userName
        User.userCount++; // count increased by one, User.userCount as it is static and hence belong to the class itself
    }

    // non static property -> hence belong to each object
    sayHello(){
        console.log(`Hello everyone! I am ${this.userName}`);
    }

    static getUserCount(){
        console.log(`Total members: ${User.userCount}`);
    }

}

const user1 = new User("Dhruv");
const user2 = new User("Usha");
const user3 = new User("Steve");
const user4 = new User("Bill");

// these userName are a variable of that specific object as we used this.userName 
// Hence we accessed it through their object
console.log(user1.userName);
user1.sayHello(); // non static property -> hence we accessed it through individual object

console.log(user2.userName);
user2.sayHello();

console.log(user3.userName);
user3.sayHello();

console.log(user4.userName);
user4.sayHello();


// userCount is static -> belong to class itself -> hence we accessed it using class 
console.log(User.userCount);

// tellCount() is a static member -> belong to class itself -> hence we accessed it through class
User.getUserCount();