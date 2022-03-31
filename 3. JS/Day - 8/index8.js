console.log("Day - 8 JS Class");

console.log("String Length");
let myStr = "ChetanBhoyar";
let len = myStr.length;
console.log(len);

console.log("charAt");
//If you want to find the characters of a string with thr help of the indexes we will use charAt
let chr = myStr.charAt(5);
console.log(chr);     

console.log("indexOf");
let io = myStr.indexOf("t");
console.log(io); 

console.log("Split");
//It is used to convert string to an array & split methods returns thr new array, it does not change the original array.
let sp = myStr.split("");
console.log(myStr);
console.log(sp); 


console.log("Split Reverse & Join"); 
let rev1 = myStr.split("").reverse();
console.log(rev1); 
let rev2 = myStr.split("").reverse().join("");
console.log(rev2); 

console.log("Trim"); 
let str="             AjayDevgan";
console.log(str.length);
let tr = str.trim();
console.log(tr);
console.log(tr.length);

console.log("Slice");
//It is used to extract data, it will not modify the original.
let stg1 = ["hi", "hello", "chetan", "how", "are", "you"]
        //   0      1         2        3      4      5
let slc1=stg1.slice(1,3);
console.log(slc1);

let sti="chetan,bhoyar,here";
let slc2=sti.slice(0,4);
console.log(slc2);

let slc3=sti.slice(0,-2);
console.log(slc3);

console.log("Splice");
//It is extraction & adding the elements and it will modify the original.
let stg2 = ["hi", "hello", "chetan", "how", "are", "you"]
        //   0      1         2        3      4      5
// let slc4=stg2.splice(1,3);
// console.log(slc4);

// let slc5=stg2.splice(1,4);
// console.log(slc5);

let slc6=stg2.splice(1,4, "welcome", "bye")
console.log(stg2);

console.log("Concatenation");
var text1="Akshay";
var text2="Kumar";
var text3=text1.concat(" ",text2);
console.log(text3);

console.log("Replace");
newStr="I will go to delhi, I will eat chinese food."
let rep1 = newStr.replace("will", "have");
console.log(rep1);

console.log("ReplaceAll");
newStr="I will go to delhi, I will eat chinese food."
let rep2 = newStr.replaceAll("will", "have");
console.log(rep2);

console.log("UpperCase");
var text1="where are you?";
var upc1=text1.toUpperCase()
console.log(upc1);

console.log("LowerCase");
var text2="WHERE ARE YOU?";
var upc2=text2.toLowerCase()
console.log(upc2);