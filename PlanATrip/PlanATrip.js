// dropdown button
const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const h2 = document.querySelector(".opentext");



var finalselect = null;
// const window = document.querySelector(".firstcontainer");

const optionsList = document.querySelectorAll(".option");
//open and close
selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
  h2.classList.toggle("head");
});

//Add element
optionsList.forEach(o => {
    o.addEventListener("click", function states() {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
    finalselect = selected.innerHTML;

    // console.log(finalselect)

    // code for locator
    //getting button id
    var btn = document.getElementById('button')
    console.log(finalselect)
    // starting of locator
    btn.onclick = function clicker(){
    var AndhraPradesh = "Andhra Pradesh";
    var ArunachalPradesh = "Arunachal Pradesh";
    var Assam = "Assam";
    var Chhattisgarh = "Chhattisgarh";
    var Goa = "Goa";
    var Gujarat = "Gujarat";
    var Haryana = "Haryana";
    var HimachalPradesh = "Himachal Pradesh";
    var JammuandKashmir = "Jammu and Kashmir";
    var Jharkhand = "Jharkhand";
    var Karnataka = "Karnataka";
    var Kerala = "Kerala";
    var Ladakh = "Ladakh";
    var Maharashtra = "Maharashtra";
    var Meghalaya = "Meghalaya";
    var Nagaland = "Nagaland";
    var Odisha = "Odisha";
    var Punjab = "Punjab";
    var Rajasthan = "Rajasthan";
    var Sikkim = "Sikkim";
    var TamilNadu = "Tamil Nadu";
    var Telangana = "Telangana";
    var UttarPradesh = "Uttar Pradesh";
    var WestBengal = "West Bengal";
    
    
    switch(finalselect){
        case AndhraPradesh:
        window.location.href="../States/AndhraPradesh.html"
        break;
        case ArunachalPradesh:
        window.location.href="../States/ArunachalPradesh.html"
        break;
        case Assam:
        window.location.href="../States/Assam.html"
        break;
        case Chhattisgarh:
        window.location.href="../States/Chhattisgarh.html"
        break;
        case Goa:
        window.location.href="../States/Goa.html"
        break;
        case Gujarat:
        window.location.href="../States/Gujarat.html"
        break;
        case Haryana:
        window.location.href="../States/Haryana.html"
        break;
        case HimachalPradesh:
        window.location.href="../States/HimachalPradesh.html"
        break;
        case JammuandKashmir:
        window.location.href="../States/JammuandKashmir.html"
        break;
        case Jharkhand:
        window.location.href="../States/Jharkhand.html"
        break;
        case Karnataka:
        window.location.href="../States/Karnataka.html"
        break;
        case Kerala:
        window.location.href="../States/Kerala.html"
        break;
        case Ladakh:
        window.location.href="../States/Ladakh.html"
        break;
        case MadhyaPradesh:
        window.location.href="../States/MadhyaPradesh.html"
        break;
        case Maharashtra:
        window.location.href="../States/Maharashtra.html"
        break;
        case Manipur:
        window.location.href="../States/Manipur.html"
        break;
        case Meghalaya:
            window.location.href="../States/Meghalaya.html"
            break;
            case Mizoram:
            window.location.href="../States/Mizoram.html"
            break;
            case Nagaland:
            window.location.href="../States/Nagaland.html"
            break;
            case Odisha:
            window.location.href="../States/Odisha.html"
            break;
            case Punjab:
            window.location.href="../States/Punjab.html"
            break;
            case Rajasthan:
            window.location.href="../States/Rajasthan.html"
            break;
            case Sikkim:
            window.location.href="../States/Sikkim.html"
            break;
            case TamilNadu:
            window.location.href="../States/TamilNadu.html"
            break;
            case Telangana:
            window.location.href="../States/Telangana.html"
            break;
            case Tripura:
            window.location.href="../States/Tripura.html"
            break;
            case UttarPradesh:
            window.location.href="../States/UttarPradesh.html"
            break;
            case WestBengal:
            window.location.href="../States/WestBengal.html"
            break;


}}



// end of add element
})});



const menu = document.querySelector(".menu");
const nav_container = document.querySelector(".nav-container");
let menuopen = false;

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

