//   QUESTION 30


//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
//• Remove all of the usernames from your array, and make sure the correct message is printed.


let userName : string [] = ["admin","usman","umer","ali","hasan"]

userName = []

if(userName.length === 0){
    console.log("We need to find some users");
}else{
    userName.forEach(user=>{
        if (user==="admin") {
            console.log(`hello ${user} , would you like to see a status report?`);
        }
        else {
            console.log(`hello ${user} , thank you for logging in again.`);
        }
    }
    )    
}
