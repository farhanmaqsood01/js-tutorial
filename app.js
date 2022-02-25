//let & arrow function

/*function myName() {
    console.log("Farhan");
}
myName();

let sayName = (name) => {
    console.log(name);
}
sayName('farhan');

let myName = name => {
    return name;
}
console.log(myName('Farhan'));

let myName = name => name;
console.log(myName('Farhan'));

let double = num => num*2
console.log(double(10)); */

// Export and Import (Modules)

/* import {hello} from './sell.js';
import {data} from './sell.js';
import * as bundle  from "./sell.js";


bundle.hello();
console.log(bundle.data);

import ps from "./customer.js"

console.log(ps); */

//class and object

 /* class Customer{
    constructor(n){
        this.name = n;
    }
    age = 25;
    buy = () => {
        console.log(this.name)
    }
}

class guestCustomer extends Customer{
    hello(){
        console.log("hello");
    }
}

let customer1 = new guestCustomer("Farhan");

console.log(customer1);

customer1.buy(); */

//spread and rest operator(...)

/* let list = ["Suzuki" , "Toyota" , "Audi" , "Ferrari" , "Ford"]

let newList = ["BMW", ...list]

 console.log(newList);

let person = {
    name: "Farhan",
    age: 28,
}

let newPerson = {
    ...person,
    city: "Karachi"
}

console.log(newPerson)

function hello(... all){
    console.log(all)
}
hello(1,2,3) */

//Array Destructuring

/* let list = ["Audi" , "BMW" , "Suzuki"];

let [car1 , , car2 ] = list;

console.log(car2); */

//Object Destructuring

/* const person = {
    name: 'Farhan',
    age: 25
}

let {name , age} = person;

console.log(name) */

