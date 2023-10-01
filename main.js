const form = document.getElementById('formExercicio');
const valor1 = document.getElementById('numero1');
const valor2 = document.getElementById('numero2');
let formEValido = false;

function validaNumero(valor1, valor2) {
    return valor2 > valor1;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const mensagemSucesso = `É válido, o numero 2: <b>${numero2.value}</b> é maior que o numero 1: <b>${numero1.value}</b>.`;

    formEValido = validaNumero(valor1.value, valor2.value)
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.success-menssage');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        
        valor1.value = '';
        valor2.value = '';

    } else {
        valor2.style.border = '1px solid red';
        document.querySelector('.error-menssage').style.display = 'block';
    }
})

valor2.addEventListener('keyup', function(e){
    console.log(e.target.value);
    formEValido = validaNumero(e.target.value);

    if (formEValido) {
        valor2.classList.add('error');
        document.querySelector('.error-menssage').style.display = 'block';
    } else {
        valor2.classList.remove('error');
        valor2.style.border = '1px solid gray';
        document.querySelector('.error-menssage').style.display = 'none';
    }
})
