// explicit types
var character;
var age;
var bool;
//arrays 
var fruits = [];
fruits = ['apple', 'orange'];
console.log(fruits);
// union types
var mixed = [];
mixed.push("hey");
mixed.push(1);
mixed.push(false);
console.log(mixed);
// can be a string or number
var uid;
uid = "123456789";
uid = 123;
//objects
var ninjaOne;
ninjaOne = {
    name: "ninja",
    age: 30,
    belt: "black"
};
console.log(ninjaOne);
// it can work
ninjaOne = [];
