// forEach loop

// const country = ['In','Pok','Sl','Ban','Afg','Ne'];
// country.forEach((value,index) => {
//     console.log(`${index} :- ${value}`);
// })



// const country = ['In','Pok','Sl','Ban','Afg','Ne'];
// country.forEach((value,index,arr) => {
//     console.log(`${index} :- ${value} :- ${arr}`);
// })



const liveCourse = [
    {
        coursename:'JavaScript',
        price:'3000'
    },
    {
        coursename:'DS',
        price:'3500'
    },
    {
        coursename:'Python',
        price:'4000'
    }
];


liveCourse.forEach((item) => {
    console.log(item.coursename)
})