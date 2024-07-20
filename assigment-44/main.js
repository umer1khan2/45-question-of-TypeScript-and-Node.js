"use strict";
// ASSIGMENT 44
function createCar(manufacturer, model, options = {}) {
    return Object.assign({ manufacturer, model }, options);
}
// calling the function with the required information and additional properties 
const myCar = createCar("toyota", "corolla", { color: "blue", optioalFeatures: "sunroof" });
// Print the object to verify all information is stored correctly
console.log(myCar);
