// const swiper = new Swiper('.swiper', {
//   loop: true,
//   slidesPerView: 3,
//   spaceBetween: 50,
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });

const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 50,
  breakpoints: {
    700: {
      slidesPerView: 2,
      spaceBetween: 50
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 50
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


// Инициализация второго слайдера
const swiper2 = new Swiper('.awards-swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 50,
  breakpoints: {
    700: {
      slidesPerView: 2,
      spaceBetween: 50
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 50
    },
  },
  navigation: {
    nextEl: '.awards-swiper-button-next',
    prevEl: '.awards-swiper-button-prev',
  },
});

// Инициализация третьего слайдера

const swiper3 = new Swiper('.galery-swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 40,
  breakpoints: {
    800: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 40
    },
    1600: {
      slidesPerView: 4,
      spaceBetween: 40
    },
  },
  navigation: {
    nextEl: '.galery-swiper-button-next',
    prevEl: '.galery-swiper-button-prev',
  },
});


document.addEventListener("DOMContentLoaded", function () {
  // Получаем все кнопки и секции галереи
  const buttons = document.querySelectorAll('.choose__btn');
  const galleries = document.querySelectorAll('.swiper.galery-swiper');
  const classrooms = document.querySelectorAll('.classrooms');

  // Функция для фильтрации галерей и классов по выбранной категории
  function filterGalleries(selectedCategory) {
    galleries.forEach(gallery => {
      // Получаем атрибут категории галереи
      const galleryCategory = gallery.getAttribute('data-category');

      // Показываем или скрываем галерею в зависимости от выбранной категории
      if (selectedCategory === 'all' || selectedCategory === galleryCategory) {
        gallery.style.display = 'block'; // Показываем галерею
      } else {
        gallery.style.display = 'none'; // Скрываем галерею
      }
    });

    // Скрываем или показываем классы в зависимости от выбранной категории
    classrooms.forEach(classroom => {
      const classroomCategory = classroom.previousElementSibling.getAttribute('data-category');
      if (selectedCategory === 'all' || selectedCategory === classroomCategory) {
        classroom.style.display = 'block'; // Показываем класс
      } else {
        classroom.style.display = 'none'; // Скрываем класс
      }
    });
  }

  // Добавляем обработчики событий нажатия для каждой кнопки
  buttons.forEach(button => {
    button.addEventListener('click', function () {
      const selectedCategory = this.getAttribute('data-category');

      // Удаляем класс active у всех кнопок
      buttons.forEach(btn => btn.classList.remove('active'));

      // Добавляем класс active к нажатой кнопке
      this.classList.add('active');

      filterGalleries(selectedCategory);
    });
  });

  // Опционально, можно инициировать клик по кнопке "Все", чтобы показать все галереи по умолчанию
  buttons[0].click(); // Кликаем на первую кнопку (Все), чтобы изначально показать все галереи
});

const acc = document.getElementsByClassName('accordeon-button');
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function () {
    this.classList.toggle('active');
    this.nextElementSibling.classList.toggle('show');
    for (let j = 0; j < acc.length; j++) {
      if (acc[j] !== this) {
        acc[j].classList.remove('active');
        acc[j].nextElementSibling.classList.remove('show');
      }
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("burger").addEventListener("click", function () {
    document.querySelector(".header__main").classList.toggle("open")
  })
})