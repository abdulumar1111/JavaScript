// let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());



// let createDate = new Date(2023,8,8);
// console.log(createDate.toDateString());



// let createDate = new Date(2023,8,8,5,5);
// console.log(createDate.toLocaleString());

// let createDate = new Date("2023-09-09");
// console.log(createDate.toLocaleString());

let createDate = new Date("01-23-2023");
console.log(createDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(createDate.getTime());
console.log(Math.floor(Date.now()/1000))