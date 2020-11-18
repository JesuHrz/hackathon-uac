//  Scrollspy Initialization
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".scrollspy");
  var instances = M.ScrollSpy.init(elems);
  var elems = document.querySelectorAll(".sidenav");
  var instances = M.Sidenav.init(elems);

  //  Overlay White Lay
  TweenMax.to(".overlay-page", 2, {
    delay: 0.5,
    y: "-110%",
    ease: Power3.easeOut,
  });

  //  Logo Animations
  TweenMax.from(".logo", 2, {
    delay: 2,
    y: -100,
    ease: Power3.easeOut,
  });
  TweenMax.from(".logo-info", 2, {
    delay: 2.2,
    y: -100,
    ease: Power3.easeOut,
  });

  //  Info Animations
  TweenMax.from(".about-title", 1, {
    delay: 0.2,
    opacity: 0,
    y: -10,
    scrollTrigger: { trigger: ".information", start: "top 30%" },
    ease: Power3.easeOut,
  });
  TweenMax.from(".about-text", 1, {
    delay: 0.3,
    opacity: 0,
    y: -10,
    scrollTrigger: { trigger: ".information", start: "top 30%" },
    ease: Power3.easeOut,
  });

  //  Map Animations
  TweenMax.to(".overlay-farmer", 1, {
    delay: 0.2,
    y: "100%",
    scrollTrigger: { trigger: ".farmer", start: "top 60%" },
    ease: Power3.easeOut,
  });
  TweenMax.from(".farmer-text", 1, {
    opacity: 0,
    delay: 0.6,
    y: -10,
    scrollTrigger: { trigger: ".farmer", start: "top 50%" },
    ease: Power3.easeOut,
  });
  if (window.innerWidth < 992) {
    //  Qualitites Animations
    TweenMax.to(".overlay-box-3", 1.5, {
      delay: 0.6,
      y: "100%",
      scrollTrigger: { trigger: ".qualities", start: "top 20%" },
      ease: Power3.easeOut,
    });
    TweenMax.from(".qualities-title", 1, {
      delay: 0.8,
      opacity: 0,
      x: -20,
      scrollTrigger: { trigger: ".qualities", start: "top -10%" },
      ease: Power3.easeOut,
    });
    TweenMax.from(".qualities-info", 1, {
      delay: 0.9,
      opacity: 0,
      x: -10,
      scrollTrigger: { trigger: ".qualities", start: "top -10%" },
      ease: Power3.easeOut,
    });
    TweenMax.from(".quality", 1, {
      delay: 1.7,
      opacity: 0,
      x: -10,
      scrollTrigger: { trigger: ".qualities", start: "top -5%" },
      ease: Power3.easeOut,
    });

    //  Footer Animations
    TweenMax.to(".overlay-footer", 1, {
      delay: 1,
      y: -100,
      scrollTrigger: { trigger: ".qualities", start: "top -10%" },
      ease: Power3.easeOut,
    });
  } else {
    //  Qualitites Animations
    TweenMax.to(".overlay-box-3", 1.5, {
      delay: 1.2,
      y: "100%",
      scrollTrigger: { trigger: ".qualities", start: "top 30%" },
      ease: Power3.easeOut,
    });
    TweenMax.from(".qualities-title", 1, {
      delay: 1.3,
      opacity: 0,
      x: -20,
      scrollTrigger: { trigger: ".qualities", start: "top 30%" },
      ease: Power3.easeOut,
    });
    TweenMax.from(".qualities-info", 1, {
      delay: 1.5,
      opacity: 0,
      x: -10,
      scrollTrigger: { trigger: ".qualities", start: "top 30%" },
      ease: Power3.easeOut,
    });
    TweenMax.from(".quality", 1, {
      delay: 1.7,
      opacity: 0,
      x: -10,
      scrollTrigger: { trigger: ".qualities", start: "top 30%" },
      ease: Power3.easeOut,
    });

    //  Footer Animations
    TweenMax.to(".overlay-footer", 1, {
      delay: 2,
      y: -100,
      scrollTrigger: { trigger: ".qualities", start: "top top" },
      ease: Power3.easeOut,
    });
  }

  $(window).scroll(function () {
    $(".sidenav-trigger i").toggleClass("scrolled", $(this).scrollTop() > 600);
  });
  $(window).scroll(function () {
    $(".right .join").toggleClass("scrolled", $(this).scrollTop() > 600);
  });
});
