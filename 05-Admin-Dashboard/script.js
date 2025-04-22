const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".open-close");
const leftNavbar = document.querySelector(".left-navbar");

const darkMode = document.querySelector("#light-dark");
let tf = true;
darkMode.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode-variable");
    if(tf){
        darkMode.textContent = "dark_mode";
        tf = false;
    } else {
        darkMode.textContent = "light_mode";
        tf = true;
    }
})

window.addEventListener("resize", () => {
    if(window.innerWidth < 650){
        leftNavbar.style.display = "none";
    } else {
        leftNavbar.style.display = "block";
    }
})

openMenu.addEventListener("click", () => {
    leftNavbar.style.display = "block";
}) 

closeMenu.addEventListener("click", () => {
    leftNavbar.style.display = "none";
}) 


