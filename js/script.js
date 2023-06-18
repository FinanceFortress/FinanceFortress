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

  (function(i,m,p,a,c,t){c.ire_o=p;c[p]=c[p]function(){(c[p].a=c[p].a[]).push(arguments)};t=a.createElement(m);var z=a.getElementsByTagName(m)[0];t.async=1;t.src=i;z.parentNode.insertBefore(t,z)})('https://utt.impactcdn.com/P-A4396990-9d73-4897-97f6-b8da65f882181.js','script','impactStat',document,window);impactStat('transformLinks');impactStat('trackImpression');