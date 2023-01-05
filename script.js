const grid = document.querySelector(".grid");
for (let i = 0; i < 16 * 16; ++i) {
  const div = document.createElement("div");
  div.classList.add("gridElement");
  grid.appendChild(div);
}

let color = "#2f3030";
let mode = "colorMode";
let lastColor = color;

const colorPicker = document.querySelector("#colorPicker");
if(mode == "colorMode") {
  colorPicker.addEventListener("input", (event) => {
    color = event.target.value;
    lastColor = color;
  });
}

const gridElements = Array.from(document.querySelectorAll(".gridElement"));
showColor();

const buttons = Array.from(document.querySelectorAll("button"));
buttons.forEach((button) =>
  button.addEventListener("click", () => {
    mode = button.className;
    selectMode(mode, buttons);
    showMode();
  })
);

function showColor() {
  gridElements.forEach((gridElement) =>
  gridElement.addEventListener("mouseover", () => {
    gridElement.style.cssText = `background-color: ${color}`;
  })
);
}

function showMode() {
  if (mode == "colorMode") {
    color = lastColor;
    showColor();
  } else if (mode == "eraser") {
    color = "#fefefe";
    showColor();
  } else if (mode == "rainbowMode") {
    const randomR = Math.floor(Math.random() * 256)
    const randomG = Math.floor(Math.random() * 256)
    const randomB = Math.floor(Math.random() * 256)
    color = `rgb(${randomR}, ${randomG}, ${randomB})`;
    showColor();
  } else if (mode == "clear") {
    gridElements.forEach((gridElement) => {
      color = "#fefefe"
      gridElement.style.cssText = `background-color: ${color}`;
    });
  }
}

function selectMode(mode, buttons) {
  for (let i = 0; i < 4; ++i) {
    if (buttons[i].className.includes(mode)) {
      buttons[i].classList.add("active");
    } else {
      buttons[i].classList.remove("active");
    }
  }
}
