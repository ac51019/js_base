// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123ac"
tinderUser.name= "Shiv"
tinderUser.isLoggedIn = "false"
// console.log(tinderUser);

const regularuser ={

    email: "shiv@gmail.com",
    fullname: {
        userfullname: {
            fname: "Shiv",
            lname: "singh"
        }
    }
}

console.log(regularuser.fullname.userfullname.fname);


const obj1 = { 1: "a", 2 : "b"}
const obj2 = { 3: "a", 4 : "b"}
const obj4 = { 5: "a", 6 : "b"}

// const obj3 ={obj1 , obj2 }

// const obj3 = Object.assign(obj1, obj2, obj4)

const obj3 = {...obj1,... obj2}  // most use syntax

console.log((obj3));


// database value ane par most use 

const users = [
    {
        id :1,
        email : "shiv@gmail.com"
    },
    {
        id :1,
        email : "shiv@gmail.com"
    },
    {
        id :1,
        email : "shiv@gmail.com"
    },
    {
        id :1,
        email : "shiv@gmail.com"
    },
]


users[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser));  // use projects
console.log(Object.values(tinderUser));  //valuse niklna and keys same he hai 

console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // hasOwnProperty





