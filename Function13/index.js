// function sayName() {
//     console.log('Hello Zeeshan Ansari');
// }

// sayName();


// Function with Parameter
// function addTwoNumber(a,b) {
//     console.log(a+b);
// }

// const result = addTwoNumber(10,20);
// console.log(`Result ${result}`);



// Function With Return

// function addTwoNumber(a,b) {
//     return a+b
// }

// const result = addTwoNumber(10,20);
// console.log(`Result ${result}`);



// function addTwoNumber(a,b) {
//     let result = a + b;
//     console.log('Hello Zeeshan Ansari');
//     return result;
//         console.log('Hello Rizwan Ansari');
// }

// const result = addTwoNumber(10,20);
// console.log(`Result ${result}`);


// function loginUser(userName) {
//     return `${userName} just logged In`
// }

// const loginMessage = loginUser('Zeeshan');
// console.log(loginMessage);

// function loginUser(userName) {
//     if (userName === undefined) {
//         console.log('Please Enter UserName');
//         return
//     }
//         return `${userName} just logged In`
// }

// console.log(loginUser());


// function loginUser(userName) {
//     if (!userName) {
//         console.log('Please Enter UserName');
//         return
//     }
//         return `${userName} just logged In`
// }

// console.log(loginUser());



// Function with default parameter

// function loginUser(userName = "Zeeshan") {
//     if (!userName) {
//         console.log('Please Enter UserName');
//         return
//     }
//         return `${userName} just logged In`
// }

// console.log(loginUser());



// function with Rest Operator
// function CalculateCartPrice(val1,val2,...num) {
//     return num
// }

// console.log(CalculateCartPrice(10,20,30,40,50));


// function with Object
// const user = {
//     userName:'Zeeshan Ansari',
//     price:'199'
// }

// function handleObject(anyObject) {
//     console.log(`Hello Mr ${anyObject.userName} and your tshirt price ${anyObject.price}`);
// }

// handleObject(user)



// function with Array

const myNewArray = [10,20,30,40,50];

function handleArray(getArray) {
    return getArray[0]
}

console.log(handleArray(myNewArray));