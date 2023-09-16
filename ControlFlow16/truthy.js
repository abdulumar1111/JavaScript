// Truthy
// const userEmail = "abc123@gmail.com";
// if (userEmail) {
//     console.log('Got an email');
// } else {
//     console.log("Don't have Email");
// }


// falsy
// const userEmail = "";
// if (userEmail) {
//     console.log('Got an email');
// } else {
//     console.log("Don't have Email");
// }



// Truthy
// const userEmail = []
// if (userEmail) {
//     console.log('Got an email');
// } else {
//     console.log("Don't have Email");
// }



// const userEmail = []
// if (userEmail.length === 0) {
//     console.log('Array is empty');
// }


// const userEmail = {}
// if (Object.keys(userEmail).length === 0) {
//     console.log('Object is empty');
// }


// Nullish Coalescing Operator (??) : null undefined
// let val1;

// val1 = 5 ?? 10;
// console.log(val1);


// val1 = null ?? 10;
// console.log(val1);

// val1 = undefined ?? 10;
// console.log(val1);



// Ternary Operator
const isIceTea = 100;
isIceTea <= 80 ? console.log('Less then 80') : console.log('Greater then 80');;