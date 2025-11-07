// VALIDATION
const userNameRegex = /[a-zA-Z][a-zA-Z0-9-_]{6,8}/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z0-9]).{8,10}$/;
const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const numeroMovil = /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/;


// Selectores
const countries = document.querySelector("#countries");
const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirm-password");

// Estas lineas de codigo se utilizan para separar el nombre del pais de los numeros del codigo

[...countries].forEach(options=>{
  options.innerHTML=(options.innerHTML.split("(")[0])
})

//Validation 
let usernameValidation = false;
let emailValidacion = false;
let phoneValidacion = false;
let passwordValidacion = false;
let confirmPasswordValidacion = false;
let countriesValidacion = false;



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

emailInput.addEventListener('input', e => {
  emailValidacion = emailRegex.test(e.target.value);
  const informacion = e.target.parentElement.children[1];

  if (emailValidacion) {
    emailInput.classList.add('correct');
    emailInput.classList.remove('incorrect');
    informacion.classList.remove('show-information');
  } else {
    emailInput.classList.add('incorrect');
    emailInput.classList.remove('correct');
    informacion.classList.add('show-information');
  }
});

phoneInput.addEventListener('input', e => {
  phoneValidacion = numeroMovil.test(e.target.value);
  const informacion = e.target.parentElement.children[1];

  if (phoneValidacion) {
    phoneInput.classList.add('correct');
    phoneInput.classList.remove('incorrect');
    informacion.classList.remove('show-information');
  } else {
    phoneInput.classList.add('incorrect');
    phoneInput.classList.remove('correct');
    informacion.classList.add('show-information');
  }
});

passwordInput.addEventListener('input', e => {
  passwordValidacion = passwordRegex.test(e.target.value);
  const informacion = e.target.parentElement.children[1];

  if (passwordValidacion) {
    passwordInput.classList.add('correct');
    passwordInput.classList.remove('incorrect');
    informacion.classList.remove('show-information');
  } else {
    passwordInput.classList.add('incorrect');
    passwordInput.classList.remove('correct');
    informacion.classList.add('show-information');
  }
});

confirmPasswordInput.addEventListener('input', e => {
  confirmPasswordValidacion = e.target.value === passwordInput.value;
  const informacion = e.target.parentElement.children[1];

  if (confirmPasswordValidacion) {
    confirmPasswordInput.classList.add('correct');
    confirmPasswordInput.classList.remove('incorrect');
    informacion.classList.remove('show-information');
  } else {
    confirmPasswordInput.classList.add('incorrect');
    confirmPasswordInput.classList.remove('correct');
    informacion.classList.add('show-information');
  }
});

countries.addEventListener('change', e => {
  countriesValidacion = e.target.value !== '';
  const informacion = e.target.parentElement.children[1];

  if (countriesValidacion) {
    countries.classList.add('correct');
    countries.classList.remove('incorrect');
    informacion.classList.remove('show-information');
  } else {
    countries.classList.add('incorrect');
    countries.classList.remove('correct');
    informacion.classList.add('show-information');
  }
});

form.addEventListener('submit', e => {
  e.preventDefault(); 
  if (usernameValidation && emailValidacion && phoneValidacion && passwordValidacion && confirmPasswordValidacion && countriesValidacion) {
    alert('¡Formulario enviado exitosamente!');
  } else {
    alert('Por favor, rellene el formulario correctamente antes de enviarlo.');
  } 
});
