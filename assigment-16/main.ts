// ASSIGMENT 16

//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

//• Print a message to each of the two people still on your list, letting them know they’re still invited.

//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

const guestlist : string [] = ["anas","umer","wasay","ali","hasan","rafay"]

console.log(`unfortunately! the new table wont arrive so we can invite only two guest`);

console.log("-------------");


while(guestlist.length > 2) {

    let removeguest : string | undefined = guestlist.pop ();
    
    if(removeguest !== undefined ) {
        console.log(` sorry ${guestlist} , we cant invite you`);
        
    }
} 

console.log("-----------------------");


guestlist.forEach(guets => 

    {console.log(`dear ${guets} , you are still invited for the dinner`);
    }
)


console.log("---------");


guestlist.splice(0,guestlist.length)

console.log(`Updated list of guest [ ${guestlist}]`);
