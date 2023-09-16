// If Statement

// const userLoggedIn = true;
// if (userLoggedIn) {
//     console.log('Welcome to this website');
// }

// // ==
// if (2 == "2") {
//     console.log("Executed");
// }

// ===
// if (2 === "2") {
//     console.log("Executed");
// }

// console.log("Not Executed");

// !=
// if (2 != 3) {
//     console.log("Executed");
// }

// if else
// const temprature = 41;
// if (temprature <= 50) {
//     console.log("Temprature less then 50");
// }
// else {
//     console.log("Temprature greater then 50");
// }

// const score = 200;
// if (score > 100) {
//   let power = "fly";
//   console.log(`User Power ${power}`);
// }

// Nested If Else
// const balance = 1000;
// if (balance < 500) {
//   console.log(`Balance is less then ${balance}`);
// } else if (balance < 750) {
//   console.log(`Balance is less then ${balance}`);
// } else if (balance < 950) {
//   console.log(`Balance is less then ${balance}`);
// } else {
//   console.log(`Balance is equal to ${balance}`);
// }


// && Operator
// const userLoggedIn = true;
// const debitCard = true;

// if (userLoggedIn && debitCard) {
//     console.log("Allow to buy course");
// }
// else {
//     console.log("Not Allow to buy course");
// }


// OR Operator ||
const userLoggedInFromGoogle = false;
const userLoggedInFromEmail = true;
if (userLoggedInFromGoogle || userLoggedInFromEmail) {
   console.log('User Logged In'); 
}
else {
    console.log('Otherwise User Logged In');
}