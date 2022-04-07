console.log("Day - 15 JS Class");

console.log("---Let Var Const ---");

// function sayHello(){
//     for(var i=0; i<5; i++){
//     console.log(i)
// }
// console.log(i)
// }
// sayHello();    // 0 1 2 3 4 5

// var is an function scoped & let & const are block scope.
// const cannot redeclare

// const a=5;
// a=10;
// console.log(a)

// function sayHello(a, b){

//     console.log(a*b);
    
// }
// sayHello(5,10); //50

// const sayHello = (a, b) => console.log(a*b);
// sayHello (20,5); //100

console.log("---for in & for of ---");

//for in returns the indexes of array
//for of returns the values

const cars = ["Nano", "Audi", "BMW"]

// for (const element in cars) {   //returns index
// console.log(element)
// }    //0 1 2

// for (const element of cars) {     //returns values & for each returns new array
//     console.log(element)
// }    //Nano Audi BMW

console.log("---Map---")
//Map is an constructor function which has key values pair.
//also map creating objects.

// const myMap = new Map();
// console.log(myMap); //Map(0) {size: 0}
// myMap.set("id","1");
// myMap.set("name","Chetan"); 
// console.log(myMap);   //Map(2) {'id' => '1', 'name' => 'Chetan'}
// console.log(myMap.get("id")); //1
// console.log(myMap.size); //2
// console.log(myMap.has("aman")); //false //Comparing the attribute
// console.log(myMap.delete("id")); //true
// console.log(myMap.clear); //ƒ clear() { [native code] }

console.log("---Set---")
//Set is used to remove duplicate elements.

// const mySet = new Set;
// console.log(mySet); //Set(0) {size: 0}
// mySet.add("Employee");
// mySet.add(true);   
// console.log(mySet); //Set(2) {'Employee', true}
// console.log(mySet.has("name")); //false
// console.log(mySet.size); //2
// console.log(mySet.delete("Employee")); //true
// console.log(mySet.clear); //ƒ clear() { [native code] }

console.log("---Default Parameters---")

// function add(a, b=15){
//     console.log(a+b);
// }
// add(10);  //25