// map() methos

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNum = num.map((item) => item + 10);
// console.log(newNum);

const newNum = num.map((item) => item + 10).map((item) => item + 2).filter((item) => item >= 16);
console.log(newNum);
