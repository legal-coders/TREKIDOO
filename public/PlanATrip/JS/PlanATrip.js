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
            var Odisha = "Orissa";
            var Punjab = "Punjab";
            var Rajasthan = "Rajasthan";
            var Sikkim = "Sikkim";
            var TamilNadu = "Tamil Nadu";
            var Telangana = "Telangana";
            var UttarPradesh = "Uttar Pradesh";
            var WestBengal = "West Bengal";
            var Uttarakhand = "Uttarakhand";


            switch (finalselect) {
                case AndhraPradesh:
                    window.location.href = "../PlanATrip/AndhraPradesh"
                    break;
                case ArunachalPradesh:
                    window.location.href = "../PlanATrip/ArunachalPradesh"
                    break;
                case Assam:
                    window.location.href = "../PlanATrip/Assam"
                    break;
                case Chhattisgarh:
                    window.location.href = "../PlanATrip/Chattisgarh"
                    break;
                case Goa:
                    window.location.href = "../PlanATrip/Goa"
                    break;
                case Gujarat:
                    window.location.href = "../PlanATrip/Gujarat"
                    break;
                case Haryana:
                    window.location.href = "../PlanATrip/Haryana"
                    break;
                case HimachalPradesh:
                    window.location.href = "../PlanATrip/HimachalPradesh"
                    break;
                case JammuandKashmir:
                    window.location.href = "../PlanATrip/JammuandKashmir"
                    break;
                case Jharkhand:
                    window.location.href = "../PlanATrip/Jharkhand"
                    break;
                case Karnataka:
                    window.location.href = "../PlanATrip/Karnataka"
                    break;
                case Kerala:
                    window.location.href = "../PlanATrip/Kerala"
                    break;
                case Ladakh:
                    window.location.href = "../PlanATrip/Ladakh"
                    break;
                case Maharashtra:
                    window.location.href = "../PlanATrip/Maharashtra"
                    break;
                case Meghalaya:
                    window.location.href = "../PlanATrip/Meghalaya"
                    break;
                case Nagaland:
                    window.location.href = "../PlanATrip/Nagaland"
                    break;
                case Odisha:
                    window.location.href = "../PlanATrip/Orissa"
                    break;
                case Punjab:
                    window.location.href = "../PlanATrip/Punjab"
                    break;
                case Rajasthan:
                    window.location.href = "../PlanATrip/Rajasthan"
                    break;
                case Sikkim:
                    window.location.href = "../PlanATrip/Sikkim"
                    break;
                case TamilNadu:
                    window.location.href = "../PlanATrip/Tamilnadu"
                    break;
                case Telangana:
                    window.location.href = "../PlanATrip/Telungana"
                    break;
                case Uttarakhand:
                    window.location.href = "../PlanATrip/Uttarkhand"
                    break;
                case UttarPradesh:
                    window.location.href = "../PlanATrip/UttarPradesh"
                    break;
                case WestBengal:
                    window.location.href = "../PlanATrip/WestBengal"
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

const box = document.querySelector(".box");
const signin = document.querySelector(".signedin");
const signedin = signin.innerText;
const signedIn = "signedin";
const blur = document.querySelector(".blur");
if (signedin == signedIn) {
    blur.style.zIndex = "10";
}