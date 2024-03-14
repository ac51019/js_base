// 1


function sayMyMoods() {
    
console.log("H");
console.log("A");
console.log("P");
console.log("P");
console.log("y");


}

sayMyMoods() // run output


// 2 

function addNumbers(number1, number2) {
  
    console.log( number1 + number2);  // (number1, number2) parameter
    
}

addNumbers(6,5)  //(4,6) argument

//  const result = addNumbers(6,5)


// 3

function addNumber(number1, number2) {
  
    // let result = number1 + number2
    // console.log("Hello");
    // return result
    // or 
    return number1 +number2
    
}
const result = addNumber(6,5)
addNumber(6,5)


// console.log("Result:", result);

// 4

function loginUser(username) {
    return `${username} just logged in`
    
}

// loginUser("Hello")
console.log(loginUser("hello"));

// 5

function loginCode(id) { //  or (id ="shiv")
    if(id === undefined){  // or true or false !id
        console.log("Please Enter a id");
        return
    }
    return `${id} just logged in`
}

console.log(loginCode()); // imp interview  op undefined


// 6 

function calCartPrice(...num1) { // ... rest operater (iska matlab ye muze open me mil raha hai ise sath me pack kar do )
                                // imp interview -. val1,val2,
    return num1

}

console.log(calCartPrice(300,500,200,700));  // op array imp ...


// 7 

function calCartPrices(val1,val2,...num1) {   // imp interview -. val1,val2, jite val denge usta he op dega

   
return num1

}

console.log(calCartPrices(300,500,200,700));


// 8

const user ={
    username: "Shivram",
    price: 399
}

function handleObj(anyobje) {

    console.log(`username is ${anyobje.username} and price is ${anyobje.price}`);
    
}

// handleObj(user)
handleObj({
    username: "sam",
    price : 199
})


// 9\

const myNewArray = [200, 400, 300, 600,900]

function returnSecVal(getArray) {

    return getArray[2]
    
}

console.log(returnSecVal(myNewArray));

        // or 

console.log(returnSecVal([200,400,100,600,2333]));
