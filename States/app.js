const title = document.querySelector(".text");
const menu = document.querySelector(".menu");
const nav_container = document.querySelector(".nav-container");
const place1 = document.querySelector(".place1");

let menuopen = false;

function height(container) {
    let height = place1.offsetHeight;
    container.style.height = `${height - 2}px`;
    console.log(container.style.height);
}

height(document.querySelector(".main_body"));
window.addEventListener('mousemove', ()=> {
    height(document.querySelector(".main_body"));
    height(document.querySelector(".place3"));
    height(document.querySelector(".place2"));
    height(document.querySelector(".place4"));
    height(document.querySelector(".place5"));
    height(document.querySelector(".place6"));
    height(document.querySelector(".place7"));
    height(document.querySelector(".place8"));
})
window.addEventListener('resize', ()=> {
    height(document.querySelector(".main_body"));
    height(document.querySelector(".place2"));
    height(document.querySelector(".place3"));
    height(document.querySelector(".place4"));
    height(document.querySelector(".place5"));
    height(document.querySelector(".place6"));
    height(document.querySelector(".place7"));
    height(document.querySelector(".place8"));
})

window.addEventListener('scroll', ()=> {
    height(document.querySelector(".main_body"));
    height(document.querySelector(".place2"));
    height(document.querySelector(".place3"));
    height(document.querySelector(".place4"));
    height(document.querySelector(".place5"));
    height(document.querySelector(".place6"));
    height(document.querySelector(".place7"));
    height(document.querySelector(".place8"));
    iffalse();
})

function iftrue() {
    menu.classList.add('open');
        nav_container.style.top = "0";
        title.style.opacity = "0";        
        menuopen= true;
}
function iffalse () {
    
        menu.classList.remove('open');
        nav_container.style.top = "-150vh"
        title.style.opacity = "1";
        menuopen = false;
}
menu.addEventListener('click', ()=> {
    if(!menuopen) {
        iftrue()
    } else { 
        iffalse();
    }
})
nav_container.addEventListener('click', ()=> {
    iffalse();
})

