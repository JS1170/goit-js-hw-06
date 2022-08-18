const categoriesItemsEl = document.querySelectorAll("li.item");
console.log(`Кількість категорій: ${ categoriesItemsEl.length }`);

Array.prototype.forEach.call(categoriesItemsEl, (element) => {
    const title = element.querySelector('h2').innerHTML;
    const categoriesItemsElLength = element.querySelectorAll('li').length;
    console.log(`Категорія: ${title} / Кількість елементів: ${categoriesItemsElLength}`);
});