// loops

/**
 * for 
 * while
 * do-while
 * for-in
 * for-of
 */

// for loop

// for(let i =0; i <= 10; i++){
//     console.log(i);
// }

// while

// i = 0;
// while(i <= 10){
//     console.log(i);
//      i++;
// }

// let i = 10;

// do{
//     console.log("first time code run");
// } while(i <= 10);


// let person = {
//     name : "sudhir",
//     age : 30,
//     city : "chandigarh",
// }

// for(let key in person){
//     console.log(key + ":" + person[key]);
// }

// for of loop -> depend on array and string\

let arr = ["apple", "mango", "pineapple", "graps"];

for(fruit of arr){
    console.log(fruit);
}