console.log("Day - 7 JS Class");

console.log("Array");
var arr = [1,2,3,4,5,6,7];
console.log(arr);

console.log("Index");
const val1 = arr.indexOf(5);
console.log(val1);

console.log("Map");
const result1 =arr.map(x => x*4);
console.log(result1);

console.log("Filter");
const result2 = arr.filter(x => x>2);
console.log(result2);

console.log("Reduce"); 
const total = arr.reduce((sum,x) => sum=sum+x,0);
console.log(total);

//for max :
// const max = arr.reduce((accum, curr) => {
//     if(curr > accum){
//         accum =curr ;
//     }
//     return accum;
// },0);
// console.log(max);

console.log("Push"); 
arr.push(8);
console.log(arr);

console.log("Pop"); 
arr.pop();
console.log(arr);

console.log("Shift"); 
arr.shift();
console.log(arr);

console.log("Unshift"); 
arr.unshift(1);
console.log(arr);

console.log("Some"); 
const val2 = arr.some(x => x%2 == 0);
console.log(val2);

console.log("Every"); 
const val3 = arr.every (x => x%2 == 0);
console.log(val3);

console.log("Slice"); 
//starting index 1, ending index 3:
const val4 = arr.slice(1,3);
console.log(val4);