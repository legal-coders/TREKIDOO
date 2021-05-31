const menu = document.querySelector(".menu");
const nav_container = document.querySelector(".nav-container");
let menuopen = false;

function iftrue() {
    menu.classList.add("open");
    nav_container.style.top = "0";
    menuopen = true;
}
function iffalse() {
    menu.classList.remove("open");
    nav_container.style.top = "-150vh";
    menuopen = false;
}
menu.addEventListener("click", () => {
    if (!menuopen) {
        iftrue();
    } else {
        iffalse();
    }
});
nav_container.addEventListener("click", () => {
    iffalse();
});

const eyes = document.querySelector(".eyesContainer");
const eye = document.querySelector("#eye");
const slashedEye = document.querySelector("#slashedEye");
eyes.addEventListener("click", () => {
    var input = document.querySelectorAll(".inputPassword");
    input.forEach((e) => {
        if(e.type === "password") {
            e.type = "text";
            slashedEye.style.opacity = "0";
        } else {
            e.type = "password";
            slashedEye.style.opacity = "1";
        }
    });
});

