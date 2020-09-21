// scroll JS
window.onscroll = function() {
  myFunction();
};

function myFunction() {
  var navbar = document.getElementById("myHeader");
  var navbarFixed = document.getElementById("myHeader-fixed");
  var sticky = navbar.offsetTop;
  if (window.pageYOffset > sticky) {
    navbar.style.display = "none";
    navbarFixed.style.display = "block";
    document.getElementById("light").style.display = "none";
    document.getElementById("dark").style.display = "block";
  } else {
    navbar.style.display = "block";
    navbarFixed.style.display = "none";
    document.getElementById("light").style.display = "block";
    document.getElementById("dark").style.display = "none";
  }
}
// slide show
var slideIndex = 1;
var timer;
window.addEventListener("load", function() {
  slideShow(slideIndex);
  timer = setInterval(function() {
    plusSlides(1);
  }, 5000);
});

function plusSlides(anh) {
  clearInterval(timer);
  if (anh < 0) {
    slideShow((slideIndex -= 1));
  } else {
    slideShow((slideIndex += 1));
  }
  if (anh === -1) {
    timer = setInterval(function() {
      plusSlides(anh + 2);
    }, 5000);
  } else {
    timer = setInterval(function() {
      plusSlides(anh + 1);
    }, 5000);
  }
}

function slideShow(anh) {
  var i;
  var slide = document.getElementsByClassName("mySlides");
  if (anh > slide.length) {
    slideIndex = 1;
  }
  if (anh < 1) {
    slideIndex = slide.length;
  }
  if (anh === undefined) {
    anh = ++slideIndex;
  }
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }
  slide[slideIndex - 1].style.display = "block";
}
