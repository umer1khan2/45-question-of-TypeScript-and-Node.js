"use strict";
//ASSIGMENT 22
//Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
//let car = 'subaru';
//console.log("Is car == 'subaru'? I predict True.")
//console.log(car == 'subaru')
//• Look closely at your results, and make sure you understand why each line evaluates to True or False.
//• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
let five = 5;
let ten = 10;
let car = "Range Rover";
let car2 = "Lexus";
// TRUE STATEMENTS
//test 1 ? 
console.log("Test 1: five = 5 ? I predict true");
console.log(five == 5);
//test 2
console.log("Test 2: ten = 10 ? I predict true");
console.log(ten == 10);
//test 3 
console.log("Test 3: car = Range Rover ? I predict true");
console.log(car == `Range Rover`);
//test 4
console.log("Test 4: car2 = Lexus ? I predict true");
console.log(car2 == "Lexus");
//test5
console.log("Test 5: five < ten ? I predict true");
console.log(five < ten);
console.log("------------------");
//FALSE STATEMENT
//test 6
console.log("Test 6: car = Range Rover ? I predict false");
console.log(car !== "Range Rover");
//test 7
console.log("Test 7: car2 = Lexus ? I predict false ");
console.log(car2 !== "Lexus");
//test 8
console.log("Test 8: car2 = Range Rover ? I predict false ");
console.log(car2 == "Range Rover");
//test 9
console.log("Test 9: ten < five ? I predict false ");
console.log(ten < five);
//test 10
console.log("Test 10: five > ten ? I predict false ");
console.log(five > ten);
