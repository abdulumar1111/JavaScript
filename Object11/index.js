// const JSUser = {
//     name:"Zeeshan Ansari",
//     age:24,
//     location:"Noida",
//     email:'abc123@gmail.com',
//     isLoggedIn:false,
//     lastLoggin:['Monday','Saturday']
// };

// console.log(JSUser.name);
// console.log(JSUser["name"]);

const mySymbol = Symbol('Key1');
const JSUser = {
    name:"Zeeshan Ansari",
    age:24,
    location:"Noida",
    [mySymbol] : "myKey1",
    email:'abc123@gmail.com',
    isLoggedIn:false,
    lastLoggin:['Monday','Saturday']
};

// console.log(JSUser[mySymbol]);
// console.log(JSUser["name"]);


// Change Key and Value Pair
// JSUser.email = "zee1290@gmail.com";
// console.log(JSUser);


// Freeze
// Object.freeze(JSUser);
// JSUser.name = "Abdul";
// console.log(JSUser);


// Function

// JSUser.greeting = function () {
//     console.log('Hello Mr Rizwan Ansari');
// }

// console.log(JSUser.greeting());

// this
JSUser.greeting2 = function() {
    console.log(`Hello Zeeshan Ansari and your age is ${this.age}`);
}

console.log(JSUser.greeting2());
