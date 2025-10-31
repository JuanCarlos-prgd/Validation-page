const userNameRegex = /[a-zA-Z][a-zA-Z0-9-_]{6,8}/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z0-9]).{8,10}$/;
const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const numeroMovil = /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/;


// Ajustamos el codigo para que solo aparezcan los paises
const countries = document.querySelector("#countries");

// Estas lineas de codigo se utilizan para separar el nombre del pais de los numeros del codigo

[...countries].forEach(options=>{
  options.innerHTML=(options.innerHTML.split("(")[0])
})


//Validation 
let usernameValidation = false;

// Selectores
usernameInput = document.querySelector('#username');

usernameInput.addEventListener('input',e=> {
  usernameValidation = userNameRegex.test(e.target.value);
  const informacion = e.target.parentElement.children[1];


if (usernameValidation) {
  usernameInput.classList.add('correct');
  usernameInput.classList.remove('incorrect');
  informacion.classList.remove('show-information');

} else {
  usernameInput.classList.add('incorrect');
  usernameInput.classList.remove('correct');
  informacion.classList.add('show-information');

}
});
 
