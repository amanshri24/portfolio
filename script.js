let option = document.querySelector(".options");
let close = document.querySelector(".close");
let popup = document.querySelector(".popup");
let nav = document.querySelector("nav");

option.addEventListener("click", function () {
  option.style.transform = "rotate(90deg)";
  close.style.transform = "rotate(90deg)";
  popup.style.display = "flex";
  option.style.zIndex = "999";
  close.style.zIndex = "9999";
   option.style.opacity = "0";
   close.style.opacity = "1";
})
close.addEventListener("click", function () {
  close.style.transform = "rotate(-90deg)";
  option.style.transform = "rotate(-90deg)";
  popup.style.display = "none";
  close.style.zIndex = "999";
  option.style.zIndex = "9999";
  option.style.opacity = "1";
  close.style.opacity = "0";
});

let lastscroll = 0;

document.addEventListener("scroll", function () {
  if (window.scrollY > 350) {
    if (window.scrollY > lastscroll) {
      nav.style.transform = "translateY(-80px)"; 
      popup.style.display = "none";
      option.style.transform = "rotate(-90deg)";
      close.style.zIndex = "999";
      option.style.zIndex = "9999";
      option.style.opacity = "1";
      close.style.opacity = "0";
    } else {
      nav.style.transform = "translateY(0px)";
    }
  } else {
    nav.style.transform = "translateY(0px)";
  }
  lastscroll = window.scrollY;
})
