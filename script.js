let bodyColor = document.querySelector("body");
let button = document.querySelector("#btn");
let paragraph = document.getElementsByTagName("p");
let header = document.getElementsByClassName("header");
button.addEventListener("click", () => {
  bodyColor.style.background = "magenta";
  for (let i = 0; i < paragraph.length; i++) {
    paragraph[i].style.color = "blue";
    paragraph[i].style.fontFamily = "courier";
  }
  for (let i = 0; i < header.length; i++) {
    header[i].style.color = "green";
    header[i].style.fontFamily = "Comic Sans, sans-serif";
  }
});
