//  primitive datatype

// 7 type - string,Number, boolearn, Null, Undefined, Symbol,bigint

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null

let userEmail;
// const id = symbol('123456')
const anotherId = symbol('123456')

// console.log(id === anotherId);

const bigNumber = 3249283742934727237n

// refeence (Non-Primitive)

// Array, Objects, functions

// const heros= ["shaktiman", "naagraj","doga"];
// let myObj={
//     name = "DHAIRYA",
//     age = 03,

// }

function myFunction = function(){
    console.log("Hello World") 
    
}

console.log(typeof bigNumber );







//********************************** */



// Stack(primitive), heap (Non-Primitive)

let myYoutubename = "Chai Aur code"

let anoterName = "myYoutubename"

anoterName = "Hello Moto"

console.log(anoterName);
console.log(myYoutubename);

let user ={
    email: "user@google.com"
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "home@google.com"

console.log(userOne.email);