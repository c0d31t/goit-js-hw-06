const liCategories = document.querySelectorAll(".item");
const numberOfCategories = liCategories.length;
console.log(`Number of categories: ${liCategories.length}`);

liCategories.forEach((element) => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
});
