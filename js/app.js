var swiper = new Swiper(".swiper", {
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay : {
        delay: 3000
    },
    loop: true,
  });

  /* 
  autoplay : {
        delay: 5000
    },
    loop: true,
    pagination: true,
    navigation: true
  */