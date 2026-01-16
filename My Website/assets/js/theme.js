const toggle = document.getElementById("themeToggle");
const body = document.body;

/* THEME */
const saved = localStorage.getItem("theme");
if (saved === "light") body.classList.add("light");

toggle.addEventListener("click", () => {
  body.classList.toggle("light");
  localStorage.setItem(
    "theme",
    body.classList.contains("light") ? "light" : "dark"
  );
});

/* BUBBLE PARALLAX */
const bubbles = document.querySelectorAll(".bubbles span");

document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;

  bubbles.forEach((bubble, i) => {
    const speed = (i + 1) * 0.3;
    bubble.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
  });
});