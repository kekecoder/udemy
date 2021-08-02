const input = document.getElementById("color");
const input2 = document.getElementById("color2");
const h3 = document.querySelector("h3");
const body = document.getElementById("gradient");

input.addEventListener("input", backgroundColor);
input2.addEventListener("input", backgroundColor);

function backgroundColor() {
  body.style.background =
    "linear-gradient(to right, " + input.value + "," + input2.value + ")";

  h3.textContent = body.style.background + ";";
}
