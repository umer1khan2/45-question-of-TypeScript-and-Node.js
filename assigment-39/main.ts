// ASSIGMENT 39

//Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.


function make_album ( artistName : string , albumName : string , track ? : number  ){

    let album : {artist : string , album : string , tracks ? : number} = {

        artist : artistName,
        album : albumName
    } ;
    
    if (track !== undefined){

        album.tracks = track
    }
    return (album)
}

// calling function 

let album = make_album ("Atif aslam" , "album 1")
let album2 = make_album ("Ali zafar" , "album 2")
let album3= make_album ("Asim azhar" , "album 3" , 4)

// Priting the variables 

console.log(album);
console.log(album2);
console.log(album3);
