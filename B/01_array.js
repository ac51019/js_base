// Array

// {} - curly brackets or braces 
// [] - square 
// () - parentheses


// Shallow Copy and deep Copy v imp interview


const myArr = [0,1,2,3,4]

const myHeros = ["Shaktiman", "naagrajun"]


const myArr2 = new Array(1,2,3,4)
console.log(myArr[1]);


// Array Methods 

// most of the use [push]

myArr.push(6)
myArr.push(10)
myArr.pop()
console.log(myArr);

myArr2.pop()
console.log(myArr2);


myArr.unshift(9)

console.log(myArr);
myArr.shift()


console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

console.log(myArr);

const newArr = myArr.join()

console.log(myArr);
console.log(typeof newArr);



//slice and splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3)
console.log("C ", myArr);
console.log(myn2);


// interview question Q slice and splice diff




