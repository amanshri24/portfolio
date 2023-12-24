var tl = gsap.timeline();
tl.from(".section-one", {
  transform: "rotate(90deg)",
  opacity: "0",
  ease: "bounce.out",
  duration: "2.5",
})
  .from("nav", {
    top: "-20%",
    delay: "-1",
    duration: "1"
  })

// document.querySelectorAll(".desktop-img").forEach(function (el) {
//   console.log(el)
// })

var sections = gsap.utils.toArray(".desktop-img");
var nextSections = gsap.utils.toArray(".mobile-img");
sections.forEach((section) => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      scroller: "body",
    },
    duration: "2",
    left: "-30%",
    width: "30vw"
  });
})
nextSections.forEach((section) => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      scroller: "body",
    },
    duration: "1.7",
    right: "-6vw",
    bottom: "-5vw",
    width: "15vw",
  });
})
gsap.to(".first-slider", {
  scrollTrigger: {
    trigger: ".first-slider",
    scroller: "body",
    scrub: 2,
  },
  left: "0%",
});
  gsap.to(".second-slider", {
    scrollTrigger: {
      trigger: ".second-slider",
      scroller: "body",
      scrub: 2,
    },
    left: "-55%",
  });


// ScrollTrigger.batch(".desktop-img",{
// onEnter: (batch) =>
    // gsap.from(batch, {
    //   duration: "2",
    //   left: "-30%",
    //   width: "30vw",
    // });
// })




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