console.log("Day - 6 JS Class");
console.log("FUNCTION DECLARATION"); 

// function functionName(parameters1, parameters2, ....){    //function head
    //logic
// }
//functionName();

//example -

// function wish (){
//     return('Hi!');
// }

// var result = wish();
// console.log(result);   //return keyword needs to store in a variable and after that we need to console it.

console.log("FUNCTION TYPES");

//1. Function without parameters and without return 
// function add(){
//     console.log('Hi')
// }
// add();

//2. Function with params, without return.
// function name(userName){
//     console.log(userName);
// }
// name('Chetan');

//3. Function with params, with return.
// function multiply(a,b){
//     return a*b;
// }
// console.log(multiply(2,9));

console.log("FUNCTION EXPRESSION");

// var functionName = function ( parameter1 , parameter2, ....) {       //function head
//    //logic
// }
// functionName();

//example -
// function add(a,b){
//     return a+b;
// }
// console.log(add(2,9));

console.log("FUNCTION CONSTRUCTOR");

// var funName = new Function("{body}")

//example -
// var sub = new Function ("num1", "num2", "{return num1 - num2}");
//     console.log(sub (21,11));

console.log("IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)");

//(functionName(){
//   console.log('Statement');
//})()

// (function(){
//     console.log('IIFE');
// })()                           //In parenthesis we can call our function without giving function name or initialisation.

console.log("FIRST CLASS FUNCTIONS");

//1. A fun can be passed as an argument to another function
// function y(){
//     console.log('Y');
// }
// function x(){
//     console.log('X');
// }
// y(x);

//2. A function can be returned by another function 
// function Hello(){
//     return function(){
//         console.log('Hello');
//     }
// }

//3. A function can be assigned as a value
// var div = function(a,b){
//     return a/b;
// }
// console.log(div(20,4));

console.log("CALLBACK FUNCTIONS");

//Callback Function: where we can pass another function as an argument an directly invoke it.

// function hello (param){
//     param();
//     console.log('hello');
// }
// function hi(){
//     console.log('hi');
// }
// hello(hi);

console.log("HIGHER ORDER FUNCTIONS");

//Which accepts another function as an argument or return a function as a return value or both.

// function submitHomeWork (teacher){
//     teacher();
//     console.log('submit home work');
// }
// function copyHomeWork(){
//     console.log('copy home work');
// }
// submitHomeWork(copyHomeWork);

console.log("CLOSURES");

//It is a combination of both inner and lexical environment created by the inner function. We are able to access the variable from outer scope.

// function outer(){
//     let a=20;
//     function inner(){
//         console.log(a);
//     }
//     inner();
// }
// outer();