"use strict";
//   QUESTION 28
//Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.
//• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
const favorite_fruits = ["bananas", "apples", "pears"];
if (favorite_fruits.includes("bananas")) {
    console.log(`I really like bananas `);
}
if (favorite_fruits.includes("mangoes")) {
    console.log(`I really like mangoes`);
}
if (favorite_fruits.includes("apples")) {
    console.log(`I really like apples`);
}
if (favorite_fruits.includes("pomegranate")) {
    console.log(`I really like pomegranate`);
}
if (favorite_fruits.includes("pears")) {
    console.log(`I really like pears`);
}
