//TODO 1. Working with Objects

//* a. Defining an Object with Types
const person: { name: string; age: number; isStudent: boolean } = {
  name: "Nageshwar",
  age: 27,
  isStudent: true,
};

console.log(
  `Name: ${person.name}, Age: ${person.age}, Is Student: ${person.isStudent}`
);

//* b. Nested Objects

const employee: {
  id: number;
  name: string;
  position: {
    title: string;
    department: string;
  };
} = {
  id: 1,
  name: "Nageshwar",
  position: {
    title: "Software Engineer",
    department: "Engineering",
  },
};

console.log(
  `ID: ${employee.id}, Name: ${employee.name}, Title: ${employee.position.title}, Department: ${employee.position.department}`
);

//TODO 2. Working with Interfaces

//* a. Defining an Interface
interface Person {
  name: string;
  age: number;
  isStudent: boolean;
}

const person2: Person = {
  name: "Nageshwar",
  age: 27,
  isStudent: true,
};

console.log(
  `Name: ${person2.name}, Age: ${person2.age}, Is Student: ${person2.isStudent}`
);

//* b. Interface with Nested Objects
interface Employee {
  id: number;
  name: string;
  position: {
    title: string;
    department: string;
  };
}

const employee2: Employee = {
  id: 1,
  name: "Nageshwar",
  position: {
    title: "Software Engineer",
    department: "Engineering",
  },
};

console.log(
  `ID: ${employee2.id}, Name: ${employee2.name}, Title: ${employee2.position.title}, Department: ${employee2.position.department}`
);

//* c. Optional Properties
interface Car {
  make: string;
  model: string;
  year?: number;
}

const car: Car = {
  make: "Toyota",
  model: "Camry",
};

console.log(`Make: ${car.make}, Model: ${car.model}, Year: ${car.year}`);

const car2: Car = {
  make: "Toyota",
  model: "Camry",
  year: 2022,
};

console.log(`Make: ${car2.make}, Model: ${car2.model}, Year: ${car2.year}`);

//* d. Readonly Properties
interface Book {
  readonly title: string;
  author: string;
  readonly pages: number;
}

const book: Book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  pages: 180,
};

//! book.title = "The Catcher in the Rye"; // Error: Cannot assign to 'title' because it is a read-only property

console.log(
  `Title: ${book.title}, Author: ${book.author}, Pages: ${book.pages}`
);

// TODO 3. Function Types in Interfaces

interface MathOperations {
  (a: number, b: number): number; // Function signature
}

const add: MathOperations = (a, b) => {
  return a + b;
};

console.log(add(1, 2));

const sub: MathOperations = (a, b) => a - b;

console.log(sub(1, 2));

const multiply: MathOperations = (a, b) => a * b;

console.log(multiply(1, 2));

// TODO 4. Extending Interfaces

interface Person {
  name: string;
  age: number;
  isStudent: boolean;
}

interface Student extends Person {
  studentId: number;
}

const student: Student = {
  name: "Nageshwar",
  age: 27,
  isStudent: true,
  studentId: 1,
};

console.log(
  `Name: ${student.name}, Age: ${student.age}, Is Student: ${student.isStudent}, Student ID: ${student.studentId}`
);

// TODO 5. Intersection Types

interface CanSwim {
  swim: () => void;
}

interface canFly {
  fly: () => void;
}

type SuperHero = CanSwim & canFly;

let hero: SuperHero = {
  swim: () => console.log("Swimming"),
  fly: () => console.log("Flying"),
};

hero.swim();
hero.fly();

// TODO 6. Index Signatures

interface StringDictionary {
  [key: string]: string; // All keys must be strings & values must be strings
}

let translations: StringDictionary = {
  hello: "Hola",
  goodbye: "Adiós",
};

console.log(translations["hello"]);

//Todo 7. Type Aliases

type ID = number | string;

let userId: ID = 10;

userId = "Nageshwar@1997";

console.log("User ID: " + userId);

// TODO 8. Classes Implementing Interfaces

interface Shape {
  area: () => number;
}
class Circle implements Shape {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }
  area(): number {
    return Math.PI * this.radius ** 2;
  }
}

const myCircle = new Circle(5);

console.log(`Area: ${myCircle.area()}`);