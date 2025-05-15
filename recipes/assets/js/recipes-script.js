// Бургер-меню
const burger = document.getElementById("burger-menu");
const nav = document.getElementById("main-nav");

burger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Смена темы
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

  themeLink.setAttribute("href", `${newTheme}?v=${Date.now()}`); 
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

  // Подключение обработчика кнопки
  themeBtn.addEventListener("click", () => {
    switchTheme();
  });
});

// Реализация фильтров и страниц рецептов
const recipes = [
  {
    id: 1,
    title: "Омлет с помидорами",
    category: "завтраки",
    img: "assets/images/omelette.webp",
    ingredients: [4],
    time: 10
  },
  {
    id: 2,
    title: "Хачапури",
    category: "завтраки",
    img: "assets/images/khachapuri.webp",
    ingredients: [4],
    time: 30
  },
  {
    id: 3,
    title: "Панкейки",
    category: "завтраки",
    img: "assets/images/pancake.webp",
    ingredients: [8],
    time: 30
  },
  {
    id: 4,
    title: "Смузи",
    category: "завтраки",
    img: "assets/images/smuzi.webp",
    ingredients: [5],
    time: 15
  },
  {
    id: 5,
    title: "Сырники",
    category: "завтраки",
    img: "assets/images/syrniki.webp",
    ingredients: [8],
    time: 30
  },

  {
    id: 6,
    title: "Паста карбонара",
    category: "основные",
    img: "assets/images/pasta.webp",
    ingredients: [11],
    time: 30
  },
  {
    id: 7,
    title: "Бургер",
    category: "основные",
    img: "assets/images/burger.webp",
    ingredients: [14],
    time: 30
  },
  {
    id: 8,
    title: "Салат Цезарь",
    category: "основные",
    img: "assets/images/cezar.webp",
    ingredients: [11],
    time: 20
  },
  {
    id: 9,
    title: "Домашний рататуй",
    category: "основные",
    img: "assets/images/ratatuy.webp",
    ingredients: [14],
    time: 60
  },
  {
    id: 10,
    title: "Пельмени с говядиной",
    category: "основные",
    img: "assets/images/pelmeny.webp",
    ingredients: [9],
    time: 30
  },

  {
    id: 11,
    title: "Борщ",
    category: "супы",
    img: "assets/images/borsch.webp",
    ingredients: [13],
    time: 150
  },
  {
    id: 12,
    title: "Суп-пюре из тыквы",
    category: "супы",
    img: "assets/images/sup-pjure-iz-tikvi.webp",
    ingredients: [7],
    time: 40
  },
  {
    id: 13,
    title: "Куриный суп",
    category: "супы",
    img: "assets/images/kurinyy-sup.webp",
    ingredients: [10],
    time: 150
  },
  {
    id: 14,
    title: "Гороховый суп",
    category: "супы",
    img: "assets/images/gorohovyy-sup.webp",
    ingredients: [10],
    time: 180
  },
  {
    id: 15,
    title: "Солянка",
    category: "супы",
    img: "assets/images/soljanka.webp",
    ingredients: [19],
    time: 130
  },

  {
    id: 16,
    title: "Пирог шарлотка",
    category: "десерты",
    img: "assets/images/charlotte.webp",
    ingredients: [6],
    time: 50
  },
  {
    id: 17,
    title: "Тирамису",
    category: "десерты",
    img: "assets/images/tiramisu.webp",
    ingredients: [8],
    time: 20
  },
  {
    id: 18,
    title: "Маффины",
    category: "десерты",
    img: "assets/images/maffins.webp",
    ingredients: [8],
    time: 60
  },
  {
    id: 19,
    title: "Чизкейк",
    category: "десерты",
    img: "assets/images/cheesecake.webp",
    ingredients: [8],
    time: 70
  },
  {
    id: 20,
    title: "Печенье",
    category: "десерты",
    img: "assets/images/cookie.webp",
    ingredients: [10],
    time: 50
  },
];

const checkboxes = document.querySelectorAll(".category-filter");
const recipeContainer = document.getElementById("recipe-cards");
recipeContainer.innerHTML = "";

function renderRecipes(categories = []) {
  recipeContainer.innerHTML = "";

  const isDark = document.getElementById("theme-style")
    .getAttribute("href")
    .includes("dark");

  const filtered = categories.length
    ? recipes.filter((r) => categories.includes(r.category))
    : recipes;

  filtered.forEach((recipe) => {
    const recipeCard = document.createElement("div");
    recipeCard.classList.add("col-md-4", "mb-4");

    // классы карточки
    const cardClassList = [
      "card",
      "recipe-card",
      "h-100",
      "text-decoration-none",
      "shadow-sm",
    ];

    if (isDark) {
      cardClassList.push("dark-card");
    } else {
      cardClassList.push("text-dark");
    }

    // Шаблон отображения карточек с рецептами
    recipeCard.innerHTML = `
      <a href="recipe-pages/recipe.html?id=${recipe.id}" class="${cardClassList.join(" ")}">
        <img src="${recipe.img}" class="card-img-top" alt="${recipe.title}">
        <div class="card-body">
          <h5 class="card-title">${recipe.title}</h5>
          <p class="card-text">Ингредиентов: ${recipe.ingredients}</p>
          <p class="card-text">\u23F1 ${recipe.time} мин</p>
          <div class="buttons">
            <button class="btn btn-sm btn-outline-success me-2">&#128077;</button>
            <button class="btn btn-sm btn-outline-danger">&#128078;</button>
          </div>
        </div>
      </a>
    `;

    recipeContainer.appendChild(recipeCard);
  });
}

// Переход с главной: ?category=завтраки
window.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get("category");
  if (category) {
    // Галочка на нужной категории при переходе
    const checkbox = document.querySelector(`.category-filter[value="${category}"]`);
    if (checkbox) {
      checkbox.checked = true;
    }
    const selected = [category];
    renderRecipes(selected);
  } else {
    renderRecipes(); // показать всё по умолчанию
  }
});

// Обработчики на клики по чекбоксам
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    const selectedCategories = Array.from(checkboxes)
      .filter(cb => cb.checked)
      .map(cb => cb.value);

    renderRecipes(selectedCategories);
  });
});

//Поиск рецептов
const searchInput = document.getElementById("recipe-search");

if (searchInput) {
  searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategories = Array.from(checkboxes)
      .filter(cb => cb.checked)
      .map(cb => cb.value);

    const filtered = recipes.filter(recipe => {
      const matchCategory =
        selectedCategories.length === 0 || selectedCategories.includes(recipe.category);
      const matchTitle = recipe.title.toLowerCase().includes(searchTerm);
      return matchCategory && matchTitle;
    });

    // Отображаем результаты
    renderCustomRecipes(filtered);
  });
}


function renderCustomRecipes(filtered) {
  recipeContainer.innerHTML = "";

  if (filtered.length === 0) {
    recipeContainer.innerHTML = `
      <div class="col-12 text-center py-4">
        <h4>Ничего не найдено &#128532;</h4>
        <p class="text-muted">Попробуйте изменить поисковый запрос или фильтры.</p>
      </div>
    `;
    return; // прерываем выполнение
  }

  const isDark = document.getElementById("theme-style")
    .getAttribute("href")
    .includes("dark");

  filtered.forEach((recipe) => {
    const recipeCard = document.createElement("div");
    recipeCard.classList.add("col-md-4", "mb-4");

    const cardClassList = [
      "card",
      "recipe-card",
      "h-100",
      "text-decoration-none",
      "shadow-sm",
    ];

    if (isDark) {
      cardClassList.push("dark-card");
    } else {
      cardClassList.push("text-dark");
    }

    recipeCard.innerHTML = `
      <a href="recipe.html?id=${recipe.id}" class="${cardClassList.join(" ")}">
        <img src="${recipe.img}" class="card-img-top" alt="${recipe.title}">
        <div class="card-body">
          <h5 class="card-title">${recipe.title}</h5>
          <p class="card-text">Ингредиентов: ${Array.isArray(recipe.ingredients) ? recipe.ingredients.length : recipe.ingredients}</p>
          <p class="card-text">\u23F1 ${recipe.time} мин</p>
          <div class="buttons">
            <button class="btn btn-sm btn-outline-success me-2">&#128077;</button>
            <button class="btn btn-sm btn-outline-danger">&#128078;</button>
          </div>
        </div>
      </a>
    `;

    recipeContainer.appendChild(recipeCard);
  });
}
