// 1


// function sayMyMood() {
    
// console.log("H");
// console.log("A");
// console.log("P");
// console.log("P");
// console.log("y");


// }

//sayMyMood() // run output

// function addNumber(number1, number2) {
  
//     console.log( number1 + number2);  // (number1, number2) parameter
    
// }

// addNumber(6,5)  //(4,6) argument

// const result = addNumber(6,5)


// 2

function addNumber(number1, number2) {
  
    // let result = number1 + number2
    // console.log("Hello");
    // return result
    // or 
    return number1 +number2
    
}
const result = addNumber(6,5)
addNumber(6,5)


console.log("Result:", result);

// 3 

function loginUser(username) {
    return `${username} just logged in`
    
}

// loginUser("Hello")
console.log(loginUser("hello"));

// 4

function loginCode(id) { //  or (id ="shiv")
    if(id === undefined){  // or true or false !id
        console.log("Please Enter a id");
        return
    }
    return `${id} just logged in`
}

console.log(loginCode()); // imp int  op undefined

