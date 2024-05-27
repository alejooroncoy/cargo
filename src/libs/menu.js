const $navCargo = document.querySelector("#navCargo");
const $menuArrow = document.querySelector("#menuArrow");

document.addEventListener("DOMContentLoaded", () => {
  // $navCargo
  $menuArrow.addEventListener("click", () => {
    $navCargo.classList.toggle("nav--open");
  });
});