//ASSIGMENT 23

// 1
//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings

//• Tests using the lower case function

//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

//• Tests using "and" and "or" operators

//• Test whether an item is in a array

//• Test whether an item is not in a array

let apple :string = "apple"

console.log("is apple equal to apple ?");
console.log(apple == "apple");

console.log("is apple not equal to apple ?");
console.log(apple != "apple");

console.log("-------------");


// 2
let uppercaseapple : string = "APPLE"

console.log("\n Is APPLE equal to apple after converting it to lowercase");
console.log(uppercaseapple.toLowerCase() =="apple");

console.log("Is APPLE not equal to apple after converting it to lowercase");
console.log(uppercaseapple.toLowerCase() !="apple");

console.log("---------");


// 3
let one : number = 1
let two : number = 2

//equality
console.log("\none is equal to two");
console.log(one == two);

//inequality
console.log("one is not equal to two");
console.log(one != two);

// greater than
console.log("one is greater than two");
console.log(one > two);

// less than
console.log("one is less than two");
console.log(one < two);

//greater than or equal to
console.log("one is greater than or equal to 0");
console.log(one >= 0);

//less than or equal to
console.log("two is less than or equal to 0");
console.log(two <= 0);

console.log("------------");


// 4

// "And" 
console.log("\none is not equal to two and one is greater than two");
console.log(one != two && one > two)

console.log("two is not equal to one and two is greater than one");
console.log(two != one && two > one);

// "Or"

console.log("one is equal to two or one is greater than two");
console.log(one == two || one > two)

console.log("two is not equal to one or two is greater than one");
console.log(two != one || two > one);

console.log("-----------");

// 5

let place: string[] = ["DHA","GULSHAN","JOHAR"];

console.log("\n is JOHAR included in place array");
console.log(place.includes("JOHAR"));

console.log("is North Nazimabad included in place array");
console.log(place.includes("North Nazimabad"));



