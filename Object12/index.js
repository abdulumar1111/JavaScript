// const tinderUser = new Object();

// const tinderUser = {}

// tinderUser.id = "123";
// tinderUser.name = "abc";
// tinderUser.isLoggedIn = false;

// console.log(tinderUser);


// const regularUser = {
//     email:"some123@gmail.com",
//     fullName:{
//         userFullName:{
//             firstName:"Zeeshan",
//             lastName:"Ansari"
//         }
//     }
// }


// console.log(regularUser.fullName.userFullName.firstName);


// Object Destructuring
// const obj1 = {
//     1:'a',
//     2:'b'
// }

// const obj2 = {
//     3:'c',
//     4:'d'
// }

// const obj3 = {...obj1,...obj2}
// console.log(obj3)


// Object Assign
// const obj1 = {
//     1:'a',
//     2:'b'
// }

// const obj2 = {
//     3:'c',
//     4:'d'
// }

// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3)


// keys
// const tinderUser = {}

// tinderUser.id = "123";
// tinderUser.name = "abc";
// tinderUser.isLoggedIn = false;

// console.log(Object.keys(tinderUser));

// // Values
// console.log(Object.values(tinderUser));

// // entries
// console.log(Object.entries(tinderUser));


// // hasOwnProperty
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// Object Destructuring
const course = {
    courseName:"JavaScript",
    coursePrice:"999",
    CourseHour:'13 Hour'
}

const {courseName,coursePrice,CourseHour} = course;
console.log(courseName)