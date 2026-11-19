//DOM Events
//Keyboard Events

//Key Down
const boxOne = document.querySelector("#box1");
console.log(boxOne);
function alertBtn() {
  alert(" You pressed a key in Box 1");
}
boxOne.addEventListener("keydown", alertBtn);

//Key Press
const boxThree = document.querySelector("#box3");
function alertBtn3() {
  alert("You pressed a key inside Box 3.");
}
boxThree.addEventListener("keypress", alertBtn3);

//Text Input
const textInput = document.getElementsByClassName("textInput")[0];
textInput.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    console.log("Entered text:", textInput.value);
  }
});
