// Menu

const menuIcon = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");
const menuBackground = document.querySelector(".menu-bg");

menuIcon.addEventListener("click", () => {
  menu.classList.toggle("menu--active");
  menuBackground.classList.toggle("menu-bg--active");
});

menuBackground.addEventListener("click", () => {
  menu.classList.remove("menu--active");
  menuBackground.classList.remove("menu-bg--active");
});

// People also ask

const expandMoreIcon = document.querySelector(".expand-more-icon");
const itemCardContainer = document.querySelector(
  ".accordion-item-card-container"
);

expandMoreIcon.addEventListener("click", () => {
  expandMoreIcon.classList.toggle("expand-more-icon--active");
  itemCardContainer.classList.toggle("accordion-item-card-container--active");
});

// Related searches

const expandIcon = document.querySelector(".expand-icon");
const itemBody = document.querySelector(".search-card-item-container");
const itemBodyList = document.querySelector(".search-card-item");
const imgContainer = document.querySelector(
  ".search-card-item-header-img-container"
);

expandIcon.addEventListener("click", () => {
  expandIcon.classList.toggle("expand-icon--active");
  itemBody.classList.toggle("search-card-item-container--active");
  itemBodyList.classList.toggle("search-card-item--active");
  imgContainer.classList.toggle(
    "search-card-item-header-img-container--active"
  );
});
