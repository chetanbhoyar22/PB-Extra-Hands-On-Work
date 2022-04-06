console.log("Day - 14 JS Class");

console.log("---callback function---");

// function doHomeWork(callback){
//     callback()
//     console.log("do homework");
// }
// function copyHomeWork(){
//     console.log("copy homework");
// }
// doHomeWork(copyHomeWork)

console.log("---callback hell---");

// setTimeout(() => {
//     console.log("Hi")
// },4000)
// setTimeout(() => {
//     console.log("Hello")
// },2000) //async

// function call() {
//     setTimeout(() => {
//         console.log(1)
//         setTimeout(() => {
//             console.log(2)
//             setTimeout(() => {
//                 console.log(3)
//                 setTimeout(() => {
//                     console.log(4)
//                     setTimeout(() => {
//                         console.log(5)
//                     }, 4000);
//                 }, 3000);
//             }, 2000);
//         }, 1000);
//     }, 5000);
// }

// call()

console.log("---promises---");

// const promise = new Promise(function (resolve, reject){
//     const x="Goa";
//     const y="Goa";

//     if(x==y){
//         resolve()
//     }
//     else{
//         reject()
//     }
// })

// promise.then(function (){
//     console.log("Promise is resolved")
// })
// .catch(function(){
//     console.log("Promise is not resolved")
// })

// function printAlpha(num) {
//     return new Promise((resolve, reject) => {
//             if(num % 2 == 0){
//                 console.log("Condition Satisfied");
//             }else{
//                 console.log("Condition Unsatisfied");
//             }
//     })
// }
// printAlpha(24).then((response) => {
//     console.log(response);
// }).catch((error) =>{
//     console.log(reject);
// })


console.log("---promise chaining---");

// function printAlpha(time, value) {
//         return new Promise((resolve, reject) => {
//                 setTimeout(() => {
//                     console.log(value);
//                     resolve()  //sync
//                 }, time);  
//                 // resolve()   //async
//         })
//     }
// printAlpha(5000, 1)
// .then(()=>printAlpha(4000,2))
// .then(()=>printAlpha(3000,4))
// .then(()=>printAlpha(1000,6))
// .then(()=>printAlpha(6000,8))


console.log("---async await---");

// function printAlpha(time, value) {
//     return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 console.log(value);
//                 resolve()  //sync
//             }, time);  
//             // resolve()   //async
//     })
// }
// async function print(){
//     await printAlpha(4000, 1)
//     await printAlpha(6000, 2)
//     await printAlpha(3000, 3)
//     await printAlpha(4000, 4)
// } //sync
// print()

//await for stopping the async operation