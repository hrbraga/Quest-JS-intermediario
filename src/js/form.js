const form = document.getElementById('form-contato');
const inputs = form.querySelectorAll('input, textarea');
const btn = document.getElementById('botao');

btn.addEventListener("click", function () {
  inputs.forEach(function (input) { 
    const value = input.value.trim();
    const alert = input.nextElementSibling;

    if (value === "") { 
      input.classList.add("invalid");
      input.classList.remove("campos-obrigatorios");
      input.classList.add("error-message");
      alert.classList.add("campo-obrigatorio");
    } else {
      input.classList.add("campos-obrigatorios"); 
      alert.classList.remove("campo-obrigatorio");
    }
  });
});