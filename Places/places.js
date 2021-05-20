// nav bar

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

const slider = document.querySelector(".scroll-box");
let isDown = false;
let startX;
let scrollLeft;
slider.addEventListener("mousedown", (e) => {
  isDown = true;

  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  // startX = e.pageX - slider.offsetLeft;
});
slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3;
  slider.scrollLeft = scrollLeft - walk;
});
const slider2 = document.querySelector(".card-content-all");
let isDown2 = false;
let startX2;
let scrollLeft2;
slider2.addEventListener("mousedown", (e) => {
  isDown2 = true;

  slider2.classList.add("active");
  startX2 = e.pageX - slider.offsetDown;
  scrollLeft2 = slider.scrollDown;
  // startX = e.pageX - slider.offsetLeft;
});
slider2.addEventListener("mouseleave", () => {
  isDown2 = false;
  slider2.classList.remove("active");
});
slider2.addEventListener("mouseup", () => {
  isDown2 = false;
  slider2.classList.remove("active");
});
slider2.addEventListener("mousemove", (e) => {
  if (!isDown2) return;
  e.preventDefault();
  const x = e.pageX - slider2.offsetDown;
  const walk = (x - startX2) * 3;
  slider2.scrollLeft2 = scrollLeft2 - walk;
});

const scrollContent = document.querySelectorAll(".scroll-content");

function addAnimation(e) {
  removeAnimation();
  this.classList.add("animation");
}
function removeAnimation() {
  scrollContent.forEach((content) => content.classList.remove("animation"));
}

scrollContent.forEach((content) =>
  content.addEventListener("click", addAnimation)
);

$(".card1").hover(function () {
  if ($(this).hasClass("active")) {
    $(".card1 .bottom").slideUp(function () {
      $(".card1").removeClass("active");
    });
  } else {
    $(".card1").addClass("active");
    $(".card1 .bottom").stop().slideDown();
  }
});
$(".card2").hover(function () {
  if ($(this).hasClass("active")) {
    $(".card2 .bottom").slideUp(function () {
      $(".card2").removeClass("active");
    });
  } else {
    $(".card2").addClass("active");
    $(".card2 .bottom").stop().slideDown();
  }
});
$(".card3").hover(function () {
  if ($(this).hasClass("active")) {
    $(".card3 .bottom").slideUp(function () {
      $(".card3").removeClass("active");
    });
  } else {
    $(".card3").addClass("active");
    $(".card3 .bottom").stop().slideDown();
  }
});
$(".card4").hover(function () {
  if ($(this).hasClass("active")) {
    $(".card4 .bottom").slideUp(function () {
      $(".card4").removeClass("active");
    });
  } else {
    $(".card4").addClass("active");
    $(".card4 .bottom").stop().slideDown();
  }
});
$(".card5").hover(function () {
  if ($(this).hasClass("active")) {
    $(".card5 .bottom").slideUp(function () {
      $(".card5").removeClass("active");
    });
  } else {
    $(".card5").addClass("active");
    $(".card5 .bottom").stop().slideDown();
  }
});
$(".card6").hover(function () {
  if ($(this).hasClass("active")) {
    $(".card6 .bottom").slideUp(function () {
      $(".card6").removeClass("active");
    });
  } else {
    $(".card6").addClass("active");
    $(".card6 .bottom").stop().slideDown();
  }
});
$(".card7").hover(function () {
  if ($(this).hasClass("active")) {
    $(".card7 .bottom").slideUp(function () {
      $(".card7").removeClass("active");
    });
  } else {
    $(".card7").addClass("active");
    $(".card7 .bottom").stop().slideDown();
  }
});
$(".card8").hover(function () {
  if ($(this).hasClass("active")) {
    $(".card8 .bottom").slideUp(function () {
      $(".card8").removeClass("active");
    });
  } else {
    $(".card8").addClass("active");
    $(".card8 .bottom").stop().slideDown();
  }
});

// cards
function container(n) {
    for( var i=0; i<n; i++) {
        var container = document.querySelector(`.card-${i}-content`);
        var state = document.querySelector(`.state${i}`);
        console.log(state);
        state.addEventListener("click", () => {
            cardContent.forEach((content) => content.classList.remove("show"));
            container`${i}`.classList.add("show");
          });
    }
}
container(29);
// const container1 = document.querySelector(".card-1-content");
// const container2 = document.querySelector(".card-2-content");
// const container3 = document.querySelector(".card-3-content");
// const container4 = document.querySelector(".card-4-content");
// const container5 = document.querySelector(".card-5-content");
// const container6 = document.querySelector(".card-6-content");
// const container7 = document.querySelector(".card-7-content");
// const container8 = document.querySelector(".card-8-content");
// const container9 = document.querySelector(".card-9-content");
// const container10 = document.querySelector(".card-10-content");
// const container11 = document.querySelector(".card-11-content");
// const container12 = document.querySelector(".card-12-content");
// const container13 = document.querySelector(".card-13-content");
// const container14 = document.querySelector(".card-14-content");
// const container15 = document.querySelector(".card-15-content");
// const container16 = document.querySelector(".card-16-content");
// const container17 = document.querySelector(".card-17-content");
// const container18 = document.querySelector(".card-18-content");
// const container19 = document.querySelector(".card-19-content");
// const container20 = document.querySelector(".card-20-content");
// const container21 = document.querySelector(".card-21-content");
// const container22 = document.querySelector(".card-22-content");
// const container23 = document.querySelector(".card-23-content");
// const container24 = document.querySelector(".card-24-content");
// const container25 = document.querySelector(".card-25-content");
// const container26 = document.querySelector(".card-26-content");
// const container27 = document.querySelector(".card-27-content");
// const container28 = document.querySelector(".card-28-content");
// const container29 = document.querySelector(".card-29-content");
// const state1 = document.querySelector(".state1");
// const state2 = document.querySelector(".state2");
// const state3 = document.querySelector(".state3");
// const state4 = document.querySelector(".state4");
// const state5 = document.querySelector(".state5");
// const state6 = document.querySelector(".state6");
// const state7 = document.querySelector(".state7");
// const state8 = document.querySelector(".state8");
// const state9 = document.querySelector(".state9");
// const state10 = document.querySelector(".state10");
// const state11 = document.querySelector(".state11");
// const state12 = document.querySelector(".state12");
// const state13 = document.querySelector(".state13");
// const state14 = document.querySelector(".state14");
// const state15 = document.querySelector(".state15");
// const state16 = document.querySelector(".state16");
// const state17 = document.querySelector(".state17");
// const state18 = document.querySelector(".state18");
// const state19 = document.querySelector(".state19");
// const state20 = document.querySelector(".state20");
// const state21 = document.querySelector(".state21");
// const state22 = document.querySelector(".state22");
// const state23 = document.querySelector(".state23");
// const state24 = document.querySelector(".state24");
// const state25 = document.querySelector(".state25");
// const state26 = document.querySelector(".state26");
// const state27 = document.querySelector(".state27");
// const state28 = document.querySelector(".state28");
// const state29 = document.querySelector(".state29");
// const cardContent = document.querySelectorAll(".card-content-all");
// state2.addEventListener("click", () => {
//   cardContent.forEach((content) => content.classList.remove("show"));
//   container2.classList.add("show");
//   state2.classList.add("gradiant");
// });
// state1.addEventListener("click", () => {
//   cardContent.forEach((content) => content.classList.remove("show"));
//   container1.classList.add("show");
// });
// state3.addEventListener("click", () => {
//   cardContent.forEach((content) => content.classList.remove("show"));
//   container3.classList.add("show");
// });
// state4.addEventListener("click", () => {
//   cardContent.forEach((content) => content.classList.remove("show"));
//   container4.classList.add("show");
// });
// state5.addEventListener("click", () => {
//   cardContent.forEach((content) => content.classList.remove("show"));
//   container5.classList.add("show");
// });
// state6.addEventListener("click", () => {
//   cardContent.forEach((content) => content.classList.remove("show"));
//   container6.classList.add("show");
// });
// state7.addEventListener("click", () => {
//   cardContent.forEach((content) => content.classList.remove("show"));
//   container7.classList.add("show");
// });
// state8.addEventListener("click", () => {
//   cardContent.forEach((content) => content.classList.remove("show"));
//   container8.classList.add("show");
// });
// state9.addEventListener("click", () => {
//   cardContent.forEach((content) => content.classList.remove("show"));
//   container9.classList.add("show");
// });
// state10.addEventListener("click", () => {
//   cardContent.forEach((content) => content.classList.remove("show"));
//   container10.classList.add("show");
// });
// state11.addEventListener("click", () => {
//   cardContent.forEach((content) => content.classList.remove("show"));
//   container11.classList.add("show");
// });
// state12.addEventListener("click", () => {
//   cardContent.forEach((content) => content.classList.remove("show"));
//   container12.classList.add("show");
// });
// state13.addEventListener("click", () => {
//   cardContent.forEach((content) => content.classList.remove("show"));
//   container13.classList.add("show");
// });
// state14.addEventListener("click", () => {
//   cardContent.forEach((content) => content.classList.remove("show"));
//   container14.classList.add("show");
// });
// state15.addEventListener("click", () => {
//   cardContent.forEach((content) => content.classList.remove("show"));
//   container15.classList.add("show");
// });
// state16.addEventListener("click", () => {
//   cardContent.forEach((content) => content.classList.remove("show"));
//   container16.classList.add("show");
// });
// state17.addEventListener("click", () => {
//   cardContent.forEach((content) => content.classList.remove("show"));
//   container17.classList.add("show");
// });
// state18.addEventListener("click", () => {
//   cardContent.forEach((content) => content.classList.remove("show"));
//   container18.classList.add("show");
// });
// state19.addEventListener("click", () => {
//   cardContent.forEach((content) => content.classList.remove("show"));
//   container19.classList.add("show");
// });
// state20.addEventListener("click", () => {
//   cardContent.forEach((content) => content.classList.remove("show"));
//   container20.classList.add("show");
// });
// state21.addEventListener("click", () => {
//   cardContent.forEach((content) => content.classList.remove("show"));
//   container21.classList.add("show");
// });
// state22.addEventListener("click", () => {
//   cardContent.forEach((content) => content.classList.remove("show"));
//   container22.classList.add("show");
// });
// state23.addEventListener("click", () => {
//   cardContent.forEach((content) => content.classList.remove("show"));
//   container23.classList.add("show");
// });
// state24.addEventListener("click", () => {
//   cardContent.forEach((content) => content.classList.remove("show"));
//   container24.classList.add("show");
// });
// state25.addEventListener("click", () => {
//   cardContent.forEach((content) => content.classList.remove("show"));
//   container25.classList.add("show");
// });
// state26.addEventListener("click", () => {
//   cardContent.forEach((content) => content.classList.remove("show"));
//   container26.classList.add("show");
// });
// state27.addEventListener("click", () => {
//   cardContent.forEach((content) => content.classList.remove("show"));
//   container27.classList.add("show");
// });
// state28.addEventListener("click", () => {
//   cardContent.forEach((content) => content.classList.remove("show"));
//   container28.classList.add("show");
// });
// state29.addEventListener("click", () => {
//   cardContent.forEach((content) => content.classList.remove("show"));
//   container29.classList.add("show");
// });
