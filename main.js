let menu = document.querySelector('.menu-icon');

menu.onclick = () => {
    menu.classList.toggle('move');
}



//swiper

var swiper = new Swiper(".trending-content", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay:5000,
        disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1068: {
        //quantidade de card que vai ser exibido
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });