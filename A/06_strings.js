
const name = "home "
const repoCount = 50

// console.log(name + repoCount + "value");

console.log(`Hello My name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Dhair-ya')


console.log(gameName[0]);
console.log(gameName._proto_);


console.log(gameName.length);

console.log(gameName.toUpperCase());

console.log(gameName.charAt(4));

console.log(gameName.indexOf('a'));

const newString = gameName.substring(0, 4)
console.log(newString);
const anotheString = gameName.slice(-2, 4)
console.log(anotheString);

const newStringOne =  "   Hello   "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://google.com/google%20home"

console.log(url.replace('%20', '-'))

console.log(url);

console.log(url.includes('sundar'));

console.log(gameName.split('-'));