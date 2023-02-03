const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsLiContainer = document.querySelector('#ingredients');

const elements = ingredients.map(ingredient => {
  const LiEl = document.createElement('li');
  LiEl.textContent = ingredient;
  LiEl.classList.add('item');

  return LiEl;
});

ingredientsLiContainer.append(...elements);