var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
  //Mode buttons
  for(var i=0;i<modeButtons.length;i++){
    modeButtons[i].addEventListener("click",function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");

      this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
      reset();
    });
  }
  //sets up squares
  for(var i=0;i<squares.length;i++){
    //add event listeners
    squares[i].addEventListener("click",function(){
      //grab color of clicked square
      var clickedColor = this.style.background;
      //compare color to picked color
      if(clickedColor === pickedColor){
        messageDisplay.textContent = "Correct!";
        resetButton.textContent="Play Again?";
        changeColors(clickedColor);
        h1.style.background = clickedColor;
      }else{
        this.style.background = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  }//end for

  reset();
}

function reset(){
  colors = generateRandomColors(numSquares);
  //pick new random color from array
  pickedColor = pickColor();
  //change display
  colorDisplay.textContent = pickedColor;
  messageDisplay.textContent="";
  //change color of squares on the page
  for(var i=0;i<squares.length;i++){
    if(colors[i]){
      squares[i].style.display="block";
      squares[i].style.background = colors[i];
    }else{
      squares[i].style.display="none";
    }
  }
  h1.style.background = "steelblue";
  resetButton.textContent="New Colors";
}

resetButton.addEventListener("click",function(){
  reset();
});


function changeColors(color){
  //loop and change color to matched color
  for(var i=0;i<squares.length;i++){
    squares[i].style.background = color;
  }
}

function pickColor(){
  var random = Math.floor(Math.random() *colors.length);
  return colors[random];
}

function generateRandomColors(num){
  //make array
  var arr = [];
  //add num random colors to array
  for(var i=0;i<num;i++){
    //Get random color and push into array
    arr[i] = randomColor();
  }
  //return array
  return arr;
}

function randomColor(){
  //pick a red green and blue
  var r = Math.floor(Math.random()*256);
  var g = Math.floor(Math.random()*256);
  var b = Math.floor(Math.random()*256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
