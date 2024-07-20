"use strict";
// ASSIGMENT 2
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
//uppercase
let personName2 = "umer ullah khan";
console.log(personName2.toUpperCase());
//lowercase
console.log(personName2.toLowerCase());
//titlecase
console.log(personName2.replace(/\b\w/g, c => c.toUpperCase()));
