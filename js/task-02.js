const listRef = document.querySelector('ul#ingredients');

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

for (let ingredient of ingredients) {
  // console.log(ingredients);

const itemsList = document.createElement('li');
itemsList.classList.add('item');
itemsList.textContent = `${[ingredient]}`;
listRef.appendChild(itemsList);

}

console.log(listRef);
