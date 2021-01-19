var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var directionButton = document.getElementById("direction");
var randomButton = document.getElementById("random");

var buttonDirections = [
    "Left to Right",
    "Top to Bottom",
    "Diagonal"
];

var directions = [
    "to right",
    "to bottom",
    "to right bottom"
];

var counter = 0;

function setDirectionButton() {
    directionButton.textContent = buttonDirections[counter];
}

function changeDirection() {
    counter = (counter + 1) % directions.length;
    setGradient();
    setDirectionButton();
}

function setGradient() {
    body.style.background = 
        "linear-gradient("
        + directions[counter]
        + ", " 
        + color1.value 
        + ", " 
        + color2.value 
        + ")";

    css.textContent = body.style.background + ";";
}

// https://stackoverflow.com/questions/1484506/random-color-generator
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandomDirection() {
    counter = Math.floor(Math.random() * directions.length);
}

function setRandomGradient() {
    color1.value = getRandomColor();
    color2.value = getRandomColor();
    setRandomDirection();
    setDirectionButton();
    setGradient();
}

css.onclick = function() {
    document.execCommand("copy");
}

// https://stackoverflow.com/questions/45071353/copy-text-string-on-click
function copyCss(event) {
    event.preventDefault();
    if (event.clipboardData) {
        event.clipboardData.setData("text/plain", css.textContent);
    }
    alert("Copied to clipboard!");
}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

directionButton.addEventListener("click", changeDirection);

randomButton.addEventListener("click", setRandomGradient);

css.addEventListener("copy", copyCss);

setGradient();
