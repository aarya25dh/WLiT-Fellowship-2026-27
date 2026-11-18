function doSomething(){
    console.log("This Function does Something");
}

function multiply(x,y){
    console.log(x*y);
}
multiply(5,4);

//var x = () => { } arrow function
//to call the function, use the function name followed by parentheses
// () is parentheses to pass parameters
// {} is curly braces for function
// [] for arrays

var doSomethingElse = () => {
    console.group("This is an arrow function");
}
doSomethingElse();

var checknumber = (x) => {
    if(x > 0){
        console.log("The number is positive");
    }else{
        console.log("The number is negative");
    }
}
checknumber(8);

let x = 5
console.log(x>0?"The number is positive":"The number is negative");

let arr = [3,4,5,6,7];
const findlargest = (arr) => {
    console.log("Mic check");
    console.log(arr);
    let largest = arr[0];
    for (let i = 1; i<arr.length ; i++){
        if(largest<arr[i]){
            largest = arr[i];
        }
    }
    console.log("The largest number is the array is : " + largest);
}
findlargest(arr);

const arr1 = [11,14,17,88,90];
let lar = arr1[0];
const findlarge = (arr1) => {
    console.log(Math.max(...arr)); //this is spread operator and Math is a library used
}
findlarge(arr1);