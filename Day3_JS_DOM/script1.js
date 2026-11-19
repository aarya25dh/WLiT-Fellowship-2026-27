//DOM Manipulation

const title = document.querySelector("#heading");
//console.log(title);
title.style.color = "red";
title.textContent = "Things I personally like to do!"

const items = document.querySelectorAll(".item-list");
//items.style.color = "red"; //not allowed to change all list items at once
console.log(items);

//to access all elements of a list
//approach 1
// for (let i = 0; i < items.length; i++) {
//     items[i].style.fontWeight = "bold";
//     items[i].style.color = "red";
// }

//approach 2
items.forEach((item) => {
    item.style.fontWeight = "normal";
});
