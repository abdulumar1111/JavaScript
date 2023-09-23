// const listStyle = document.querySelectorAll('li');
// listStyle[0].style.backgroundColor = "red";

// const headingStyle = document.querySelectorAll('h1');
// headingStyle[0].style.color = "green"


const listStyle = document.querySelectorAll('li');
listStyle.forEach((list) => {
    list.style.color = "red";
    list.style.listStyle = "none";
    list.style.textDecoration = "underline"
})