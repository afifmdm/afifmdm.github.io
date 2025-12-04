// Transparent header on scroll
window.addEventListener("scroll", function () {
  const header = document.querySelector(".header-home");
  if (header){
    if (window.scrollY > 80) {
      header.classList.add("solid-header");
      header.classList.remove("transparent-header");
    } else {
      header.classList.add("transparent-header");
      header.classList.remove("solid-header");
    }
  }
});
$(".owl-carousel-partners").owlCarousel({
  loop: true,
  margin: 40,
  // autoWidth: true,
  nav: false,
  center: true,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 3,
    },
    600: {
      items: 5,
    },
    1000: {
      items: 8,
    },
  },
});
$(".owl-carousel-activity").owlCarousel({
  items: 1,
  center: true,
  loop: true,
  // margin: 10,
  autoplay: true,
  autoplayTimeout: 5000,
  stagePadding: 60,
  responsive: {
    200: {
      stagePadding: 60,
    },
    400: {
      stagePadding: 80,
    },
    600: {
      stagePadding: 100,
    },
    800: {
      stagePadding: 160,
    },
    100: {
      stagePadding: 200,
    },
  },
});
$(".owl-carousel-portofolio").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  navText: [
    '<button class="nav-btn nav-left"><i class="fa fa-chevron-left"></i></button>',
    '<button class="nav-btn nav-right"><i class="fa fa-chevron-right"></i></button>',
  ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

$(document).ready(function () {
    $("body").addClass("preloader-site");
});

// Hide preloader only when ALL assets are loaded
$(window).on("load", function () {
    setTimeout(function() {
        $(".preloader-wrapper").fadeOut(600);
        $("body").removeClass("preloader-site");
    }, 2000); // keep visible at least 2 seconds 
});