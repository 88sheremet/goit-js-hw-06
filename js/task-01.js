const allQuantityList = document.querySelectorAll('.item');
// console.log(allQuantityList)
console.log(`Number of categories: ${allQuantityList.length}`);

allQuantityList.forEach(el => {
console.log(`Category : ${el.firstElementChild.textContent}`); 
console.log(`Elements : ${el.querySelectorAll('li').length}`)
})