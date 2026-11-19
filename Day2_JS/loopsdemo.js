// function can be hoisted, variables cannot be hoisted
// use node to run the file
// let x = 75
// console.log(x>50?"x is greater than 50":"x is less than 50"); //ternary operator

//conditionals
// let grade = 80
// if(grade>=90){
//     console.log("Grade A")
// }
// else if(grade>=80){
//     console.log("Grade B")
// }
// else if(grade>=50){
//     console.log("Grade C")
// }
// else{
//     console.log("Grade F")
// }

//ternary operator
// console.log(grade>80?"Grade A":"Grade F")

//switch case operator
let x = 6
switch(x){
    case(1):
    console.log("Printed 1");
    break;
    case(2):
    console.log("Printed 2");
    break;
    case(3):
    console.log("Printed 3");
    break;
    case(4):
    console.log("Printed 4");
    break;
    case(5):
    console.log("Printed 5");
    break;
    case(6):
    console.log("Printed 6");
    break;
    default:
    console.log("Number not found");
    break; //break is optional in the default case, but it's good practice to include it
}

let s = 22
while(s<28){
    console.log(s);
    s++;
}

let d = 0
do{
    console.log(d);
    d++;
}while(d<7);