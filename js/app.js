const menuIcon = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");
const menuBackground = document.querySelector(".menu-bg");
const expandIcon = document.querySelector(".expand-icon");
const itemBody = document.querySelector(".search-card-body-item-container");
const itemBodyItem = document.querySelector(".search-card-body-item");
const itemHeader = document.querySelector(".search-card-body-item-header");

menuIcon.addEventListener("click", () => {
  menu.classList.toggle("menu--active");
  menuBackground.classList.toggle("menu-bg--active");
});

menuBackground.addEventListener("click", () => {
  menu.classList.remove("menu--active");
  menuBackground.classList.remove("menu-bg--active");
});

expandIcon.addEventListener("click", () => {
  expandIcon.classList.toggle("expand-icon--active");
  itemBody.classList.toggle("search-card-body-item-container--active");
  itemBodyItem.style.padding = "0.35rem 0";
  itemHeader.innerHTML += `
      <div style="display: flex; align-items: center; width: 40px; height: 40px; order: -1; background-color: rgba(0,0,0,.03); border-radius: 0.25rem; margin-right: 0.625rem;">
        <img style="width: 40px;" src="../images/go-daddy-small-logo.png" alt="GoDaddy Logo"/>
      </div>
    `;
});

// @TODO place the img and the img container to the html with display none and then create classes and toggle them np ok bro luv <3
