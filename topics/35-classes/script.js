// class = (ES6 feature) provides a more structured and cleaner way to work with objects
//         compared to traditional constructor functions
//         eg. static keyword, encapsulation, inheritance  // classes will be really useful for these topics


// To use constructor within our class, we use constructor keyword
// Inside of the class, you dont need to use function keyword to create function
class Product{

    // Constructor to set values
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    // Function (can be created without function keyword when inside class)
    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`); // .toFixed() is to have decimal point upto 2 digits
    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}

// Creating object for the above class, constructor will be called automatically but we need to pass in arguments
// product1 is an object we created in the class Product using new keyword


const salesTax = 0.05; // 5% sales tax
const product1 = new Product("T-Shirt", 199.99);
const product2 = new Product("Compressed Shirt", 299.75);
const product3 = new Product("Jeans", 150.25);


//product1.displayProduct();
//product2.displayProduct();
product3.displayProduct();


const total = product3.calculateTotal(salesTax);
console.log(`Total price (with tax): $${total.toFixed(2)}`);





