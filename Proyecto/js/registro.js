'use strict';

function changeWindow() {
    location.href = "precios.html";
}

//declaraciones que se utilizan para seleccionar y almacenar referencias a elementos HTML
const txtNombre = document.querySelector('#txtNombre');
const txtNombreMascota = document.querySelector('#txtNombreMascota');
const txtEdad = document.querySelector('#txtEdad');
const txtEmail = document.querySelector('#txtEmail');
const txtTelefono = document.querySelector('#txtTelefono');
const txtPadencia= document.querySelector('#txtPadencia');
const txtRaza= document.querySelector('#txtRaza');
const btn_registrar = document.querySelector('#btn-registrar');



let validar_contra_blacos = () => {
    let error = false;
    let error_correo = false;
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


// LIMPIAR LOS CAMPOS DEL FORM
let limpiar = () => {
    txtNombre.value = '';
    txtNombreMascota.value = '';
    txtEmail.value = '';
    txtTelefono.value = '';
    txtRaza.value = "";
    txtPadencia.value = "";
    txtEdad.value = "";

};


let obtener_datos = () => {
    let error_validacion_contra_blancos = validar_contra_blacos();


    if (error_validacion_contra_blancos) {
        Swal.fire({
                title: 'Registro no creado',
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

                    emailjs.sendForm('service_i2b0olj', 'template_2stpwye', '#formulario1', 'cuDQmgeJEDk_t3urx');


                    Swal.fire({
                            title: 'Gracias por rellenar el formulario',
                            text: 'Su registro ha sido creado.',
                            html: "<iframe src='https://lottie.host/embed/2600e703-3e71-4fc7-8538-6116531bc66b/q2inor26lk.json' width='400' height='300' > < /iframe>"

                    }).then(() => {
                            //llamar la funcion limpiar...
                            limpiar();
                    });
                }

                
            
        }
    
};


//cargar la funcion obtener_datos
btn_registrar.addEventListener('click', obtener_datos);