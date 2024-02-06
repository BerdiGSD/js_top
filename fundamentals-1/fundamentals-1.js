// Problem 1:
console.log(23 + 97);
// result 120

// Problem 2: 
console.log(2 + 10 + 23 + 91 + 12 + 4);
// result 142

// Problem 3:
let findSolution = (4 + 6 + 9) / 77;
console.log(findSolution);
// result 0.24675324675324675

// Problem 4: 
let a = 10;
console.log(a);
// result 10
let b = 7 * a;
console.log(b);
// result 70;

// Problem 5: 
let max = 57; 
let actual = max - 13;
let percent = actual / max;
console.log(percent);
// result 0.7719298245614035


// Problem 2 version 2 
// Attempt at using a for loop to provide 6 random numbers and add them in result as well as fill an array.

const myArr = [];
let result = "";

for (let i = 0; i < 6; i++){
    let someInt = 18 * i + 3 * 2;
    myArr.push(someInt);
}

for (let j = 0; j < myArr.length; j++){
    result = myArr[j] + result;
    // console.log("the result at array pos: "+ j + " is: " + result)
}

console.log(result)

// under these circumstances the final result ends up being 96,786,042,246