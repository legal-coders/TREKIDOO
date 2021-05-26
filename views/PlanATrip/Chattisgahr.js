// dropdown button
const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
var finalselect = null;
const secondselect = document.querySelector(".fifthday");
const thirdselect = document.querySelector(".eighthday");
const secondcontainer = document.querySelector(".secondcontainer");
const no1 = document.querySelector(".no1");
const no2 = document.querySelector(".no2");
const no3 = document.querySelector(".no3");
const no4 = document.querySelector(".no4");
const no5 = document.querySelector(".no5");
const no6 = document.querySelector(".no6");
const no7 = document.querySelector(".no7");
const no8 = document.querySelector(".no8");
const no9 = document.querySelector(".no9");
const no10 = document.querySelector(".no10");
const no11 = document.querySelector(".no11");

const innerContainer = document.querySelector(".innercontainer");
const before = window.getComputedStyle(
  document.querySelector(".innercontainer"),
  ":before"
);

const optionsList = document.querySelectorAll(".option");
//open and close
selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

//Add element
optionsList.forEach((o) => {
  o.addEventListener("click", function states() {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
    finalselect = selected.innerHTML;

    // console.log(finalselect)

    // code for showing the wanted info
    //getting button id

    var btn = document.getElementById("button");
    var firstday = "FourDays";
    var fifthday = "SevenDays";
    var seventhday = "ElevenDays";
    btn.onclick = function clicker() {
      switch (finalselect) {
        case firstday:
          window.location.href = "#secondcontainer";
          break;
        case fifthday:
          window.location.href = "#secondcontainer";
          secondselect.style.display = "flex";
          break;

        case seventhday:
          window.location.href = "#secondcontainer";
          secondselect.style.display = "flex";
          thirdselect.style.display = "flex";
          break;
      }
    };
  });
});

//background change
function hoverbg(card, url) {
  card.addEventListener("mouseover", () => {
    secondcontainer.style.backgroundImage = `url(${url})`;
  });
  card.addEventListener("mouseout", () => {
    secondcontainer.style.backgroundImage =
      'url("/Places/states_img/Chattisgarh/Ghatarni_waterfall/Ghatarani_waterfall1.jpg")';
  });
}

hoverbg(
  no1,
  "/Places/states_img/Chattisgarh/Achanakmar_wildlife_sanctuary/Achanakmar_wildlife_sanctuary.jpg"
);
hoverbg(
  no2,
  "/Places/states_img/Chattisgarh/Chitrakote_Waterfall/ChitrakoteWaterfall1.jpg"
);
hoverbg(
  no3,
  "/Places/states_img/Chattisgarh/Ghatarni_waterfall/Ghataraniwaterfall2.jpg"
);
hoverbg(
  no4,
  "/Places/states_img/Chattisgarh/Ibrahim_rauza_tomb/Ibrahimrauzatomb1.jpg"
);
hoverbg(no5, "/Places/states_img/Chattisgarh/Jatmai_Temple/Jatmai_Temple.jpg");
hoverbg(
  no6,
  "/Places/states_img/Chattisgarh/Naya_raipur_central_park/Naya_Raipur_central_Park1.jpg"
);
hoverbg(
  no7,
  "/Places/states_img/Chattisgarh/Purkhouti_Muktangan/PurkhoutiMuktangan2.jpg"
);
hoverbg(
  no8,
  "/Places/states_img/Chattisgarh/Shaheed_veer_narayan_singh_international_cricket_stadium/Shaheed_veer_narayan_singh_international_cricket_stadium1.jpg"
);
hoverbg(
  no9,
  "/Places/states_img/Chattisgarh/Achanakmar_wildlife_sanctuary/Achanakmar_wildlife_sanctuary3.JPG"
);
hoverbg(
  no10,
  "/Places/states_img/Chattisgarh/Chitrakote_Waterfall/ChitrakoteWaterfall3.jpg"
);
hoverbg(
  no11,
  "/Places/states_img/Chattisgarh/Ghatarni_waterfall/GhataraniWaterfall3.jpg"
);

//navbar

const menu = document.querySelector(".menu");
const nav_container = document.querySelector(".nav-container");
let menuopen = false;

window.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  iffalse();
});

// Menu

function iftrue() {
  menu.classList.add("open");
  nav_container.style.top = "0";
  menuopen = true;
  innerContainer.style.display = "none";
  before.display = "none";
}
function iffalse() {
  menu.classList.remove("open");
  nav_container.style.top = "-150vh";
  menuopen = false;
  innerContainer.style.display = "flex";
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

// no1.addEventListener('mouseover',()=>{
//   secondcontainer.style.backgroundImage= 'url("../Images/winter-cold-memento-mori-wallpaper-preview.jpg")';
// })

// no1.addEventListener('mouseout',()=>{
//   secondcontainer.style.backgroundImage= 'url("../Images/borracaves1.jpg")';
// })
