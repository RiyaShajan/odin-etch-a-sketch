// ---------- ELEMENTS ----------
const container = document.getElementById("container");
const refreshBtn = document.getElementById("refreshBtn");
const newGridBtn = document.getElementById("newGridBtn");
const themeToggle = document.getElementById("themeToggle");

// ---------- CREATE GRID ----------
function createGrid(size) {
  // clear old grid
  container.innerHTML = "";

  // get container size (responsive)
  const containerSize = container.getBoundingClientRect().width;
  const squareSize = containerSize / size;

  // create squares
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    square.style.opacity = 0;

    // draw on hover
    square.addEventListener("mouseenter", () => {
      const isDarkMode = document.body.classList.contains("dark");
      square.style.backgroundColor = isDarkMode ? "white" : "black";

      let opacity = Number(square.style.opacity);
      if (opacity < 1) {
        square.style.opacity = opacity + 0.1;
      }
    });

    container.appendChild(square);
  }
}

// ---------- DEFAULT GRID ----------
createGrid(16);

// ---------- REFRESH BUTTON ----------
refreshBtn.addEventListener("click", () => {
  createGrid(16);
});

// ---------- NEW GRID BUTTON ----------
newGridBtn.addEventListener("click", () => {
  let size = Number(prompt("Enter grid size (max 100):"));

  if (size > 0 && size <= 100) {
    createGrid(size);
  } else {
    alert("Please enter a number between 1 and 100");
  }
});

// ---------- DARK / LIGHT MODE ----------
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  themeToggle.textContent = document.body.classList.contains("dark")
    ? "Light Mode"
    : "Dark Mode";
});
