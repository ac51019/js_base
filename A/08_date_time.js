// dates very imp interview related

let myDate = new Date()
console.log(myDate);

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toTimeString());
console.log(myDate.getTimezoneOffset());

console.log(typeof myDate);

let myCreatedDate = new Date(2024, 0, 30)
console.log(myCreatedDate.toDateString());

let myCreatedDate1 = new Date(2024, 0,23,5,3)
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());


// (math.floor use akrne se .00 nhi ate hai)

console.log(Math.floor(Date.now()/1000));

// newDate2 is name but but new Date is syntax


let newDate2 = new Date ()
console.log(newDate2);
console.log(newDate2.getMonth());
console.log(newDate2.getDay());

//`${newDate.getDay()} and the time `
 
newDate2.toLocaleString('default',
{
    Weekday:"long"
})




