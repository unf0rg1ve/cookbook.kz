// Бургер-меню
const burger = document.getElementById("burger-menu");
const nav = document.getElementById("main-nav");

burger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Смена светлой темы на тёмную
const themeBtn = document.getElementById("toggle-theme");
const themeLink = document.getElementById("theme-style");
let pieChart, bubbleChart;

// Функция для определения текущей темы
function isDarkTheme() {
  return themeLink.getAttribute("href").includes("dark");
}

// Улучшенная функция обновления графиков
function updateChartsTheme() {
  const isDark = isDarkTheme();
  const textColor = isDark ? "#e0e0e0" : "#333";
  const gridColor = isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)";
  const borderColor = isDark ? "#444" : "#ffffff";

  // Обновляем круговую диаграмму
  if (pieChart) {
    pieChart.options.plugins.title.color = textColor;
    pieChart.options.plugins.legend.labels.color = textColor;
    pieChart.data.datasets.forEach((dataset) => {
      dataset.borderColor = borderColor;
    });
    pieChart.update();
  }

  // Обновляем пузырьковую диаграмму
  if (bubbleChart) {
    bubbleChart.options.plugins.title.color = textColor;
    bubbleChart.options.plugins.legend.labels.color = textColor;
    bubbleChart.options.scales.x.ticks.color = textColor;
    bubbleChart.options.scales.y.ticks.color = textColor;
    bubbleChart.options.scales.x.grid.color = gridColor;
    bubbleChart.options.scales.y.grid.color = gridColor;
    bubbleChart.options.scales.x.title.color = textColor;
    bubbleChart.options.scales.y.title.color = textColor;
    bubbleChart.update();
  }
}

// Загрузка сохранённой темы
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme =
    localStorage.getItem("theme") || "assets/css/light-style.css";
  themeLink.setAttribute("href", savedTheme);
  themeBtn.innerHTML = savedTheme.includes("dark") ? "&#x2600;" : "&#x1F319;";

  initCharts();
});

// Обработчик смены темы с задержкой
themeBtn.addEventListener("click", () => {
  const currentTheme = themeLink.getAttribute("href");
  const newTheme = currentTheme.includes("light")
    ? "assets/css/dark-style.css"
    : "assets/css/light-style.css";

  themeLink.setAttribute("href", newTheme);
  localStorage.setItem("theme", newTheme);
  themeBtn.innerHTML = newTheme.includes("light") ? "&#x1F319;" : "&#x2600;";

  // Добавляем небольшую задержку для гарантированного применения CSS
  setTimeout(() => {
    updateChartsTheme();
  }, 50);
});

// Слайдер

let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
    dots[i].classList.toggle("active", i === index);
  });
  slideIndex = index;
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}

document.querySelector(".next")?.addEventListener("click", nextSlide);
document.querySelector(".prev")?.addEventListener("click", prevSlide);

dots.forEach((dot, i) => dot.addEventListener("click", () => showSlide(i)));

showSlide(slideIndex);

setInterval(nextSlide, 5000);

//Обработка свайпов слайдера для мобильных устройств

let touchStartX = 0;
let touchEndX = 0;

const sliderContainer = document.querySelector(".slider-container");

sliderContainer.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

sliderContainer.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  if (touchEndX < touchStartX) {
    nextSlide(); // Свайп влево
  } else if (touchEndX > touchStartX) {
    prevSlide(); // Свайп вправо
  }
}

//Диаграммы

// Инициализация графиков
function initCharts() {
  const isDark = isDarkTheme();
  const textColor = isDark ? "#e0e0e0" : "#333";
  const gridColor = isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)";
  const borderColor = isDark ? "#444" : "#ffffff";

  let titleFontSize = 20;
  let labelFontSize = 16;
  let axisFontSize = 16;
  let tooltipFontSize = 16;

  if (window.innerWidth >= 2560) {
    titleFontSize = 36;
    labelFontSize = 26;
    axisFontSize = 26;
    tooltipFontSize = 22;
  } else if (window.innerWidth >= 1920 && window.innerWidth < 2560) {
    titleFontSize = 24;
    labelFontSize = 22;
    axisFontSize = 22;
    tooltipFontSize = 22;
  } else if (window.innerWidth >= 1440 && window.innerWidth < 1920) {
    titleFontSize = 20;
    labelFontSize = 18;
    axisFontSize = 18;
    tooltipFontSize = 18;
  } else if (window.innerWidth >= 1024 && window.innerWidth < 1440) {
    titleFontSize = 16;
    labelFontSize = 14;
    axisFontSize = 14;
    tooltipFontSize = 14;
  } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
    titleFontSize = 22;
    labelFontSize = 18;
    axisFontSize = 18;
    tooltipFontSize = 18;
  } else if (window.innerWidth >= 425 && window.innerWidth < 639) {
    titleFontSize = 12;
    labelFontSize = 10;
    axisFontSize = 10;
    tooltipFontSize = 10;
  } else if (window.innerWidth >= 320 && window.innerWidth < 424) {
  titleFontSize = 12;
  labelFontSize = 10;
  axisFontSize = 10;
  tooltipFontSize = 10;
  } else {
    titleFontSize = 14;
    labelFontSize = 10;
    axisFontSize = 10;
    tooltipFontSize = 10;
  }

  // Круговая диаграмма
  const ctx = document.getElementById("pieChart").getContext("2d");
  pieChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Завтраки", "Основные блюда", "Десерты", "Супы"],
      datasets: [
        {
          data: [25, 40, 20, 15],
          backgroundColor: ["#009fe3", "#ffaa20", "#ff9fc3", "#a8c600"],
          borderColor: borderColor,
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      cutout: "50%",
      plugins: {
        title: {
          display: true,
          text: "Сравнение рецептов: время, калории и популярность",
          font: { size: titleFontSize },
          color: textColor,
        },
        legend: {
          position: "bottom",
          labels: {
            color: textColor,
            padding: 20,
            font: {
              size: labelFontSize,
            },
          },
        },
      },
    },
  });

  // Пузырьковая диаграмма
  const ctxBubble = document.getElementById("bubbleChart").getContext("2d");
  bubbleChart = new Chart(ctxBubble, {
    type: "bubble",
    data: {
      datasets: [
        {
          label: "Паста Карбонара",
          data: [
            {
              x: 20, // Время приготовления (мин)
              y: 550, // Калорийность (ккал)
              r: 15, // Размер пузыря (популярность)
            },
          ],
          backgroundColor: "rgba(0, 123, 255, 0.7)",
          borderColor: "rgba(0, 123, 255, 1)",
          borderWidth: 1,
        },
        {
          label: "Салат Цезарь",
          data: [
            {
              x: 10,
              y: 300,
              r: 12,
            },
          ],
          backgroundColor: "rgba(40, 167, 69, 0.7)",
          borderColor: "rgba(40, 167, 69, 1)",
          borderWidth: 1,
        },
        {
          label: "Панкейки",
          data: [
            {
              x: 15,
              y: 450,
              r: 10,
            },
          ],
          backgroundColor: "rgba(255, 193, 7, 0.7)",
          borderColor: "rgba(255, 193, 7, 1)",
          borderWidth: 1,
        },
        {
          label: "Смузи",
          data: [
            {
              x: 5,
              y: 200,
              r: 8,
            },
          ],
          backgroundColor: "rgba(23, 162, 184, 0.7)",
          borderColor: "rgba(23, 162, 184, 1)",
          borderWidth: 1,
        },
        {
          label: "Бургер",
          data: [
            {
              x: 25,
              y: 700,
              r: 18,
            },
          ],
          backgroundColor: "rgba(220, 53, 69, 0.7)",
          borderColor: "rgba(220, 53, 69, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: "Сравнение рецептов: время, калории и популярность",
          font: {
            size: titleFontSize,
            weight: "bold",
          },
          color: textColor,
          padding: {
            top: 10,
            bottom: 20,
          },
        },
        legend: {
          position: "bottom",
          labels: {
            color: textColor,
            font: {
              size: labelFontSize,
            },
            padding: 20,
            usePointStyle: true,
            pointStyle: "circle",
          },
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              const label = context.dataset.label || "";
              const data = context.raw;
              return [
                `${label}`,
                `Время: ${data.x} мин`,
                `Калории: ${data.y} ккал`,
                `Популярность: ${data.r}`,
              ];
            },
          },
          bodyFont: {
            size: tooltipFontSize,
          },
          padding: 10,
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Время приготовления (мин)",
            color: textColor,
            font: {
              size: axisFontSize,
              weight: "bold",
            },
          },
          ticks: {
            color: textColor,
            stepSize: 5,
          },
          grid: {
            color: gridColor,
            drawBorder: true,
          },
          min: 0,
          max: 30,
        },
        y: {
          title: {
            display: true,
            text: "Калорийность (ккал)",
            color: textColor,
            font: {
              size: axisFontSize,
              weight: "bold",
            },
          },
          ticks: {
            color: textColor,
            stepSize: 100,
          },
          grid: {
            color: gridColor,
            drawBorder: true,
          },
          min: 0,
          max: 800,
        },
      },
      elements: {
        point: {
          radius: function (context) {
            // Динамический размер пузыря на основе данных
            const size = context.dataset.data[0].r;
            return Math.min(Math.max(size, 5), 20);
          },
          hoverRadius: function (context) {
            // Увеличение при наведении
            const size = context.dataset.data[0].r;
            return Math.min(Math.max(size * 1.2, 6), 24);
          },
        },
      },
    },
  });
}
window.addEventListener("resize", () => {
  if (pieChart) pieChart.destroy();
  if (bubbleChart) bubbleChart.destroy();
  initCharts();
});
window.addEventListener("load", () => {
  setTimeout(() => {
    initCharts();
  }, 50);
});

// Форма обратной связи

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMessage = document.getElementById("formMessage");

  if (!name || !email || !message) {
    formMessage.style.display = "block";
    formMessage.style.color = "red";
    formMessage.textContent = "Пожалуйста, заполните все поля.";
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    formMessage.style.display = "block";
    formMessage.style.color = "red";
    formMessage.textContent = "Введите корректный email.";
    return;
  }

  formMessage.style.display = "block";
  formMessage.style.color = "green";
  formMessage.textContent = "Форма отправлена! Спасибо за обращение.";

  this.reset();
});
