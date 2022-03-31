console.log("Day - 9 JS Class");

console.log("Objects");
//Objects : It is a non-primitive data types.
//Objects are key value pairs.
//{}

const person={
name:"Chetan Bhoyar",
age:25,
contact:1234567890,
bloodGroup:"B+ Positive"
}
console.log(person.name);   //By using Dot Notation   //Chetan Bhoyar
console.log(person["age"]); //By using Square Bracket and make sure you are using strings "", when your accessing your property. //25

console.log("this Keyword");

const student={
    id:101,
    name:"raju",
    age:25,
    contact:012345,
    displayInfo:function(){  //Method
        console.log(" my id is "+this.id+" my age is "+this.age)
    }
}
student.displayInfo();


//Object.create - which will allows us to create an object by taking the reference of an existing.

const flags=Object.create(student)
console.log(flags);

//keys
const myObjkeys=Object.keys(student);
console.log(myObjkeys);

//values
const myObjvalues=Object.values(student);
console.log(myObjvalues);


//this keyword refers to the global objects.
//Function inside the object is called method.

//We can create object using a object Constructor also.

const myObj=new Object()
myObj.name="vijay"; //Dot Notation
console.log(myObj);
myObj["name"]="vijaykumar"; //Using Square Bracket.
console.log(myObj);

console.log("Spread Operator");
//Spread Operator: It is use to shallow copy objects.

const body={
    height:5.11,
    weight:74
}
const brain={
    iq:1
}
const person1={
    ...body,
    ...brain
}

console.log(person1);
console.log(person1.height);

let arr=[1,2,3,4,5,6];
console.log(arr);
console.log(...arr); //destructuring the array.

console.log("Function Constructor");
function Employee(name, age){
    this.name = name;
    this.age = age;
}
const Employee1 = new Employee ("Chetan");
const Employee2 = new Employee ("Aman");

console.log(Employee1); 

Employee1.age = 27;
console.log(Employee1);