let bodyColor = document.querySelector("body");
let button = document.querySelector("#btn");
let paragraph = document.getElementsByTagName("p");
let header = document.getElementsByClassName("header");
// on click button
button.addEventListener("click", () => {
  //Change background color of the body
  bodyColor.style.background = "magenta";
  // Iterate through the array containing all the p tag of the HTML
  for (let i = 0; i < paragraph.length; i++) {
    // Change the color of all ements
    paragraph[i].style.color = "blue";
    // Change the font style of all elements of the array
    paragraph[i].style.fontFamily = "courier";
  }
  // Iterate through the array containing elements with class header
  for (let i = 0; i < header.length; i++) {
    // Change the color of all ements
    header[i].style.color = "green";
    // Change the font style of all elements of the array
    header[i].style.fontFamily = "Comic Sans, sans-serif";
  }
});

// Call the setTimeout() method to display the popup after 10s
setTimeout(function () {
  // Display a confirmation box
  if (
    window.confirm(
      "Hey le site xxxvidsxxx est trop bien. Viens dessus stp please !!"
    )
  ) {
    // If the user clicked OK (confirm) he will be redirected to the link below
    document.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  }
}, 10000);
