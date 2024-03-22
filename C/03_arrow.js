const user = {
    username : "hitesh",
    price : 999,

    welcomeMessage: function () {

        // this = corrent contact (value)

        console.log(`${this,this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()

// user.username ="shiv"

// user.welcomeMessage()


console.log(this);



// interview question browser ke anda kun sa injan run karta hai (window run karta hai)

// this obj ke andar he kaam karta hai sirf

// function chai() {
//     let  username = "hitesh"
//     console.log(this);
    
// }

// chai()

// arrow function 

// const chai2 = () => 
// {
//     let usernaame = "hitesh"
//     console.log(this.usernaame);
// }

// chai2()


const addTwo = (num1, num2) => {
    return  num1 + num2 
}

console.log(addTwo(45,87));
