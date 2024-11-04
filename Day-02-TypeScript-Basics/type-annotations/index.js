"use strict";
// Examples of Type Annotations (Basic Types)
const firstName = "Nageshwar";
const lastName = "Pawar";
let age = 27;
let isStudent = false;
age = 28;
isStudent = true;
console.log(`${firstName} ${lastName} is ${age} years old. He is a student: ${isStudent}`);
// string
const userName = "Nageshwar1997";
const greetings = `Hello ${userName}`;
console.log(greetings);
// number
const count = 10;
const price = 9.99;
console.log(`Count: ${count}, Price: ${price}`);
// any
let randomValue = "Hello";
randomValue = true;
randomValue = 12;
console.log(`Random Value: ${randomValue}`);
// void
function logMessage(message, name) {
    console.log(`${message} ${name}`);
}
logMessage("Hello", `${firstName} ${lastName}`);
// null
let nullValue = null;
console.log("Null Value: ", nullValue);
// undefined
let undefinedValue = undefined;
console.log("Undefined Value: ", undefinedValue);
// never
function throwError(message) {
    throw new Error(message);
}
// throwError("Something went wrong");
function infiniteLoop() {
    while (true) {
        console.log("This loop will run forever!");
    }
}
// infiniteLoop();
// unknown
let randomValue2 = "Hello";
randomValue2 = true;
randomValue2 = 12;
console.log(`Random Value: ${randomValue2}`);
// Type Inference
let score = 100; // TypeScript infers that 'score' is of type 'number'
let message = "TypeScript is awesome"; // 'message' is inferred as 'string'
console.log(`Score: ${score}, Message: ${message}`);
// Working with Arrays
let numbers = [1, 2, 3, 4, 5];
let fruits = ["apple", "banana", "orange"];
let booleans = [true, false, true];
let mixed = [
    1,
    "hello",
    true,
    2,
    "world",
    false,
];
let users = [
    { name: "Nageshwar", age: 27 },
    { name: "Manjusha", age: 24 },
];
let employees = [
    { name: "Nageshwar", age: 27 },
    { name: "Manjusha", age: 24 },
];
console.log(`Numbers: ${numbers}`);
console.log(`Fruits: ${fruits}`);
console.log(`Booleans: ${booleans}`);
console.log(`Mixed: ${mixed}`);
console.log(`Users: ${users}`);
console.log(`Employees: ${employees}`);
// Working with Tuple Types
let person = ["Nageshwar", 27, true];
console.log(typeof person);
console.log(person); // ['Nageshwar', 27, true]
console.log(`Person: ${person}`); // Person: Nageshwar, 27, true
console.log(`Name: ${person[0]}, Age: ${person[1]}, Is Student: ${person[2]}`); // Name: Nageshwar, Age: 27, Is Student: true
// Working with Enumerations (Enums)
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Pink"] = 3] = "Pink";
})(Color || (Color = {}));
let myFavColor1 = Color.Red;
let myFavColor2 = Color.Blue;
let myFavColor3 = Color.Green;
let myFavColor4 = Color === null || Color === void 0 ? void 0 : Color.Pink;
console.log(`My Favourite Color: ${myFavColor1}`); // My Favourite Color: 0
console.log(`My Favourite Color: ${myFavColor2}`); // My Favourite Color: 2
console.log(`My Favourite Color: ${myFavColor3}`); // My Favourite Color: 1
console.log(`My Favourite Color: ${myFavColor4}`); // My Favourite Color: 3
var Role;
(function (Role) {
    Role["Admin"] = "ADMIN";
    Role["User"] = "USER";
    Role["Guest"] = "GUEST";
    Role["Master"] = "MASTER";
})(Role || (Role = {}));
let userRole = Role.Admin;
console.log(`User Role: ${userRole}`);
userRole = Role.Master;
console.log(`User Role: ${userRole}`);
userRole = Role.User;
console.log(`User Role: ${userRole}`);
userRole = Role.Guest;
console.log(`User Role: ${userRole}`);
