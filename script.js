// To understand variable shadowing in JavaScript, 
// you must first be aware of the two scopes you can declare variables in:

// Local Scope: Variables declared here are block-scoped or function-scoped;
// Global Scope: It's the outermost scope where any variable that's declared is available globally.

// And, the three ways in which you can declare variables in those two scopes are as follows:

// Using var — creates a function-scoped or globally-scoped variable;
// Using let — creates a block-scoped local variable;
// Using const — creates a block-scoped local constant.

// Variable Type and Scope Determine If the Value of Shadowed Variable Is Overwritten
// Variables declared as let or const are block-scoped and they do not overwrite the value of the shadowed variable.
//  For example:

// global scope
var firstName = 'raja';

if (true) {
    // block-scoped (local)
    let firstName = 'rajarajan';
    console.log(firstName); // 'rajarajan'
}

console.log(firstName); // 'bar'

// This isn't true, however, for variables declared with var since they are not block-scoped (but rather global and function scoped).
// Therefore, they would overwrite values in block scope but not in function scope. 
// For example:

// global scope
var fullName = 'rajarajan';

if (true) {
    // block-scoped (local)
    var fullName = 'RAJARAJAN T';
    console.log(fullName); // 'RAJARAJAN T'
}

console.log(fullName); // 'RAJARAJAN T'

// Since variables declared as var are function-scoped,
// the nested function in the following example won't overwrite the one with the same name in the outer scope:

function printFoo() {
    var foo = 'bar';

    function printQux() {
        var foo = 'qux';
        return foo;
    }

    console.log(printQux()); // 'qux'
    console.log(foo); // 'bar'
}

printFoo();

// Local Scope Variables Take Precedence
// When you use a local scoped variable of the same name, 
// its value takes precedence over the outer scoped one. 
// For example:
// global scope
var fruit = 'apple';
if (true) {
    // block-scoped (local)
    const fruit = 'orange';
    console.log(fruit); // 'orange'
}

console.log(fruit); // 'apple'

// Same thing happens in a function scope as you can see in the code below:

// global scope
var bike = 'ktm';

function printbike() {
    // function scope (local)
    const bike = 'rc';
    // ...
    return bike;
}

// let or const Cannot be Shadowed in a Local Scope
// In a local scope you cannot shadow another let or const. 
// In that case, you will get an error as shown below:

// function printFoo() {
//     let car = 'tesla';

//     if (true) {
//         // SyntaxError: Identifier 'foo' has already been declared
//         var car = 'bmw';
//     }
//     // ...
//     return car;
// }
// However, a variable declared with let, const and var can shadow a global-scoped let, const and var variable. For example:

// global scope
const mobile = 'iphone';

if (true) {
    // block-scoped (local)
    const mobile = 'samsung';
    console.log(mobile); // 'sumsung'
}

console.log(mobile); // 'iphoneS'


//How does hoisting work for variable types?

// Now, hoisting does not work the same for all variable types.

// Function declarations are actually hoisted and the initial value in the variable environment is set to the actual function.
// So in practice, what this means is that we can use function declarations before they are actually declared in the code,
// again, because they are stored in the variable environment object, even before the code starts executing.
// Function declarations are block-scoped for strict mode.
//  So if you’re using a sloppy mode, which you shouldn’t, then functions have functioned scope.

// Variables declared with var are also hoisted, but hoisting works in a different way here.
// So unlike functions, when we try to access a var variable before it’s declared in a code,
// we don’t get the declared value but we get undefined.
// The variable name is hoisted, but the value is undefined until it's declared
// logs undefined

console.log(v);

// The value gets defined
var v = 'declare with var';

// logs "declare with var"
console.log(v);

// Let and Const variables are not hoisted i.e. technically they are actually hoisted but their value is basically set to uninitialized.
// So there is no value to work with at all. And so in practice, it is as if hoisting was not happening at all.
// Instead, we say that these variables are placed in a so-called Temporal Dead Zone or TDZ which makes it so that we can’t access the variables between the beginning of the scope and to place where the variables are declared.
// So as a consequence, if we attempt to use a let or const variable before it’s declared, we get an error.
// Let and const are block-scoped. So they exist only in the block in which they were created.

// While the name was hoisted, it has no defined value and throws an error
// Uncaught ReferenceError: l is not defined

// console.log(l);

// // The value gets defined
// let l = 'declare with let';

// // logs "declare with var"
// console.log(l); //Uncaught ReferenceError: Cannot access 'l' before initialization


// In Function expressions and arrow functions, it depends if they were created using var or const or let.
// These functions are simply variables.
// And so they behave the exact same way as variables in regard to hoisting.

//Dead Zone explained

// Before ES6 there was no other way to declare variables other than var. But ES6 brought us let and const.
// let and const declarations are both block-scoped,
// which means they are only accessible within the { } surrounding them.
// var, on the other hand, doesn't have this restriction.

// Here's an example:

let babyAge = 5;
let isBirthday = true;

if (isBirthday) {
	let babyAge = 6; 
}

console.log(babyAge);  //This prints 6

// The above has occurred because the re-declaration of babyAge to 2 is only available inside the if block.
// Beyond that, the first babyAge is used. Can you see that they are two different variables?

// In contrast, the var declaration has no block scope:

var myAge = 24;
var myBirthday = true;

if (myBirthday) {
	var myAge = 25; 
}

console.log(myAge); //  This prints 24

// The final salient difference between let / const and var is that if you access var before it's declared, it is undefined.
// But if you do the same for let and const, they throw a ReferenceError.

console.log(varNumber); // undefined
console.log(letNumber); // Doesn't log, as it throws a ReferenceError letNumber is not defined

var varNumber = 1;
let letNumber = 1;

//Temporal Dead Zone explained

// This is what the TDZ is: the term to describe the state where variables are un-reachable.
// They are in scope, but they aren't declared.

// The let and const variables exist in the TDZ from the start of their enclosing scope until they are declared.

// You could also say that the variables exist in the TDZ from the place they get bound 
// (when the variable gets bound to the scope it's inside) until it is declared (when a name is reserved in memory for that variable).

// {
//  	// This is the temporal dead zone for the age variable!
// 	// This is the temporal dead zone for the age variable!
// 	// This is the temporal dead zone for the age variable!
//  	// This is the temporal dead zone for the age variable!
// 	let age = 25; // Whew, we got there! No more TDZ
// 	console.log(age);
// }

// The temporal dead zone captured and catalogued.
// You can see above that if I accessed the age variable earlier than its declaration,
// it would throw a ReferenceError. Because of the TDZ.

// But var won't do that. var is just default initialized to undefined unlike the other declaration.
