'use extrict';

//carga de la funcion init 
window.addEventListener('load', init, false);

//funcion inicial
function init() {
    //declaracion de
    let nombre = document.getElementById('nombreTxt');
    let apellido = document.getElementById('apellidoTxt');
    let email = document.getElementById('emailTxt');
    let numero = document.getElementById('numberTxt');
    let mensaje = document.getElementById('mensajeTxt');
    let alerta = document.getElementById('mensajeAlert');
    let btnEnviar = document.getElementById('btnSend');
    let expressionEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;


    //funcion del boton Enviar
    btnEnviar.onclick = function() {
        nombre = nombreTxt.value;
        apellido = apellidoTxt.value;
        email = emailTxt.value;
        numero = numberTxt.value;
        mensaje = mensajeTxt.value;

        //condicionales anidadas para validar cada campo del form 
        if (nombre === '' && apellido === '' && email === '' && numero === '' && mensaje === '') {
            alerta.textContent = 'Debe rellenar todos los campos';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaAzul');
        } else if (nombre === '') {
            alerta.textContent = 'Agregue un nombre';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaAzul');
        } else if (apellido === '') {
            alerta.textContent = 'Agregue un apellido';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaAzul');
        } else if (email === '') {
            alerta.textContent = 'Agregue un correo';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaAzul');
        } else if (expressionEmail.test(email) === false) {
            alerta.textContent = 'Agregue un correo válido y real';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaAzul');
        } else if (numero === '') {
            alerta.textContent = 'Agregue un numero de telefono';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaAzul');

        } else if (mensaje === '') {
            alerta.textContent = 'Agregue un mensaje o consulta';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaAzul');

        } else {
            //si NO existe error en los campos validados se envian los datos al servidor de correo 
            alerta.textContent = 'Mensaje enviado';
            alerta.classList.add('alertaAzul');
            alerta.classList.remove('alertaRoja');
            //service ID/template ID/#ID form/public key cuenta
            //el id del formulario es #form
            emailjs.sendForm('service_5uwslus', 'template_padk43h', '#contactoForm', 'NNgTi4E_wwrk8TCyJ');
            //carga de la funcion limpiar
            limpiar();
        }

    }


    function limpiar() {
        nombreTxt.value = '';
        apellidoTxt.value = '';
        emailTxt.value = '';
        numberTxt.value = '';
        mensajeTxt.value = '';
    }
}