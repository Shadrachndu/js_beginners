// //1.
// //Declare two variables: admin and guest.
// //Assign the value "John" to the variable guest.
// //Copy the value from guest to admin.
// //Show the value of admin using console.log(must output �John�).


//                      //Solution
let admin, guest = "John";
admin = guest;
console.log(admin);
console.log("**********************************************************************")
// //***************************************************************************************** */

// //2.
// //Define a forloop that outputs numbers from 1 to 100.

//                     //Solution

for (let c = 1; c <= 100; c++) { 
     console.log(c);
}
console.log("**********************************************************************")
// //***************************************************************************************** */

// //3.
// //Write a function min(a,b) which returns the least of two numbers a and b. 
// //(hint: check conditional statement and functions)
// //e.g min(2,5) should return 2

function min(a, b) {
    if( a > b){return b}
    if( b > a){return a}
    else return "both values are equal";
}
 let result = min(2,5);
 console.log(`The Min NUMBER is ${result}`)//2

 console.log("**********************************************************************")

// //***************************************************************************************** */

// //4.
// //Write a short program that prints each number from 1 to 100 on a new line. 
// //For each multiple of 3, print "Fizz" instead of the number. 
// //For each multiple of 5, print "Buzz" instead of the number. 
// //For numbers which are multiples of both 3 and 5 i.e 15, print "FizzBuzz" instead of the number. 

for (let i = 1; i <= 100; i++) {
  if(i % 3 == 0 && i % 5 == 0 ){
       console.log("FizzBuz")}
  else if(i % 3 == 0 && i % 5 != 0){
       console.log("fizz")}
  else if(i % 3 != 0 && i % 5 == 0){
      console.log("Buzz")}
  else{
      console.log(i)
    }
}


