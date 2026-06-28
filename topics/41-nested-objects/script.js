// nested objects = Objects inside of another objects.
//                  Allows you to represent more complex data structures.
//                  Child object is enclosed by a parent object

//                  Person{Address{}, ContactInfo{}}
//                  ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}


/*
// Example 1


const person = {
    fullName: "Dhruv Darad",
    age: 21,
    isStudent: true,
    hobbies: ["gaming", "walking", "coding"],

    address: {
        street: "1234 Church street",
        houseNo: 86,
        city: "Patna",
        country: "India",
        pinCode: 800001
    },

    contactInfo: {
        number: 9102911581,
        email: "dhruvdarad04@gmail.com",
        x: "@heyimdhruv"
    }
}

console.log(person.fullName);
console.log(person.age);
console.log(`Student? ${person.isStudent}`);

console.log(`Hobbies: ${person.hobbies}`);
console.log(person.hobbies[1]);


console.log(person.address.street);
console.log(person.address.houseNo);
console.log(person.address.city);
console.log(person.address.country);
console.log(person.address.pinCode);

console.log(person.contactInfo.number);
console.log(person.contactInfo.email);
console.log(person.contactInfo.x);


// To loop through the properties of a nested object
for(const property in person.address){
    console.log(person.address[property]);
}

for(const property in person.contactInfo){
    console.log(person.contactInfo[property]);
}

*/


// Example 2

class Person{

    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address{

    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }

}


const person11 = new Person("Dhruv", 21, "boring road", "Patna", "India");

console.log(person11.name);
console.log(person11.age);
console.log(person11.address);

console.log(person11.address.street);
console.log(person11.address.city);
console.log(person11.address.country);




// Example 3

class College{
    
    constructor(collegeName, collegeLocation, ...collegeGrades){
        this.collegeName = collegeName;
        this.collegeLocation = collegeLocation;
        this.collegeGrades = new CollegeGrades(...collegeGrades);
    }
}

class CollegeGrades{

    constructor(sem1, sem2, firstYearCgpa){
        this.sem1 = sem1;
        this.sem2 = sem2;
        this.firstYearCgpa = firstYearCgpa;
    }
}


const person1 = new College("IILM", "Greater Noida", 8.95, 9.91, 9.43);
const person2 = new College("IIT Bombay", "Mumbai", 4.5, 2.3, 3.4);


console.log(person1.collegeName);
console.log(person1.collegeLocation);
console.log(person1.collegeGrades);

console.log(person1.collegeGrades.sem1);
console.log(person1.collegeGrades.sem2);
console.log(person1.collegeGrades.firstYearCgpa);


console.log(person2.collegeName);
console.log(person2.collegeLocation);
console.log(person2.collegeGrades);

console.log(person2.collegeGrades.sem1);
console.log(person2.collegeGrades.sem2);
console.log(person2.collegeGrades.firstYearCgpa);