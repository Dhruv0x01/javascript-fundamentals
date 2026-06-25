// getter = special method that makes a property readable
// setter = special method that makes a property writeable

// validate and modify a value when reading/writing a property
// otherwise they might add -10000 as width and "pizza" as height 

// setter property is writable via set keyword, that is you can change it and write it to something else
// but you won't be able to read it, that is you won't be able to print it out unless you return it through getter

// to read it, we need to use getter
// we will return it through getter and then we will be able to console.log() that is print it normally


// While assigning values, even when you are intially creating an object -> you can go through the setters for input validation
// When you retrieve values and try to read them -> use getters and in getters you can add additional logic too

// We used constructor to initialize variables -> then used setters to validate them -> used getters to read them and add more logic if we want
// In setters and getters we added this._variable


// jin variables ka setter na banayo -> unke getter banane ki bhi jarurat nhi -> wo read ho jayege

class Rectangle{

    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    
    // setter for width
    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth; //using an _ prefix, it tells other developers that this is a private property, you shouldn't touch it at all
            // _width is different than our width 
        }else{
            console.error("Width must be a positive number");
        }
    }

    // setter for height 
    set height(newHeight){
        if(newHeight>0){
            this._height = newHeight;
        }else{
            console.error("Height must be a positive integer");
        }
    }

    get width(){
        return `${this._width.toFixed(2)} cm`;
    }

    get height(){
        return `${this._height.toFixed(2)} cm`;
    }

    get area(){
        return `${(this._height*this._width).toFixed(2)} cm^2`;
    }


}

const rectangle = new Rectangle(7.467, 20);

// we can update those values later -> but if it's wrong then it will give console.error and retain previous values
rectangle.width = 8.439;
rectangle.height = 10.225;

console.log(rectangle.width); // line 46 pe jo width hai usse ara ye
console.log(rectangle.height); // line 50 pe jo width hai usse ara ye
console.log(rectangle.area); // line 54 pe jo area hai usse ara ye





class Person{

    // constructor for initializing variables
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }


    // setters for firstName validation
    set firstName(newFirstName){
        if(typeof newFirstName === "string" && newFirstName.length > 0){
            this._firstName = newFirstName;
        }else{
            console.error(`First name must be a non-empty string`);
        }
    }

    // setters for lastName validation
    set lastName(newLastName){
        if(typeof newLastName === "string" && newLastName.length > 0){
            this._lastName = newLastName;
        }else{
            console.error(`Last name must be a non-empty string`);
        }
    }

    // setters for age validation
    set age(newAge){
        if(typeof newAge === "number" && newAge > 0){
            this._age = newAge;
        }else{
            console.error(`Age must be a positive integer`);
        }
    }


    // getter for first name
    get firstName(){
        return this._firstName;
    }

    // getter for last name
    get lastName(){
        return this._lastName;
    }

    // getters for age
    get age(){
        return `${this._age} years old`;
    }

    // additional logic
    get fullName(){
        return `${this._firstName} ${this._lastName}`;
    }

    get intro(){
        return `My name is ${this.fullName}. I am ${this.age}.`;
    }

}

const person = new Person("Dhruv", "Darad", 21);

person.firstName = 189; // trigger console.error and retain old value "Dhruv" 
person.age = "HAHAH";

console.log(person.firstName); 
console.log(person.lastName);
console.log(person.fullName);
console.log(person.age);
console.log(person.intro);




