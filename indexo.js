let menuicn = document.querySelector(".menuicn");
let nav = document.querySelector(".navcontainer");

menuicn.addEventListener("click", () => {
    nav.classList.toggle("navclose");
})
let captionsList = document.querySelectorAll('.caption-item');
let unitsList = document.querySelectorAll('.unit');

captionsList.forEach(function (item, index) {
  item.addEventListener('mouseover', function () {
     unitsList[index].classList.add('hovered');
  });

  item.addEventListener('mouseout', function () {
     unitsList[index].classList.remove('hovered');
  });
});
const button = document.getElementById('themeToggle');
const body = document.body;
const icon = document.getElementById('icon');
const btnText = document.getElementById('btnText');

const icons = {
  dark: `<path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"/>`, // Луна
  light: `
    <circle cx="12" cy="12" r="5" />
    <path d="M12 1v2" />
    <path d="M12 21v2" />
    <path d="M4.22 4.22l1.42 1.42" />
    <path d="M18.36 18.36l1.42 1.42" />
    <path d="M1 12h2" />
    <path d="M21 12h2" />
    <path d="M4.22 19.78l1.42-1.42" />
    <path d="M18.36 5.64l1.42-1.42" />
  `
};

function setTheme(theme) {
  if(theme === 'dark'){
  body.classList.add('dark');
  icon.innerHTML = icons.light;
  btnText.textContent = 'Темная тема';
} else {
  body.classList.remove('dark');
  icon.innerHTML = icons.dark;
  btnText.textContent = 'Светлая тема';
}
localStorage.setItem('theme', theme);
}

const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);

button.addEventListener('click', () => {
const isDark = body.classList.contains('dark');
setTheme(isDark ? 'light' : 'dark');
});
