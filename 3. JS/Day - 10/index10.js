console.log("Day - 10 JS Class");

console.log("this keyword & call apply bind");

// this keyword is used to point its global Object in our case name is an global Object 
// Call apply and bind are used for borrowing function methods 
    
let city={
    firstcity:"pune",
    lastcity:"mumbai",
}
let printFullCity=function (){
    console.log(this.firstcity+" "+this.lastcity)
}
printFullCity.call(city);

let name1={
    firstname:"Arav",
    lastname:"Sharma"
}
const printFullName= function (hometown, state){
     console.log(this.firstname+ " "+this.lastname+" from "+hometown+" my state is "+state)
}

let name2={
    firstname:"Ajay",
    lastname: "Singh"
}

printFullName.call(name1, "MH", "Mumbai"); //every first object is argument as name1.
printFullName.call(name2, "JK", "Ranchi");

// Call is something which is passed individually with an separators.

printFullName.call(name1, "MH" , "Mumbai")

// Apply is passed as an array.

printFullName.apply(name1, ["MH", "Mumbai"]);

// Bind Method - It will returns a new function.

let printMyName=printFullName.bind(name1, "MH", "Mumbai")
console.log(printMyName);
printMyName();


// Working chrome console like (arr._proto_ / Array.prototype / arr._proto_._proto_) JS - Object Methods

var arr = [];
var Object1={
    fname:"chetan",
    lname:"bhoyar",
    getInfo:function ()
    {
            console.log(this.fname+this.lname);
    }
}
function fun(){

}

// Whenever we create an object or array or function ...our JS engine will attach an object to our original object.
// Proto: Engine is keeping will these methods and function in our proto.

// Everything in our javascript are Object.

var Object2={
    name:"chetan",
    city:"wardha",
    getInfo:function ()
    {
            console.log(this.name+this.city);
    }
}
let Object3={
    name:"aman"
}
// Object2.__proto__object

function Person (name, age, city)  //function
{
    this.name=name;
    this.age=age;
    this.city=city;
} //parent obj

const Person1=new Person("Ajay", 25, "Mumbai");  //Object //function constructor //child obj
console.log(Person1);
console.log(Person1.age);

Person1.lastName="Kumar";
console.log(Person1)

Person.prototype.state="NEW DELHI";
console.log(Person1.state);
console.log(Person1);

//object.create is example of inheritance

// var object={

//     firstname:"vijay",
//     lastname:"kumar"
// }
// var object2={

// }

// object2.__proto__=object