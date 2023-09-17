// reducer() method

// const num = [1,2,3,4,5,6,7,8,9,10];

// const sum = num.reduce((acc,currentValue) => {
// return acc + currentValue
// },0);

// console.log(sum);



const shoppingCart = [
    {
        course:'Java Script',
        price:3000
    },
    {
        course:'Java',
        price:5000
    },
    {
        course:'Python',
        price:8000
    }
];

const coursePurchase = shoppingCart.reduce((acc,curr) => {
    return acc + curr.price
},0)

console.log(coursePurchase);