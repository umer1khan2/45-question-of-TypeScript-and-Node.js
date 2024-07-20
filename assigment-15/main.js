"use strict";
// ASSIGMENT 15
//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
const guestList = ["Umer", "Ali", "Hasan"];
console.log(`${guestList} , I have a great news ! We found a bigger table`);
console.log("x-----x------x");
// method for adding the person at the beginning 
guestList.unshift("anas");
// method for adding the person in the middle
guestList.splice(Math.floor(guestList.length / 2), 0, "wasay");
// method foradding the person at the end
guestList.push("rafay");
// sending invitation to all the members of guestlist
guestList.forEach(guest => {
    console.log(`${guest} you are invited for the dinner`);
});
