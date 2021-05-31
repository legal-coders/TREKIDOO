const menu = document.querySelector(".menu");
const nav_container = document.querySelector(".nav-container");
let menuopen = false;

window.addEventListener('scroll', ()=> {
    let scroll = window.scrollY;
	iffalse();
})

// Menu 

function iftrue() {
    menu.classList.add('open');
        nav_container.style.top = "0";     
        menuopen= true;
}
function iffalse () {
    
        menu.classList.remove('open');
        nav_container.style.top = "-150vh"
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
