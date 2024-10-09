// toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// ketika hamburger menu di click
document.querySelector("#hambuger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
