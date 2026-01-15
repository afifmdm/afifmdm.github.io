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

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-wa-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // stop normal form submit

    // get values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.querySelector("textarea[name='message']").value;

    // format WhatsApp message
    const whatsappMessage =
      `Halo Naratas,\n\n` +
      `Nama   : ${name}\n` +
      `Email  : ${email}\n` +
      `Subjek : ${subject}\n\n` +
      `Pesan  :\n${message}`;

    // encode message
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // WhatsApp URL
    const phone = "6282126696530";
    const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`;

    // redirect to WhatsApp
    window.open(url, "_blank");
  });
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
  const btn = document.getElementById("scrollTopBtn");

  window.addEventListener("scroll", () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollTop / docHeight;

      // convert progress to degrees
      btn.style.setProperty("--progress", `${progress * 360}deg`);

      if (scrollTop > 200) {
          btn.classList.add("show");
      } else {
          btn.classList.remove("show");
      }
  });

  btn.addEventListener("click", () => {
      window.scrollTo({
          top: 0,
          behavior: "smooth"
      });
  });
});

// Hide preloader only when ALL assets are loaded
$(window).on("load", function () {
    setTimeout(function() {
        $(".preloader-wrapper").fadeOut(600);
        $("body").removeClass("preloader-site");
    }, 2000); // keep visible at least 2 seconds 
});