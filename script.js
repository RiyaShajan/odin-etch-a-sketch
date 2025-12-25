// ---------- ELEMENTS ----------
const container = document.getElementById("container");
const refreshBtn = document.getElementById("refreshBtn");
const newGridBtn = document.getElementById("newGridBtn");
const themeToggle = document.getElementById("themeToggle");

// ---------- CREATE GRID ----------
function createGrid(size) {
  // Clear old grid
  container.innerHTML = "";

  // Set up the CSS Grid columns and rows based on 'size'
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  // Create squares
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    
    // Start invisible
    square.style.opacity = 0;

    // Draw on hover
    square.addEventListener("mouseenter", () => {
      const isDarkMode = document.body.classList.contains("dark");
      square.style.backgroundColor = isDarkMode ? "white" : "black";

      // Increment opacity by 0.1 each time
      let opacity = Number(square.style.opacity);
      if (opacity < 1) {
        square.style.opacity = opacity + 0.1;
      }
    });

    container.appendChild(square);
  }
}

// ---------- INITIALIZE ----------
createGrid(16);

// ---------- BUTTON EVENTS ----------
refreshBtn.addEventListener("click", () => {
  createGrid(16);
});

newGridBtn.addEventListener("click", () => {
  let size = Number(prompt("Enter grid size (max 100):"));

  if (size > 0 && size <= 100) {
    createGrid(size);
  } else if (size !== 0) { // Only alert if they didn't hit cancel
    alert("Please enter a number between 1 and 100");
  }
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark")
    ? "Light Mode"
    : "Dark Mode";
});