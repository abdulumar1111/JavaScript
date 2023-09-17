// for loop

// for(let i = 1; i <= 10; i++) {
//     console.log(i);
// }


// for(let i = 1; i <= 10; i++) {
//     if (i === 5) {
//         console.log('5 is Best Number');
//     }
//     console.log(i);
// }


// for(let i = 1; i <= 10;i++) {
//     for(let j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
// }



// let mySuperHero = ["Batman","Superman","Spiderman","Flash"];
// for(let i = 0; i < mySuperHero.length; i++) {
//     const element = mySuperHero[i];
//     console.log(element);
// }


// Break
// for(let i = 1; i <= 20; i++) {
//     if (i === 5) {
//         console.log(`${i} is detected`);
//         break
//     }
//     console.log(i);
// }


// Continue
for(let i = 1; i <= 20; i++) {
    if (i === 5) {
        console.log("5 is not detected");
        continue
    }
    console.log(i);
}