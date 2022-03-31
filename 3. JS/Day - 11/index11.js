console.log("Day - 11 JS Class");

let arr1 = [23, 45, 67, 78, 91]

let mks1 = arr1.map(num => num + 10);
console.log(mks1); //[33, 55, 77, 88, 101]

arr1.forEach((value,index) => {
    arr1[index] = value + 10;
})
console.log(arr1); //[33, 55, 77, 88, 101]

let arr2 = [23, 45, 67, 78, 91];
let mks2 = arr2.filter(num => num < 65);
console.log(mks2); //[23, 45]
console.log(mks2.length);  //2

let arr3 = [23, 45, 67, 78, 91];
let mks3 = arr3.reduce((sum, num) => {
        sum = sum + num;
        return sum;
        }, 0);
console.log(mks3); //304

let str1 = "Peter is a good friend of Mike. Peter is working in a IT company in Australia.";
console.log(str1.replaceAll("Peter", "John")); 
//John is a good friend of Mike. John is working in a IT company in Australia.

let str2 = "Hello this is me";
console.log(str2.split(" ").reverse().join(" ")); //me is this Hello

let user = {
    name: "Aman",
    age: 24,
}
console.log(user.name);  //Aman
console.log(user["name"]); //Aman

let myObj = new Object();
myObj.name = 'Aman';
myObj.age = 25;
myObj.city = "Mumbai";

console.log(myObj);   //{name: 'Aman', age: 25, city: 'Mumbai'}
const keys = Object.keys(myObj);
console.log(keys);    //['name', 'age', 'city']
const values = Object.values(myObj);
console.log(values);  //['Aman', 25, 'Mumbai']

function sum(a,b){
    this.a=a;
    this.b=b;
    return a+b;
}
var x1=new sum(5,7);
var x2=new sum(9,2);
console.log(x1); //sum {a: 5, b: 7}
console.log(x2); //sum {a: 9, b: 2}

let newObj = Object.create(myObj);
console.log(newObj); //[[Prototype]]: Object age: 25 city: "Mumbai" name: "Aman"

var obj = {
    name: "Chetan",
    age: 22,
    salary: 150000
}
console.log(Object.keys(obj));   // ['name', 'age', 'salary']
console.log(Object.values(obj)); // ['Chetan', 22, 150000]

//call -
var obj={
    name: "Ajay",
    age:24
}
function add(city){
    console.log("Name is "+this.name+" age is "+this.age+" & city is "+city);
}
add.call(obj,"Mumbai");  //Name is Ajay age is 24 & city is Mumbai

//apply -
var obj={
    name: "Arun",
    age:34
}
function add(city){
    console.log("Name is "+this.name+" age is "+this.age+" & city is "+city);
}

add.apply(obj,["Delhi"]); //Name is Arun age is 34 & city is Delhi

//bind -
var obj={
    name: "Arav",
    age:25
}
function add(city){
    console.log("Name is "+this.name+" age is "+this.age+" & city is "+city);
}

var response = add.bind(obj,"Jaipur");
response(); //Name is Arav age is 25 & city is Jaipur

let head = {
    glasses: 1
}

let table = {
    pen: 3,
    __proto__: head
}

let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
}

let pockets = {
    money: 2000,
    __proto__: bed
}