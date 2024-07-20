"use strict";
// ASSIGMENT 10
//Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
const friendList = ["Abdullah", "Isfahan", "Rafay"];
// Method 1
console.log(friendList[0]);
console.log(friendList[1]);
console.log(friendList[2]);
console.log("-----------");
// Method 2
friendList.forEach(friends => {
    console.log(friends);
});
