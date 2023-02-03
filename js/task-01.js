const listOfCategories = document.querySelector('ul#categories');
const listOfCategoriesItem = listOfCategories.querySelectorAll('.item');
console.log(`Number of categories: ${listOfCategoriesItem.length}`);

listOfCategoriesItem.forEach((item) => [
    console.log(`Category: ${item.firstElementChild.textContent}`),
    console.log(`Elements: ${item.lastElementChild.children.length}`)
]);