//Activity 1
console.log ("Start"); 
setTimeout (() => {
    console. log ("Middle");
}, 2000); 
console. log ("End");

//Activity 2
console.log ("A"); 
setTimeout (() => {
    console.log ("B");
}, 1000); 
console. log ("C");

//Activity 3
console.log ("1"); 
setTimeout (() => {
    console.log ("2");
}, 0); 
console. log ("3");

//Activity 4
setTimeout (() =>  console.log ("X"), 500);
setTimeout (() =>  console.log ("Y"), 100);
console. log ("Z");


