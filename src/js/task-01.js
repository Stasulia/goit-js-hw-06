
const items = document.querySelectorAll('.item')
console.log(items);
const arrOfItem = Array.from(items)
console.log(arrOfItem);
function countCategories(arrOfItem) {
    let totalCategories = arrOfItem.length;
  return `Number of categories: ${totalCategories}`
 }
 console.log(countCategories(arrOfItem));

// const title = document.querySelectorAll('h2')
// console.log(title);
// const arrOfElements = Array.from(title)
// console.log(arrOfElements);
function countElements(arrOfItem) {
    let totalElements = 0;
    arrOfItem.forEach(element => {
        
    });
    return
}
//const 
// const totalCategories = function(arr) {
//   arr.forEach(function(item) {
//     totalCategories += item;
// }
// );
// return `Number of categories: ${totalCategories}`
// }
// console.log(totalCategories());

// function countCategories(arr) {
//     let totalCategories = 0;
//     arr.forEach(function(element) {
//         totalCategories += element;
//     } )
//     return totalCategories;
// }
// console.log(countCategories());
 
// const countCategories = arr => {let totalCategories = 0;
// arr.forEach(element => { totalCategories += element
//     });
//     return `Number of categories: ${totalCategories}`;
// }


