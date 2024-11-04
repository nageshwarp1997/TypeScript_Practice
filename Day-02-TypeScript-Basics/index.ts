// Examples of Type Annotations (Basic Types)

const firstName: string = "Nageshwar";
const lastName: string = "Pawar";
let age: number = 27;
let isStudent: boolean = false;

age = 28;

isStudent = true;

console.log(
  `${firstName} ${lastName} is ${age} years old. He is a student: ${isStudent}`
);

// string
const userName: string = "Nageshwar1997";

const greetings: string = `Hello ${userName}`;

console.log(greetings);

// number
const count: number = 10;
const price: number = 9.99;

console.log(`Count: ${count}, Price: ${price}`);

// any
let randomValue: any = "Hello";
randomValue = true;
randomValue = 12;

console.log(`Random Value: ${randomValue}`);

// void
function logMessage(message: string, name: string): void {
  console.log(`${message} ${name}`);
}

logMessage("Hello", `${firstName} ${lastName}`);

// null
let nullValue: null = null;

console.log("Null Value: ", nullValue);

// undefined
let undefinedValue: undefined = undefined;

console.log("Undefined Value: ", undefinedValue);

// never
function throwError(message: string): never {
  throw new Error(message);
}

// throwError("Something went wrong");

function infiniteLoop(): never {
  while (true) {
    console.log("This loop will run forever!");
  }
}

// infiniteLoop();

// unknown
let randomValue2: unknown = "Hello";
randomValue2 = true;
randomValue2 = 12;

console.log(`Random Value: ${randomValue2}`);

// Type Inference
let score = 100; // TypeScript infers that 'score' is of type 'number'
let message = "TypeScript is awesome"; // 'message' is inferred as 'string'

console.log(`Score: ${score}, Message: ${message}`);

// Working with Arrays

let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: string[] = ["apple", "banana", "orange"];
let booleans: boolean[] = [true, false, true];
let mixed: (number | string | boolean)[] = [
  1,
  "hello",
  true,
  2,
  "world",
  false,
];
let users: { name: string; age: number }[] = [
  { name: "Nageshwar", age: 27 },
  { name: "Manjusha", age: 24 },
];

let employees: Array<{ name: string; age: number }> = [
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

let person: [string, number, boolean] = ["Nageshwar", 27, true];

console.log(typeof person);

console.log(person); // ['Nageshwar', 27, true]
console.log(`Person: ${person}`); // Person: Nageshwar, 27, true
console.log(`Name: ${person[0]}, Age: ${person[1]}, Is Student: ${person[2]}`); // Name: Nageshwar, Age: 27, Is Student: true

// Working with Enumerations (Enums)

enum Color {
  Red,
  Green,
  Blue,
  Pink,
}

let myFavColor1: Color = Color.Red;
let myFavColor2: Color = Color.Blue;
let myFavColor3: Color = Color.Green;
let myFavColor4: Color = Color?.Pink;

console.log(`My Favourite Color: ${myFavColor1}`); // My Favourite Color: 0
console.log(`My Favourite Color: ${myFavColor2}`); // My Favourite Color: 2
console.log(`My Favourite Color: ${myFavColor3}`); // My Favourite Color: 1
console.log(`My Favourite Color: ${myFavColor4}`); // My Favourite Color: 3

enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST",
  Master = "MASTER",
}

let userRole: Role = Role.Admin;
console.log(`User Role: ${userRole}`);

userRole = Role.Master;
console.log(`User Role: ${userRole}`);

userRole = Role.User;
console.log(`User Role: ${userRole}`);

userRole = Role.Guest;
console.log(`User Role: ${userRole}`);
