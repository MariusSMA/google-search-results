const menuIcon = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");
const menuBackground = document.querySelector(".menu-bg");

menuIcon.addEventListener("click", () => {
  menu.classList.toggle("active");
  menuBackground.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  menuBackground.style.display = "block";
});

menuBackground.addEventListener("click", () => {
  menu.classList.remove("active");
  menuBackground.style.backgroundColor = "rgba(0, 0, 0, 0)";
});
