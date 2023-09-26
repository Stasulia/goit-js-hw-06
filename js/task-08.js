// const form = document.querySelector('.login-form');
// form.addEventListener('submit', handlerSubmit);

// function handlerSubmit(event) {
//  event.preventDefault();
//  const {email, password} = event.currentTarget.elements;
//  const data = {
//     email: email.value,
//     password: password.value,
//  };
//   if (email.value === '' || password.value === '') {
//   alert (`Треба заповнити всі поля`);
//   }
//  else {
//  console.log(data);
// }
//  event.currentTarget.reset();
// };

const form = document.querySelector('.login-form');
form.addEventListener('submit', handlerSubmit);

function handlerSubmit(event) {
 event.preventDefault();
 const {email, password} = event.currentTarget.elements;
 const data = {
    email: email.value,
    password: password.value,
 };
  if (email.value === '' || password.value === '') {
  alert (`Треба заповнити всі поля`);
  };
  return data;
 event.currentTarget.reset();
};
