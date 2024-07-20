//Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.

//• Print your array in its original order.

//• Print your array in alphabetical order without modifying the actual list.

//• Show that your array is still in its original order by printing it.

//• Print your array in reverse alphabetical order without changing the order of the original list.

//• Show that your array is still in its original order by printing it again.

//• Reverse the order of your list. Print the array to show that its order has changed.

//• Reverse the order of your list again. Print the list to show it’s back to its original order.

//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.



let placeToVisit : string[] = ["SAUDI ARABIA", "USA" , "JAPAN" , "MALAYSIA" , "AUSTRALIA"]

// printing it in orginal order

console.log("orginal order" , placeToVisit);

// Printing array in alphabetical order

console.log("alphabetical order" , placeToVisit.slice().sort());

// array is still in its original order by printing it.

console.log("it is still in orignal order" , placeToVisit);

// Printing array in reverse alphabetical order without changing the order of the original list.

console.log("reverse alphabetical order" , placeToVisit.slice().sort().reverse());

//// array is still in its original order by printing it.

console.log("it is still in orignal order" , placeToVisit);

// Reverse the order of your list. Print the array to show that its order has changed.

console.log("reversing the order" , placeToVisit.reverse());

// Reverse the order of your list again. Print the list to show it’s back to its original order.

console.log("back to orginal", placeToVisit.reverse());

// Sort array so it’s stored in alphabetical order

console.log("sorted in alphabetical order" , placeToVisit.slice().sort());

// sort to change array so it’s stored in reverse alphabetical order

console.log("stored in reverse alphabetical order" , placeToVisit.slice().sort().reverse());
