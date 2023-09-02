//MENU
let menuBtn = document.querySelector(".menu-btn")
let menu = document.querySelector(".line-with-nav")


document.querySelector(".menu-btn").onclick = function (event) {
    menuBtn.classList.toggle("change")
    menu.classList.toggle("is-active")
}
