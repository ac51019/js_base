// scopes  (let,var,const)  
// {}  <- kise func ke sath ata to ise scopes kahte hai 

// 1  simple

// let a = 10
// const b =20
// var c =30


// console.log(a);
// console.log(b);
// console.log(c);


// 2  
// if ke andaar var scopes 
//if ke bahar global scopes

// let a = 300

// if(true){
//     let a = 10
//     const b =20
// }

// console.log(a);
// console.log(b);


// 3 v imp interview

// let a = 300

// if(true){
//     let a = 10
//     const b =20
//     console.log("INNER:", a);
// }

// console.log(a);
// console.log(b);


// nested scopes 


function one() 
{

    const username ="Hitesh"

        function two() {
            const website = "Youtube"
            console.log(username);
            
        }

            // console.log(website);   no need

            two()
}

        one()

if(true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = "  youtube"
        console.log(username + website);
        
    }

    // console.log(website);  no need 
}

// console.log(username);   no need





// *****************************  INTERESTING *****************************

addone(5)

console.log(addone(5));

function addone(num) {
    return num + 1
}


// addone(5)

//  upar and niche kae be rakha ke use kar akte hai 

// console.log(addone(5));

// addTwo(5) this is wrong 


const addTwo = function (num) {

    return num = 2 // expresion   
}

addTwo(5)