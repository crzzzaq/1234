//1
const elem = document.querySelector('#elem')
elem.firstElementChild.style.color = "red";
//2
elem.lastElementChild.style.color = "red";


//3
for (let i = 0; i < elem.children.length; i++) {
    elem.children[i].innerHTML += '!'
};
//4 
elem.parentNode.style.border = "solid red 2px"

//5
let elem3 = document.querySelector('#elem3');
let parent1 = elem3.closest("div");
console.log(parent1);


//6
const elem4 = document.querySelector('#elem4')
let parent = elem4.closest('.www');
console.log(parent);

//7
const elem1 = document.querySelector('#elem1')
elem1.previousElementSibling.innerHTML += '!';

//9
elem1.nextElementSibling.nextElementSibling.innerHTML += '!';

//8
elem1.nextElementSibling.innerHTML += '!';

//10

