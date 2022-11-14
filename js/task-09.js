function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColor = document.querySelector(".change-color");
const background = document.querySelector(".widget");

btnChangeColor.addEventListener("click", (event) => {
  const color = getRandomHexColor();
  console.log(color);
  background.style.backgroundColor = color;
});
