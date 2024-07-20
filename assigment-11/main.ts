// ASSIGMENT 11

//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

const friendList : string [] = ["Abdullah","Isfahan","Rafay"]

// Method 1

console.log(`Dear ${friendList[0]}, I hope you are having a great day`);
console.log(`Dear ${friendList[1]}, I hope you are having a great day`);
console.log(`Dear ${friendList[2]}, I hope you are having a great day`);


console.log("--------");


//  Method 2
friendList.forEach(friendList=>{

    console.log(`Dear ${friendList}, I hope you are having a great day`);
    
})