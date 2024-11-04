//* 1. Function Type Annotations
function add(a: number, b: number): number {
  return a + b;
}

console.log(add(10, 20));

//* 2. Optional Parameters
function greet(name: string, greeting?: string): string {
  if (greeting) {
    return `${greeting}, ${name}`;
  } else {
    return `Hello, ${name}`;
  }

  // return greeting ? `${greeting}, ${name}!` : `Hello, ${name}`;
}

console.log(greet("Nageshwar"));
console.log(greet("Nageshwar", "Good Morning"));

//* 3. Default Parameters
function greet2(name: string, greeting: string = "Hello") {
  return `${greeting}, ${name}!`;
}

console.log(greet2("Nageshwar"));
console.log(greet2("Nageshwar", "Good Morning"));

//* 4. Function Overloading (Same function name with different parameters)
function add2(a: number, b: number): number;
function add2(a: string, b: string): string;
function add2(a: any, b: any): any {
  return a + b;
}

console.log(add2(10, 20));
console.log(add2("Nageshwar", "Pawar"));

//* 5 Arrow Functions
const square = (x: number) => x * x;
const square2 = (x: number) => {
  return x * x;
};

console.log(square(5));
console.log(square2(5));

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubleNumbers = numbers.map((number) => number * 2);
console.log(doubleNumbers);

//* 6. Rest Parameters
function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
console.log(sum(1, 2, 3, 4, 5));

//* 7. Spread Operator
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const doubleNumbers2 = [...numbers2, ...numbers2];
console.log(doubleNumbers2);

//* 8. Return Type Inference
function add3(a: number, b: number): number {
  return a + b;
}

console.log(add3(10, 20));

//* 9. void & never return types
function logMessage(message: string, name: string): void {
  console.log(`${message} ${name}`);
}

logMessage("Hello", "Nageshwar");

function throwError(message: string): never {
  throw new Error(message);
}

throwError("Something went wrong");

//* 10. Function Types
let myFunction: (a: number, b: number) => number;
myFunction = (x: number, y: number): number => x + y;

console.log(myFunction(5, 3));
