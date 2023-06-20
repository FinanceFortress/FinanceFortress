const swiper = new Swiper('.swiper', {
    // Navigation arrows
     slidesPerView: 1, //how mach?
       spaceBetween: 10,
    navigation: {
        // my btn
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      // bullets
      clickable: true,
      dynamicBullets: true,
    },
     keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
     watchOverflow: true,
  
  });

  