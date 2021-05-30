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
