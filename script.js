// Change nav color after scroll
const navbar = document.querySelector(".nav");

window.onscroll = function () {
  var top = window.scrollY;
  console.log("budi");
  if (top >= 100) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
};
// Back to the top button

myButton = document.getElementById("topBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}

function backToTop() {
  document.body.scrollTop = 0; //Safari
  document.documentElement.scrollTop = 0; // Chrome and others
}
