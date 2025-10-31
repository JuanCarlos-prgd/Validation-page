document.addEventListener("DOMContentLoaded", function () {
  const countrySelect = document.getElementById("countries");
  const phoneCodeSpan = document.getElementById("phone-code");
  const form = document.getElementById("form");

  // Actualiza el código de país al seleccionar
  countrySelect.addEventListener("change", function () {
    const selectedOption = countrySelect.options[countrySelect.selectedIndex];
    const code = selectedOption.value;
    phoneCodeSpan.textContent = "+" + code;
  });

  // Validación del formulario
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    // Validar teléfono
    if (!/^\d+$/.test(phone)) {
      alert("El número de teléfono solo debe contener dígitos.");
      return;
    }

    // Validar contraseña
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{1,16}$/;
    if (!passwordRegex.test(password)) {
      alert("La contraseña debe incluir al menos una letra y un número, máximo 16 caracteres.");
      return;
    }

    // Confirmar contraseña
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    // Si todo está bien
    alert(`¡Registro exitoso!\nUsuario: ${username}\nCorreo: ${email}`);
  });
});
