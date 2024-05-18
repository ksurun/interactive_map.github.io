const hamburger = document.querySelector(".hamburger")
const nav_menu = document.querySelector(".main-menu__navigation")
hamburger.addEventListener("click", () => {
   hamburger.classList.toggle("active");
   nav_menu.classList.toggle("active");
})
document.querySelectorAll(".main-menu__link").forEach(n => n.addEventListener("click", () => {
   hamburger.classList.remove("active");
   nav_menu.classList.remove("active");
}))