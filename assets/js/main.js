// Transparent header on scroll
window.addEventListener("scroll", function () {
  const header = document.querySelector(".header-home");
  if (window.scrollY > 80) {
    header.classList.add("solid-header");
    header.classList.remove("transparent-header");
  } else {
    header.classList.add("transparent-header");
    header.classList.remove("solid-header");
  }
});
$(".owl-carousel-partners").owlCarousel({
  loop: true,
  margin: 40,
  autoWidth: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsive: {
    200: {
      items: 2,
    },
    400: {
      items: 3,
    },
    600: {
      items: 4,
    },
    800: {
      items: 5,
    },
    100: {
      items: 6,
    },
  },
  // responsive: {
  //   0: { items: 2 },
  //   600: { items: 3 },
  //   1000: { items: 4 },
  // },
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
$(".owl-carousel-portfolio").owlCarousel({
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
