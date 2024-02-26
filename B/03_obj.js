// Singleton  interview imp 

// Object literals

const mySym = Symbol("key1")

// constrant method  (object.create)

// interview ques Q- ek symbol lo aur use key me print karke dekah do
//square brac me helikhte hai

const jsUser = {
    name: "Dhairya",
    "full name" : "Dhairya Chauhan",
    [mySym]  : "mykey1",
       age : 12,
    location: "Nashik",
    email : "dc06@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

console.log(jsUser.eamil);
console.log(jsUser["email"]);
// myArray = ["D", "h"]
console.log(jsUser["Full name"]);
console.log(jsUser[mySym]);

jsUser.eamil = "Dhairya@google.com" // change 

 Object.freeze(jsUser) // no change freeze

 jsUser.email = "dhairya@chat.com"
 console.log(jsUser);


jsUser.greeting = function (){
    console.log("hello js User");
}

jsUser.greetingTwo = function (){
    console.log('hello js User,$ {this.name}');
}

 console.log(jsUser.greeting);
 console.log(jsUser.greeting);




