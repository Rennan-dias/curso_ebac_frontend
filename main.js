const form = document.getElementById('formValidation');
const NumeroA = document.getElementById('NumeroA');
const NumeroB = document.getElementById('NumeroB');
const message = document.getElementById('message');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const valueA = parseFloat(NumeroA.value);
    const valueB = parseFloat(NumeroB.value);

    if (valueB > valueA) {
        message.textContent = 'Formulário válido! O número B é maior que o número A.';
        message.className = 'message success';
    } else {
        message.textContent = 'Formulário inválido! O número B deve ser maior que o número A.';
        message.className = 'message error';
    }
});
