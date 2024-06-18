// explicit types

let character: string;
let age: number;
let bool: boolean;

//arrays 
let fruits: string[] = [];

fruits = ['apple', 'orange'];
console.log(fruits);

// union types
let mixed: (string|number|boolean)[] = [];
mixed.push("hey");
mixed.push(1);
mixed.push(false);
console.log(mixed);

// can be a string or number
let uid: string|number;

uid = "123456789";
uid = 123;

//objects
let ninjaOne: object;
ninjaOne = {
    name: "ninja",
    age: 30,
    belt: "black"
}

console.log(ninjaOne);

// it can work
ninjaOne = [];
