const accountId = '1445533' //* constant variable cannot change 
let accountEmail = "codesalpha92@gmail.com " //* let variable can change    
//* let is block scope variable
var accountPassword = "password123"  //* var variable can change
//* var is global variable 
accountCity = "Bihar" //* variable without any keyword is global variable
let accountState;

// accountId = 2 //* not allowed 
// console.log(accountId) //* error;

accountEmail ="hac@gmial.com"
accountPassword = "password1234"
accountCity = "Mumbai"
/*
prefer not to use var 
because of issue in block scope and functional scope 

*/
console.table([accountId, accountEmail, accountPassword, accountCity ,accountState])







