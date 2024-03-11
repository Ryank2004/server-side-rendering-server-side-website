//Javascript voor hamburger menu
const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  document.body.classList.toggle("slide-right");
});

//Javascript voor invliegende animatie
let reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", reveal);
window.addEventListener("scroll", checkHeight);

function reveal() {
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  
  window.addEventListener("resize", checkHeight);
  

  
