"use strict";
// ASSIGMENT 13
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
const guestlist = ["Hasan", "umer", "ali"];
//method 1
console.log(`Dear ${guestlist[0]} , We invite you for a dinner `);
console.log(`Dear ${guestlist[1]} , We invite you for a dinner `);
console.log(`Dear ${guestlist[2]} , We invite you for a dinner `);
console.log("-----------------");
//method 2 
guestlist.forEach(guests => { console.log(`Dear ${guests}, We invite you for a dinner`); });
