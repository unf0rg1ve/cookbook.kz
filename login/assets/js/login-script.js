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
  const savedTheme = localStorage.getItem("theme") || "assets/css/light-style.css";
  themeLink.setAttribute("href", `${savedTheme}?v=${Date.now()}`);
  themeBtn.innerHTML = savedTheme.includes("dark") ? "&#x2600;" : "&#x1F319;";

  // ВАЖНО: подключаем обработчик кнопки
  themeBtn.addEventListener("click", () => {
    switchTheme();
  });
});