document.addEventListener("DOMContentLoaded", function () {
  const hamburgerBtn = document.getElementById('hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');

  hamburgerBtn.addEventListener('click', function () {
    mobileMenu.classList.toggle('hidden');
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.filter-button');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filterValue = button.textContent.toLowerCase();
  
      const portfolioItems = document.querySelectorAll('.portfolio-item');
  
      portfolioItems.forEach(item => {
        const itemCategories = item.querySelector('span').textContent.toLowerCase();
  
        if (filterValue === 'all' || itemCategories.includes(filterValue)) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });
  
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
          const offset = 88;
          const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - offset;

          window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
          });
      }
  });
});


if (typeof Swiper !== 'undefined') {
  // Initialize Swiper
  var swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    loop: true,
    autoplay: {
        delay: 3000,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1024: {
            slidesPerView: 4,
        },
    },
  });
}