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

  // ВАЖНО: подключаем обработчик кнопки
  themeBtn.addEventListener("click", () => {
    switchTheme();
  });
});

// Отображение рецепта на странице
const recipeContainer = document.getElementById("recipe-detail");
const urlParams = new URLSearchParams(window.location.search);
const recipeId = parseInt(urlParams.get("id"));
const recipe = recipes.find(r => r.id === recipeId);

if (recipe) {
  recipeContainer.innerHTML = `
    <div class="recipe-content">
      <h1 class="mb-3">${recipe.title}</h1>
      
      <div class="row mb-4">
        <div class="col-md-6">
          <img src="${recipe.img}" class="img-fluid rounded" alt="${recipe.title}">
        </div>
        <div class="col-md-6">
          <h5 class="fw-bold mb-3">Энергетическая ценность на порцию</h5>
          <div class="row text-center mb-3">
            <div class="col"><strong>${recipe.nutrition.calories}</strong><br>Ккал</div>
            <div class="col"><strong>${recipe.nutrition.protein}</strong><br>Белки</div>
            <div class="col"><strong>${recipe.nutrition.fat}</strong><br>Жиры</div>
            <div class="col"><strong>${recipe.nutrition.carbs}</strong><br>Углеводы</div>
          </div>

          <h5 class="fw-bold mt-4">Ингредиенты</h5>
          <ul class="list-group">
            ${recipe.ingredientsDetailed.map(i => `<li class="list-group-item d-flex justify-content-between ing-list"><span>${i.name}</span><span>${i.amount}</span></li>`).join("")}
          </ul>
        </div>
      </div>

      <div class="recipe-instructions">
        ${recipe.html}
      </div>
    </div>
  `;
}