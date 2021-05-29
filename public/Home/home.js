const title = document.querySelector(".title");
const menu = document.querySelector(".menu");
const nav_container = document.querySelector(".nav-container");
let menuopen = false;
const topy = window.getComputedStyle(nav_container).height;
function parallax(element, distance, speed) {
    const item = document.querySelector(element);
    item.style.transform = `translateY(${distance * speed}px)`;
}

window.addEventListener('scroll', () => {
    let scroll = window.scrollY;
    title.style.opacity = 1 - (scroll / 300);
    parallax("#layer1", scroll, -0.8);
    parallax("#layer2", scroll, -0.7);
    parallax("#layer3", scroll, -0.6);
    parallax("#layer4", scroll, -0.5);
    parallax("#layer5", scroll, -0.4);
    parallax("#bg", scroll, -0.3);
    parallax("#parallax", scroll, 1);
    parallax("#shadow", scroll, -1);
    document.querySelector(".glass9").style.transform = `scale(${1})`;
    iffalse();
})

// Menu 
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

// content 2 Section

const Tajmahal = document.querySelector(".tajmahal");
const Gomateshwara = document.querySelector(".gomateshwara");
const Hampi = document.querySelector(".hampi");
const goldenTemple = document.querySelector(".goldenTemple");
const KonarkSunTemple = document.querySelector(".konarkSunTemple");
const Nalanda = document.querySelector(".nalanda");
const Khajuraho = document.querySelector(".khajuraho");

function hover(place, id, transform) {
    place.addEventListener("mouseover", () => {
        document.querySelector(id).style.opacity = "1";
        document.querySelector(transform).style.transform = `scale(${1})`;
    })
    place.addEventListener("mouseout", () => {
        document.querySelector(id).style.opacity = "0";
        document.querySelector(transform).style.transform = `scale(${0})`;
    })
}

hover(Tajmahal, "#tajmahal", ".glass1");
hover(Gomateshwara, "#gomateshwara", ".glass3");
hover(Hampi, "#hampi", ".glass4");
hover(goldenTemple, "#goldenTemple", ".glass5");
hover(KonarkSunTemple, "#konarkSunTemple", ".glass6");
hover(Nalanda, "#nalanda", ".glass7");
hover(Khajuraho, "#khajuraho", ".glass8");