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

const askItemHeader = document.querySelectorAll(".accordion-item-header");
const expandMoreIcon = document.querySelectorAll(".expand-more-icon");
const itemCardContainer = document.querySelectorAll(
  ".accordion-item-card-container"
);

for (let i = 0; i < askItemHeader.length; i++) {
  askItemHeader[i].addEventListener("click", () => {
    expandMoreIcon[i].classList.toggle("expand-more-icon--active");
    itemCardContainer[i].classList.toggle(
      "accordion-item-card-container--active"
    );
  });
}

// Related searches

const searchItemHeader = document.querySelector(".search-card-item-header");
const expandIcon = document.querySelector(".expand-icon");
const itemBody = document.querySelector(".search-card-item-container");
const itemBodyList = document.querySelector(".search-card-item");
const imgContainer = document.querySelector(
  ".search-card-item-header-img-container"
);

searchItemHeader.addEventListener("click", () => {
  expandIcon.classList.toggle("expand-icon--active");
  itemBody.classList.toggle("search-card-item-container--active");
  itemBodyList.classList.toggle("search-card-item--active");
  imgContainer.classList.toggle(
    "search-card-item-header-img-container--active"
  );
});
