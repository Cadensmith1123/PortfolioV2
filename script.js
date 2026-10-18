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
      // Only 4 real projects; the other 4 slides are loop duplicates
      renderBullet: function (index, className) {
        if (index > 3) return '';
        return '<span class="' + className + '"></span>';
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      slideChange: function () {
        // With 8 slides (4 real + 4 duplicates), map indexes 4-7 back onto the 4 bullets
        const bullets = document.querySelectorAll('.swiper-pagination-bullet');
        bullets.forEach(function (b) {
          b.classList.remove('swiper-pagination-bullet-active');
          b.removeAttribute('aria-current');
        });
        const bullet = bullets[this.realIndex % 4];
        if (bullet) {
          bullet.classList.add('swiper-pagination-bullet-active');
          bullet.setAttribute('aria-current', 'true');
        }
      },
    },
  });
  

  document.getElementById('year').textContent = new Date().getFullYear();

const btn = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  btn.classList.toggle('show', window.scrollY > 220);
});
btn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});