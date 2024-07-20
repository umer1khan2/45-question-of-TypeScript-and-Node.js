// ASSIGMENT 43

//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.



function sandwiches(...items : string []){
    console.log("\nSandwich :\n");
    
    items.forEach(order => {
        console.log(order);
        
    });
        console.log("-----------");
}

sandwiches ("bread","eggs","mayo")
sandwiches("bread","chicken","mayo")
sandwiches("bread","eggs","chicken","mayo","tomato")