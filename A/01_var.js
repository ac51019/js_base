const accountId = 51019

let accountEmail = "ac5500119@gmail.com"

var accountPassword = "12345"

accountCity ="Agra"

let accountState

// accountId = 2  Not Allowed

//  {} Scope

/*
Prefer not to use var
because of issue of block scope and functional scope
*/

accountEmail ="shiv@gmail.com"

accountPassword = "060506"

accountCity = "Bengluru"

console.log(accountId);

console.log(accountEmail);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])