// const myArr = [0,1,2,3,4,5,6];
// console.log(myArr);

// const myArr2 = new Array(0,1,2,3,4,5);
// console.log(myArr2[0])

// push
// const myArr = [0,1,2,3,4,5];
// myArr.push(6);
// console.log(myArr);

// pop
// const myArr = [0,1,2,3,4,5];
// myArr.pop();
// console.log(myArr);

// unShift
// const myArr = [0,1,2,3,4,5];
// myArr.unshift(6);
// console.log(myArr);


// shift
// const myArr = [0,1,2,3,4,5];
// myArr.shift();
// console.log(myArr);

// includes
// const myArr = [0,1,2,3,4,5];
// console.log(myArr.includes(5));


// indexOf
// const myArr = [0,1,2,3,4,5];
// console.log(myArr.indexOf(3));


// join
// const myArr = [0,1,2,3,4,5];
// const newArr = myArr.join(',');
// console.log(myArr);
// console.log(newArr);


// slice
// const myArr = [0,1,2,3,4,5];
// const newArr = myArr.slice(1,3);
// console.log(myArr);
// console.log(newArr);


// splice
// const myArr = [0,1,2,3,4,5];
// const newArr = myArr.splice(1,3);
// console.log(myArr);
// console.log(newArr);


// concat
const marvel_heros = ['thor','Ironman','spiderman'];
const dc_heros = ['superman','flash','batman'];
const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros);


// flat
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array)


// isArray
console.log(Array.isArray('Zeeshan'));


// from
console.log(Array.from('Zeeshan'));


console.log(Array.from({
    name:'Zeeshan'
}))


// of
const score1 = 100;
const score2 = 200;
const score3 = 300;
console.log(Array.of(score1,score2,score3));