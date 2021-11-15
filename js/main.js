const menu = document.getElementById("menu");
const toggleMenu = document.getElementById("toggleMenu");

toggleMenu.addEventListener("click", () => {
  menu.classList.toggle("show");
});
