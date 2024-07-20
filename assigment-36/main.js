"use strict";
// ASSIGMENT 36
//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size = "Large", printMessage = "I love typescript") {
    console.log(`You have selected ${size} shirt with ${printMessage} print on it`);
}
// invoking function with default size and message 
make_shirt();
// invoking function with medium size and defalut message 
make_shirt("medium");
// invoking function with different size and message 
make_shirt("small", "developer");
