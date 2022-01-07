//open nav links in small devices
let toggleBtn = document.querySelector('.toggle-btn i');
let navLinks = document.querySelector('.header nav');

toggleBtn.onclick = function(){
    navLinks.classList.toggle('open');
    toggleBtn.classList.toggle('fa-times')
}

//slide images 
  var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        effect: "fade",
        loop:true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
// slide client testemonials
  var swiper = new Swiper(".clients", {
        slidesPerView: 1,
        centeredSlides: false,
        slidesPerGroupSkip: 1,
        grabCursor: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: true,
        },
        keyboard: {
          enabled: true,
        },
        breakpoints: {
          769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        },
    
      });
      // slide client posts
  var swiper = new Swiper(".post-swiper", {
           spaceBetween: 20,
           grabCursor:true,
        loop:true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: true,
        },
         pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          0:{
            
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          991: {
            slidesPerView: 3,
          },
        },
    
      });
     