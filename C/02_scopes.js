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

let a = 300

if(true){
    let a = 10
    const b =20
    console.log("INNER:", a);
}

console.log(a);
// console.log(b);