let option = document.querySelector(".options");
let close = document.querySelector(".close");
let popup = document.querySelector(".popup-section");

option.addEventListener("click", function () {
  option.style.transform = "rotate(90deg)";
  close.style.transform = "rotate(90deg)";
  popup.style.display = "flex";
  option.style.zIndex = "999";
  close.style.zIndex = "9999";
   option.style.opacity = "0";
   close.style.opacity = "1";

  // option.style.display = "none";
})
close.addEventListener("click", function () {
  close.style.transform = "rotate(-90deg)";
  option.style.transform = "rotate(-90deg)";
  popup.style.display = "none";
  close.style.zIndex = "999";
  option.style.zIndex = "9999";
  option.style.opacity = "1";
  close.style.opacity = "0";

  // close.style.transform = "rotate(90deg)";

  // option.style.display = "flex";
  // close.style.display = "none";
});