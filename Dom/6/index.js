// const listStyle = document.getElementsByClassName('list');
// const listArray = Array.from(listStyle);
// listArray.forEach((li) => {
//     li.style.color = "red"
// });



const listStyle = document.getElementsByClassName('list');
const listArray = Array.from(listStyle);
listArray.map((li) => {
    li.style.color = "red"
});