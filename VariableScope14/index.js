// Block Scope

// let a = 300;
// if (true) {
//     let a = 30;
//     const b = 45;
//     console.log(`Inner Scope ${a}`);
// }

// console.log(a);

// function One() {
//   const username = "Zeeshan Ansari";

//   function Two() {
//     const website = "youtube.com";
//     console.log(username);
//   }
//   console.log(website);
//   Two();
// }

// One();



// if (true) {
//     const username = "Zeeshan";

//     if (username === "Zeeshan") {
//         const website = "youtube.com";
//         console.log(username + website);
//     }

//     console.log(website);
// }

// console.log(username);

const addTwoNumber = function(num) {
    return num + 1
}

console.log(addTwoNumber(5));
