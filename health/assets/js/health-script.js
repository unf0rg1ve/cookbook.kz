// Бургер-меню
const burger = document.getElementById("burger-menu");
const nav = document.getElementById("main-nav");

burger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

//Смена темы
const themeBtn = document.getElementById("toggle-theme");
const themeLink = document.getElementById("theme-style");

// Проверка тёмной темы
function isDarkTheme() {
  return themeLink.getAttribute("href").includes("dark");
}

// Универсальный обработчик смены темы
function switchTheme(callbackOnThemeChange = null) {
  const currentTheme = themeLink.getAttribute("href");
  const newTheme = currentTheme.includes("light")
    ? "assets/css/dark-style.css"
    : "assets/css/light-style.css";

  themeLink.setAttribute("href", `${newTheme}?v=${Date.now()}`); // предотвращаем кеш
  localStorage.setItem("theme", newTheme);
  themeBtn.innerHTML = newTheme.includes("light") ? "&#x1F319;" : "&#x2600;";

  setTimeout(() => {
    if (typeof callbackOnThemeChange === "function") {
      callbackOnThemeChange();
    }
  }, 50);
}

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme =
    localStorage.getItem("theme") || "assets/css/light-style.css";
  themeLink.setAttribute("href", `${savedTheme}?v=${Date.now()}`);
  themeBtn.innerHTML = savedTheme.includes("dark") ? "&#x2600;" : "&#x1F319;";

  // ВАЖНО: подключаем обработчик кнопки
  themeBtn.addEventListener("click", () => {
    switchTheme();
  });
});

// Данные о статьях с изображениями и количеством просмотров
const articles = [
  {
      id: "1",
      title: "Свежесть весны в каждом глотке: готовим вкусные и полезные смузи",
      text: "Весна — время обновляться вместе с природой, и лучшие помощники в этом деле — яркие и свежие смузи, наполненные витаминами и энергией.",
      image: "assets/images/health1.webp",
      date: "2025-05-15",
      views: 120
  },
  {
      id: "2",
      title: "Клетчатка: супергерой вашего пищеварения (и не только)",
      text: "Узнайте все о пищевых волокнах: зачем они нужны, где их искать, сколько нужно есть в день и почему рацион без клетчатки — это путь к проблемам.",
      image: "assets/images/health2.webp",
      date: "2025-05-13",
      views: 85
  },
  {
      id: "3",
      title: "Что такое здоровое питание? 4 правила",
      text: "Здоровое питание – это часть здорового образа жизни. И речь вовсе не о контроле получаемых калорий, а обеспечении полноценного рациона.",
      image: "assets/images/health3.webp",
      date: "2025-05-11",
      views: 200
  },
  {
    id: "4",
    title: "Витамин D3: природный источник здоровья и красоты",
    text: "Витамин D3 — ключевой элемент для крепкого здоровья, который помогает поддерживать иммунитет, крепость костей и улучшает общее самочувствие.",
    image: "assets/images/health4.webp",
    date: "2025-05-09",
    views: 175
  },
  {
    id: "5",
    title: "Секреты здорового питания: как сохранить витамины зимой",
    text: "Зима — время, когда наш организм особенно нуждается в витаминах и минералах.",
    image: "assets/images/health5.webp",
    date: "2025-05-07",
    views: 223
  },
  {
    id: "6",
    title: "Зачем нужны жиры и какие они бывают: выбираем полезные",
    text: "Какие бывают жиры, чем они полезны и почему обязательно должны быть в рационе.",
    image: "assets/images/health6.webp",
    date: "2025-05-05",
    views: 340
  }
];

const articlesList = document.getElementById("articles-list");
const searchInput = document.getElementById("search-input");
const sortSelect = document.getElementById("sort-select");

// Функция для рендеринга статей
function renderArticles(articlesToRender) {
  articlesList.innerHTML = ""; // Очищаем список перед рендерингом
  articlesToRender.forEach(article => {
      const articleCard = document.createElement("div");
      articleCard.classList.add("article-card", "col-12", "col-md-6", "col-lg-4", "p-3");
      articleCard.innerHTML = `
      <div class="article card h-100 shadow-sm">
        <img src="${article.image}" class="card-img-top article-image" alt="${article.title}">
        <div class="card-body d-flex flex-column justify-content-between">
          <div>
            <h5 class="card-title article-title">${article.title}</h5>
            <p class="card-text article-content">${article.text}</p>
          </div>
          <p class="card-text article-views mt-2">Просмотров: ${article.views}</p>
        </div>
      </div>
    `;
      // Добавляем кликабельность для перехода на страницу статьи
      articleCard.addEventListener("click", () => {
          window.location.href = `articles-pages/article.html?id=${article.id}`;
      });
      articlesList.appendChild(articleCard);
  });
}

// Изначальный рендер статей
renderArticles(articles);

// Функция поиска по статьям
searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredArticles = articles.filter(article =>
      article.title.toLowerCase().includes(searchTerm) ||
      article.text.toLowerCase().includes(searchTerm)
  );
  renderArticles(filteredArticles);
});

// Функция сортировки статей
sortSelect.addEventListener("change", () => {
  const sortValue = sortSelect.value;
  const sortedArticles = [...articles].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortValue === "newest" ? dateB - dateA : dateA - dateB;
  });
  renderArticles(sortedArticles);
});