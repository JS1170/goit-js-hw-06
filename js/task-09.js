const colorChangeBtn = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');
const bodyColor = document.querySelector('body')

colorChangeBtn.addEventListener('click', changeBodyColor)


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBodyColor() {
  const getColor = getRandomHexColor();

  bodyColor.style.backgroundColor = getColor;
  spanColor.textContent = getColor;
}






