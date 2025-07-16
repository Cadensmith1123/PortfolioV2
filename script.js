const swiper = new Swiper('.swiper', {
    loop: true,
    centeredSlides: true,           // Center the active slide
    slidesPerView: 1.5,             // Show part of next/prev slide
    spaceBetween: 30,               // Space between slides
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  

  document.getElementById('year').textContent = new Date().getFullYear();

const btn = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  btn.classList.toggle('show', window.scrollY > window.innerHeight);
});
btn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});