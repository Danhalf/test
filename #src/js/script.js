@@include("ibg.js");
@@include("fonts.js");
@@include("testWebP.js");

document.querySelector(".icon-menu").addEventListener("click", (evt) => {
  evt.preventDefault();
  let burgerButton = document.querySelector(".icon-menu");
  let menuBody = document.querySelector(".menu__body");
  burgerButton.classList.toggle("icon-menu--active");
  menuBody.classList.toggle("active");
});
