// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все < li > за одну операцию в список ul#ingredients.

// 2
const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const ingredientsList = document.querySelector('#ingredients');
const arrayOfItems = [];
for (const item of ingredients) {
  const ingredientsItem = document.createElement('li');
  ingredientsItem.textContent = item;
  ingredientsItem.classList = 'item';
  arrayOfItems.push(ingredientsItem);
}
ingredientsList.append(...arrayOfItems);
console.log('ingredientsList', ingredientsList);
//
//
//
//
//
//
//
//
//
//
//
//
// const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
// const ingredientsList = document.querySelector('#ingredients');
// // const refs = {
// //   list: document.querySelector('#ingredients'),
// // };

// const items = ingredients.map(item => {
//   const elements = document.createElement('li');
//   elements.textContent = item;
//   elements.classList.add('item');
//   return elements;
// });

// ingredientsList.append(...items);

// const ingredientsList = document.querySelector('#ingredients');
// 1
// for (let i = 0; i < ingredients.length; i += 1) {
//   const ingredientsItem = document.createElement('li');
//   ingredientsItem.textContent = ingredients[i];
//   ingredientsItem.classList = 'item';
//   ingredientsList.appendChild(ingredientsItem);
// }
// console.log('ingredientsList', ingredientsList);

//
// 3!
// const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
// const ingredientsParrent = document.querySelector('#ingredients');

// const liArray = [];

// ingredients.forEach(ingredient => {
//   const item = document.createElement('li');
//   item.className = 'item';
//   item.textContent = ingredient;
//   liArray.push(item);
// });

// ingredientsParrent.append(...liArray);
