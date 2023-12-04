'use strict';

function changeWindow() {
    location.href = "precios.html";
}

//declaraciones que se utilizan para seleccionar y almacenar referencias a elementos HTML
const txtNombre = document.querySelector('#txtNombre');
const txtNombreMascota = document.querySelector('#txtNombreMascota');
const txtFechaConsulta = document.querySelector('#txtFechaConsulta');
const txtEmail = document.querySelector('#txtEmail');
const txtTelefono = document.querySelector('#txtTelefono');
const txtConsulta = document.querySelector('#txtConsulta');
const boton_reservar = document.querySelector('#btn-reservar');



let validar_contra_blacos = () => {
    let error = false;
    let error_fechas = false;
    let error_correo = false;
    let error_mascotas = false;
    let error_terminos_y_condiciones = false;

    //seleccionar todos los elementos HTML que tienen el atributo required (indicando que son campos requeridos)
    //y se almacenan en la variable elementos_requeridos. Esto se hace utilizando document.querySelectorAll('[required]').
    let elementos_requeridos = document.querySelectorAll('[required]');

    //expresión regular que permite solo letras minúsculas, números, puntos y guiones bajos antes de la arroba, 
    //seguido de letras y números después de la arroba, y un dominio de nivel superior que consta de al menos una letra
    let validacion_arroba_correo = /^[a-z._\d]+@[a-z\d]+\.[a-z]+\.?[a-z]+?$/;


    //el ciclo recorre todos los elementos requeridos del formulario
    //ciclo que determina la llamada de la alerta error rojo de los campos
    for (let i = 0; i < elementos_requeridos.length; i++) {
        //si un campo está vacío se agrega la clase CSS input-error al elemento, 
        //se muestre un borde rojo para indicar que es un campo obligatorio NO completado. 
        if (elementos_requeridos[i].value == '') {
            elementos_requeridos[i].classList.add('input-error');
            //la variable error se establece en true, lo que indica que hay al menos un campo no esta completado.
            error = true;
        } else {
            //si el campo no está vacío, se elimina la clase input-error del elemento, lo que eliminará el estilo de error si se había establecido previamente.
            elementos_requeridos[i].classList.remove('input-error');
        }
    }


    //CARGA FUNCIONES DE CAMPOS FECHAS-CORREO-MONEDA-TERMINOS

    validar_correo();
    validar_mascotas();
    validar_terminos_y_condiciones();
    return error;
};



//VALIDACION DEL CAMPO CORREO ELECTRONICO

let validar_correo = () => {
    //declaracion de 3 variables
    let error = false;
    let error_correo = false;
    let validacion_arroba_correo = /^[a-z._\d]+@[a-z\d]+\.[a-z]+\.?[a-z]+?$/;


    if (validacion_arroba_correo.test(txtEmail.value) == false) {
        txtEmail.classList.add('input-error');
        error = true;
        error_correo = true;
    }
    return error_correo;
}


//VALIDACION DEL CAMPO MASCOTAS

let validar_mascotas = () => {
    let error = false;
    let errorMascotas = false;
    let inputMascotas = document.querySelector('#cantMascotas input[type=radio]:checked');

    if (!inputMascotas) {
        error = true;
        document.querySelector('#cantMascotas').classList.add('input-error');
        errorMascotas = true;
    } else {
        document.querySelector('#cantMascotas').classList.remove('input-error');
    }
    return errorMascotas;
}



//VALIDACION DEL CAMPO TERMINOS Y CONDICIONES

let validar_terminos_y_condiciones = () => {
    let error = false;
    let error_terminos_y_condiciones = false;
    let input_terminos_y_condiciones = document.querySelector('#terminos_y_condiciones input[type=checkbox]:checked');

    //verifica la validez del campo entrada llamado input_terminos_y_condiciones, 
    //que es una casilla de verificación que indica si el usuario ha aceptado los términos y condiciones
    if (!input_terminos_y_condiciones) {
        error = true;
        document.querySelector('#terminos_y_condiciones').classList.add('input-error');
        error_terminos_y_condiciones = true;
    } else {
        document.querySelector('#terminos_y_condiciones').classList.remove('input-error');
    }
    return error_terminos_y_condiciones;
}


// LIMPIAR LOS CAMPOS DEL FORM
let limpiar = () => {
    txtNombre.value = '';
    txtNombreMascota.value = '';
    txtFechaConsulta.value = '';
    txtEmail.value = '';
    txtTelefono.value = '';
    txtConsulta.value = "";
    document.getElementById("checkbox_y_terminos_y_condiciones").checked = false;
    document.getElementById("rbtMascotas1").checked = false;
    document.getElementById("rbtMascotas2").checked = false;
    document.getElementById("rbtMascotas3").checked = false;
};


let obtener_datos = () => {
    let error_validacion_contra_blancos = validar_contra_blacos();


    if (error_validacion_contra_blancos) {
        Swal.fire({
                title: 'Reservacion no ha sido enviada a confirmación.',
                text: 'Por favor rellene todos los espacios requeridos.',
                icon: 'warning'
            })
    } else {
            if (validar_correo()) {
                Swal.fire({
                    title: 'La dirección de correo electrónico es inválida. Por favor agregar un correo válido.',
                    text: 'ejemplo@gmail.com',
                    icon: 'warning'
                })
            } else {
                if (validar_mascotas()) {
                    Swal.fire({
                        title: 'Seleccione las cantidad de mascotas.',
                        text: 'Favor seleccionar la cantidad de mascotas que iran a la cita.',
                        icon: 'warning'
                    })
                } else {
                    if (validar_terminos_y_condiciones()) {
                        Swal.fire({
                            title: 'Términos y condiciones no aceptados',
                            text: 'Tiene que aceptar los términos y condiciones para continuar',
                            icon: 'warning'
                        })
                    } else {
                        // let txtNombre = txtNombre.value;
                        // let txtNombreMascota = txtNombreMascota.value;
                        // let txtFechaConsulta = txtFechaConsulta.value;
                        // let txtEmail = txtEmail.value;
                        // let txtTelefono = txtTelefono.value;
                        // let rbtMascotas = document.querySelector('#cantMascotas input[type=radio]:checked').value;
                        // let terminos_y_condiciones = document.querySelector('#terminos_y_condiciones input[type=checkbox]:checked').value;
                        emailjs.sendForm('service_fsotaxp', 'template_p615bap', '#formulario1', 'RTrn_WulCSOxy1QTO');


                        Swal.fire({
                            title: 'Gracias por rellenar el formulario',
                            text: 'Su solicitud de reserva a sido enviada para confirmación.',
                            icon: 'success'

                        }).then(() => {
                            //llamar la funcion limpiar...
                            limpiar();
                        });
                    }

                
            }
        }
    }
};


//cargar la funcion obtener_datos
boton_reservar.addEventListener('click', obtener_datos);