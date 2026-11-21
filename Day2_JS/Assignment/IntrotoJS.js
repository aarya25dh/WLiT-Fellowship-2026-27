// Task 1:
// Write a JavaScript function that accepts a number as a parameter and checks whether the number is positive or not.
//Approach 1
var checknumber = (x) => {
    if(x > 0){
        console.log("The number is positive");
    }else{
        console.log("The number is negative");
    }
}
checknumber(8);

//Approach 2
let x = -2
console.log(x>0?"The number is positive":"The number is negative");

// Task 2:
// Write a JavaScript function to find the largest number in an array given as the parameter. (Use arrow function).
const arr1 = [11,14,17,88,90];
let lar = arr1[0];
const findlarge = (arr1) => {
    console.log(Math.max(...arr1)); //this is spread operator and Math is a library used
}
findlarge(arr1);

const arr2 = [12,4,77,38,20];
let large = arr2[0];
const findlargest = (arr2) => {
    for(let i = 1; i<arr2.length; i++){
        if(arr2[i]>large){
            large = arr2[i];
        }
    }
    console.log("The largest number is" + large);
}
findlarge(arr2);

// Task 3:
// Write a program to find the area of a cylinder using JavaScript objects (radius, height and the area function should be in the object). (Area of a Cylinder= pi*r^2*h)
let cylinder = {
    "radius": 2,
    "height": 8,
    area: function(){
        let areaa = Math.PI * this.radius * this.radius * this.height
        console.log("The area of the cylinder is: " + areaa);
    }
};
cylinder.area();

// Task 4:
// Write a program to find the area of a square and a rectangle using JavaScript objects with a common area function. (Use this keyword). (Area of a Rectangle/Square = length * breadth)
let area = {
    length: 5,
    breadth: 7,
    rectangleArea: function(){
        console.log("The area of the rectangle is : " + this.length * this.breadth);
    },
    squareArea: function(){
        console.log("The area of the square is : " + this.length**2);
    }
}
area.rectangleArea();
area.squareArea();