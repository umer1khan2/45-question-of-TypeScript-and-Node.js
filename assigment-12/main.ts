// ASSIGMENT 12

//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”



const motorcycle : string [ ] = ["Yamaha R1","Yamaha R6","Kawasaki Ninja ZX10R"];

//method 1 

console.log(`I would like to own a ${motorcycle[0]}`);
console.log(`I would like to own a ${motorcycle[1]}`);
console.log(`I would like to own a ${motorcycle[2]}`);


console.log("--------------------")

//method 2

motorcycle.forEach(bikes=>{
    console.log(`I would like to own a ${bikes}`);
})


