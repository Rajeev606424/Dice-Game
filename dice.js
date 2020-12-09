// Image 1

var rand1 = Math.floor(Math.random() * 6) + 1;

var randImage1 = "images/dice" + rand1 + ".png";

var images1 = document.querySelector(".img1").setAttribute("src", randImage1);

// Image 2

var rand2 = Math.floor(Math.random() * 6) + 1;

var randImage2 = "images/dice" + rand2 + ".png";

var images2 = document.querySelector(".img2").setAttribute("src", randImage2);

// heading 

if (rand1 > rand2) {
  document.querySelector("h1").innerText = "🚩Player 1 wins";
} else if (rand2 > rand1) {
  document.querySelector("h1").innerText = "Player 2 wins🚩";
} else {
  document.querySelector("h1").innerText = "It's a draw";
}
