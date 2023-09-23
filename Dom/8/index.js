const div = document.createElement('div');
console.log(div);
div.className = "main";
div.id = Math.round(Math.random() + 10 + 1);
div.setAttribute('title','generated title');
div.style.backgroundColor = "yellow";
div.style.padding = "12px";
const addText = document.createTextNode('Hello Zeeshan Ansari');
div.appendChild(addText);
document.body.appendChild(div)