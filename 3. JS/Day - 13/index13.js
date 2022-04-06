console.log("Day - 13 JS Class");

console.log("---setTimeout function---");
setTimeout(() =>{
 console.log("Hi, I am a setTimeout function");
}, 5000)

console.log("---Event loop---");

function a()
{
    console.log("a");
}
a();
console.log("b");

console.log("---Closures---");

function OuterFunction() {
    var outerVariable = 100;
function InnerFunction() {
    console.log(outerVariable);
}
    return InnerFunction;
}
var innerFunc = OuterFunction();
innerFunc(); 

console.log("---Callback Queue---");