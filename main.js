import './style.css'

/**
 * @type {HTMLButtonElement}
 */
const menuButton = document.querySelector("#menuButton");
/**
 * @type {HTMLUListElement}
 */
const menu = document.querySelector("#menu");

document.addEventListener("DOMContentLoaded", () => {
  const handleClickMenuToggle = () => {
    menu.classList.toggle("menu--open");
  }

  menuButton?.addEventListener("click", handleClickMenuToggle);
});
