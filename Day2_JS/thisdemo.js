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

function CalculateArea(){
    return this.length * this.breadth;
}

const square = {
    length: 6,
    breadth: 6,
    area: CalculateArea,
}

const rect = {
    length: 7,
    breadth: 9,
    area: CalculateArea
}

console.log("The area of the square is : " + square.area());
console.log("The area of the rectangle is : " + rect.area());
