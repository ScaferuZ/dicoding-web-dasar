// onscroll

window.onscroll = function () {
  scrollFunction();
  scrollBar();
  navColor();
};

// Change color navbar

const navbar = document.querySelector(".nav");

function navColor() {
  let top = window.scrollY;
  if (top >= 100) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
}

// Progress bar

function scrollBar() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("scrollBar").style.width = scrolled + "%";
}

// Back to the top button

myButton = document.getElementById("topBtn");

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
