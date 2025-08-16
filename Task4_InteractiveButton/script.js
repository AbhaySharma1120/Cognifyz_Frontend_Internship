// List of background colors

const colors = ["#f28b82", "#aecbfa", "#ccff90", "#fdcfe8", "#fff475"];

const button = document.getElementById("colorButton");

button.addEventListener("click", () => {
  //Pick a random color
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  //Change background color
  document.body.style.backgroundColor = randomColor;
});
