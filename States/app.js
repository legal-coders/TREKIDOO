const title = document.querySelector(".text");
const menu = document.querySelector(".menu");
const nav_container = document.querySelector(".nav-container");
let menuopen = false;

var id = localStorage.getItem("id");
console.log(id);
const place = document.querySelector(`#${id}`);
place.style.display = "block";

function iftrue() {
    menu.classList.add('open');
    nav_container.style.top = "0";
    title.style.opacity = "0";
    menuopen = true;
}
function iffalse() {

    menu.classList.remove('open');
    nav_container.style.top = "-150vh"
    title.style.opacity = "1";
    menuopen = false;
}
menu.addEventListener('click', () => {
    if (!menuopen) {
        iftrue()
    } else {
        iffalse();
    }
})
nav_container.addEventListener('click', () => {
    iffalse();
})

