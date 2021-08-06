console.log("hello world")
// Declare four variables without assigning values and print them in console
let name;
let native;
let gender;
let nationality;
console.log(name,gender,gender,nationality);

// How to get value of the variable myvar as output
var myName= "raja";
console.log("firstName");

// Declare variables to store your first name, last name, marital status, country and age in multiple lines
// Declare variables to store your first name, last name, marital status, country and age in a single line

let firstName = "raja";
let lastName ="rajan";
let maritalStatus ="single";
let country ="india";
let age = 24;
console.log(firstName);
console.log(lastName);
console.log(maritalStatus);
console.log(country);
console.log(age);
console.log(firstName,lastName,maritalStatus,country,age);

//  Declare variables and assign string, boolean, undefined and null data types
let str ='raja';
let boolean = false;
let a;
let x = null;
console.log(str,boolean,a,x);

// Convert the string to integer
var b = parseInt("25");
var c = +("30");
var d = Number("35");
console.log(b,c,d);

//Write 6 statement which provide truthy & falsey values

//The following values are always falsy:

// false
// 0 (zero)
// '' or "" (empty string)
// null
// undefined
// NaN

// Everything else is truthy that includes:

// '0' (a string containing a single zero)
// 'false' (a string containing the text “false”)
// [] (an empty array)
// {} (an empty object)
// function(){} (an “empty” function)
// A single value can therefore be used within conditions, 

// Square of a number
function squareIt(number) {
    return number ** 2;
  }
  
  console.log(squareIt(34));

//Swapping 2 numbers
let g,h;
[g,h]=[2,3];
console.log(g,h);

[g,h]=[h,g];
console.log(g,h);  

//Addition of 3 numbers

function sum_three(nums)
{
  return nums[0] + nums[1] + nums[2];
}
console.log(sum_three([10, 32, 20]));

// Celsius to Fahrenheit conversion

// function cToF(celsius) 
// {
//   var cTemp = celsius;
//   var cToFahr = cTemp * 9 / 5 + 32;
//   var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
//     console.log(message);
// }
// cToF(62);

function convertCToF(c) {
    var f = c * (9 / 5) + 32;
    return f;
  }
 // convertCToF(62);s