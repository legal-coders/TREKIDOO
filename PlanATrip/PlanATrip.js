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
        var btn = document.getElementById('button');
        console.log(finalselect);
        // starting of locator
        btn.onclick = function clicker() {
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


            switch (finalselect) {
                case AndhraPradesh:
                    window.location.href = "./AndhraPradesh.html"
                    break;
                case ArunachalPradesh:
                    window.location.href = "./ArunachalPradesh.html"
                    break;
                case Assam:
                    window.location.href = "./Assam.html"
                    break;
                case Chhattisgarh:
                    window.location.href = "./Chattisgarh.html"
                    break;
                case Goa:
                    window.location.href = "./Goa.html"
                    break;
                case Gujarat:
                    window.location.href = "./Gujarat.html"
                    break;
                case Haryana:
                    window.location.href = "./Haryana.html"
                    break;
                case HimachalPradesh:
                    window.location.href = "./HimachalPradesh.html"
                    break;
                case JammuandKashmir:
                    window.location.href = "./JammuandKashmir.html"
                    break;
                case Jharkhand:
                    window.location.href = "./Jharkhand.html"
                    break;
                case Karnataka:
                    window.location.href = "./Karnataka.html"
                    break;
                case Kerala:
                    window.location.href = "./Kerala.html"
                    break;
                case Ladakh:
                    window.location.href = "./Ladakh.html"
                    break;
                case Maharashtra:
                    window.location.href = "./Maharashtra.html"
                    break;
                case Meghalaya:
                    window.location.href = "./Meghalaya.html"
                    break;
                case Mizoram:
                    window.location.href = "./Mizoram.html"
                    break;
                case Nagaland:
                    window.location.href = "./Nagaland.html"
                    break;
                case Odisha:
                    window.location.href = "./Odisha.html"
                    break;
                case Punjab:
                    window.location.href = "./Punjab.html"
                    break;
                case Rajasthan:
                    window.location.href = "./Rajasthan.html"
                    break;
                case Sikkim:
                    window.location.href = "./Sikkim.html"
                    break;
                case TamilNadu:
                    window.location.href = "./TamilNadu.html"
                    break;
                case Telangana:
                    window.location.href = "./Telangana.html"
                    break;
                case Tripura:
                    window.location.href = "./Tripura.html"
                    break;
                case UttarPradesh:
                    window.location.href = "./UttarPradesh.html"
                    break;
                case WestBengal:
                    console.log("hi");
                    window.location.href = "./WestBengal.html"
                    break;


            }
        }



        // end of add element
    })
});



const menu = document.querySelector(".menu");
const nav_container = document.querySelector(".nav-container");
let menuopen = false;

function iftrue() {
    menu.classList.add('open');
    nav_container.style.top = "0";
    menuopen = true;
}
function iffalse() {

    menu.classList.remove('open');
    nav_container.style.top = "-150vh"
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

