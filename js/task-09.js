function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeColor = document.querySelector(".change-color");
const currentColor = document.querySelector(".color");
const bodyColor = document.querySelector("body");

changeColor.addEventListener("click", () => {
  const color = getRandomHexColor();
  bodyColor.style.backgroundColor = color;
  currentColor.textContent = color;
});
