"use strict";
// ASSIGMENT 40
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magician(magician) {
    magician.forEach(name => console.log(name));
}
let magicianName = ["Harry potter", "Sirius black", "Dobby"];
show_magician(magicianName);
