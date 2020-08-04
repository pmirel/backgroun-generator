var cssValue = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var bodyColor = document.getElementById("gradient");
button = document.getElementById("changer")
changeColorValue();
console.log(color1);

function changeColorValue () {
  bodyColor.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  cssValue.textContent = bodyColor.style.background + ";"
}

function randomColor() {
  color1.value = "#" + Math.floor(Math.random()*16777215).toString(16);
  color2.value = "#" + Math.floor(Math.random()*16777215).toString(16);
  console.log(color1);
  console.log(color2);
  changeColorValue();

}

color1.addEventListener("input", changeColorValue)

color2.addEventListener("input", changeColorValue)

button.addEventListener("click", randomColor)