// Javascript is a Interpreted Language
// It take to work on single thread cpu
// It has a Special power garbage collector that automatically manage allocation and deallocation through garbage collection

//Variable in JS 
let x = 5;
const y = 1;
var isStudent = false;
console.log(x, y, isStudent);

//DataType In JS
let number = 42;             // Number
let string = "Hello World";  // String
let isActive = false;        // Boolean
let numbers = [1, 2, 3];     // Array   

//Operator
let sum = 10 + 5;          // Arithmetic operator
let isEqual = (10 === 10); // Comparison operator
let isTrue = (true && false); // Logical operator   

//Function

function greet(name) {          // Function declaration
    return "Hello, " + name;
}


let message = greet("John"); // "Hello, John"       // Function call

//Conditional Statement in JS
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}


// For loop
for (let i = 0; i < 5; i++) {
    console.log(i); // Outputs 0 to 4
}

// While loop
let j = 0;
while (j < 5) {
    console.log(j); // Outputs 0 to 4
    j++;
}

//Objects
let user = {
	name: "Prince",
	age: 19
}

console.log("Prince age is " + user.age);

//Array
const users = ["harkirat", "raman", "diljeet"];
const tatalUsers = users.length;
const firstUser = users[0];

//Array Objects
const users = [{
		name: "Harkirat",
		age: 21
	}], {
		name: "raman",
		age: 22
	}
}

const user1 = users[0] 
const user1Age = users[0].age



// Object of Objects
const user1 = {
	name: "harkirat",
	age: 19,
	address: {
		city: "Delhi",
		country: "India",
		address: "1122 DLF"
	}
}

const city = user1.address.city;