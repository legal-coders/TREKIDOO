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
              window.location.href="../PlanATrip/dummy.html"
              break;
          case ArunachalPradesh:
              break;
          case Assam:
              break;
          case Chhattisgarh:
              break;
          case Goa:
              break;
          case Gujarat:
              break;
          case Haryana:
              break;
          case HimachalPradesh:
              break;
          case JammuandKashmir:
              break;
          case Jharkhand:
              break;
          case Karnataka:
              break;
          case Kerala:
              break;
          case Ladakh:
              break;
          case MadhyaPradesh:
              break;
          case Maharashtra:
              break;
          case Manipur:
              break;
          case Meghalaya:
              break;
          case Mizoram:
              break;
          case Nagaland:
              break;
          case Odisha:
              break;
          case Puducherry:
              break;
          case Punjab:
              break;
          case Rajasthan:
              break;
          case Sikkim:
              break;
          case TamilNadu:
              break;
          case Telangana:
              break;
          case Tripura:
              break;
          case UttarPradesh:
              break;
          case WestBengal:
              break;
          

}}



// end of add element
})});



