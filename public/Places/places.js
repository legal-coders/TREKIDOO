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
const cardContent = document.querySelectorAll('.card-content-all');

scrollContent.forEach(element => {
  element.addEventListener('click', function content() {
    var audio = new Audio("/Places/click_audio.mp3");
    audio.play();
    scrollContent.forEach(content => content.classList.remove('animation'));
    cardContent.forEach(content => content.classList.remove('show'));
    this.classList.add('animation');
    const carContentItems = document.querySelector(`.${this.id}-content`);
    carContentItems.classList.add('show');
  })
});
