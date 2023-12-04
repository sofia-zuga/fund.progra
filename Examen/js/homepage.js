'use strict';

window.addEventListener('load', init, false);

function init() {
    let email = document.getElementById('inscriptionTxt');
    let btnEnviar = document.getElementById('btnSend');
    let expressionEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let alerta = document.getElementById('mensajeAlert');

    btnEnviar.onclick = function() {
        email = inscriptionTxt.value;
        if (email === '') {
            alerta.textContent = 'Por favor agregue su correo';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');
        } else if (expressionEmail.test(email) === false) {
            alerta.textContent = 'Correo invalido';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');
        } else {
            alerta.textContent = 'La suscripción fue exitosa';
            alerta.classList.add('alertaVerde');
            alerta.classList.remove('alertaRoja');

            emailjs.sendForm('service_fsotaxp', 'template_n2ywosw', '#form3', 'RTrn_WulCSOxy1QTO');
            cleanInputs();
        }
    }

    function cleanInputs() {
        inscriptionTxt.value = '';
    }
}

