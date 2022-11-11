const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.getElementById("ingredients");
// console.log(listEl);

const foodIngredients = ingredients.forEach(ingredient => {
  let createItem = document.createElement('li');
  createItem.textContent = ingredient;
  createItem.classList.add('item');
  createItem.innerHTML = ingredient;
  listEl.append(createItem);
   
  // console.log(createItem);
  // console.log(listEl);
});

//  console.log(foodIngredients);

