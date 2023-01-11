// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все < li > за одну операцию в список ul#ingredients.

// const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

// const ingredientsList = document.querySelector('#ingredients');
// ingredientsList.textContent = 'INGREDIENTS:';
// 1
// for (let i = 0; i < ingredients.length; i += 1) {
//   const ingredientsItem = document.createElement('li');
//   ingredientsItem.textContent = ingredients[i];
//   ingredientsItem.classList = 'item';
//   ingredientsList.appendChild(ingredientsItem);
// }
// console.log('ingredientsList', ingredientsList);
// 2
for (const item of ingredients) {
  const ingredientsItem = document.createElement('li');
  ingredientsItem.textContent = item;
  ingredientsItem.classList = 'item';
  ingredientsList.appendChild(ingredientsItem);
}
console.log('ingredientsList', ingredientsList);
//
// //

