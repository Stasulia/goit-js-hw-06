
const item = document.querySelectorAll('.item')
const items = Array.from(item)

function countCategories(items) {
  let totalCategories = items.length;
  console.log(`Number of categories: ${totalCategories}`) 
items.forEach(function(item) {
    console.log(`Category : ${item.firstElementChild.textContent}\nElements : ${item.lastElementChild.children.length}` )
}
)
}  
console.log(countCategories(items));

