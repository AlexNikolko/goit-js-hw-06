const backgroundBtn = document.querySelector('.change-color');
const backgroundTextColor = document.querySelector('.color');

backgroundBtn.addEventListener('click', onBtnClick);

function onBtnClick() {
  const color = getRandomHexColor();
  
  document.body.style.backgroundColor = color;
  backgroundTextColor.textContent = color;  
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}