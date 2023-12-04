function validarEncuesta() {

    //Preguntas 1  y 2.
    var pregunta1 = document.getElementById("r1").value
    var pregunta2 = document.getElementById("r2").value

    //Codigo para saber la opcion escogida en el input radio de la pregunta 3.
    var respuesta3 = "";
    document.getElementsByName("opinion")
        .forEach(radio => {
            if (radio.checked) {
                // console.log(radio.value);
                respuesta3 = radio.value
            }
        });

    //Codigo para saber la opcion escogida en el input radio de la pregunta 4.
    var respuesta4 = "";
    document.getElementsByName("opinion2")
        .forEach(radio => {
            if (radio.checked) {
                // console.log(radio.value);
                respuesta4 = radio.value
            }
        });



    //Validacion de los datos ingresados
    if (pregunta1 == "" || pregunta2 == "" || respuesta3 == "" || respuesta4 == "") {
        swal.fire({
            title: "Estimado usuario",
            text: "Por favor rellene todos las preguntas para atenderle mejor en el futuro.",
            icon: "warning", 
        })
    } else {

        //condicionales que determinan las opciones seleccionadas por el cliente.
        var mensaje1 = "";
        if (document.formulario.grooming.checked == true && document.formulario.consulta.checked == true && document.formulario.vacunacion.checked == true) {
            mensaje1 = "¡Gracias por contestar las preguntas!";
        } else if (document.formulario.grooming.checked == false || document.formulario.consulta.checked == false || document.formulario.vacunacion.checked == false) {
            mensaje1 = "Gracias por su tiempo, sus respuestas son importante para nosotros mejorar.";
        } else if (document.formulario.grooming.checked == false && document.formulario.consulta.checked == false && document.formulario.vacunacion.checked == false) {
            mensaje1 = "Gracias por su tiempo, lamentamos que su experiencia no haya sido buena, trabajaremos para mejorar en el futuro.";
        }

        var mensaje3 = "";
        if (respuesta4 == "Buena") {
            mensaje3 = "¡Gracias por contestar las preguntas!";
        } else if (respuesta4 == "Regular") {
            mensaje3 = "Gracias por darnos su valioso tiempo contestando esta encuesta, continuaremos mejorando todos los dias!";
        } else {
            mensaje3 = "Gracias por su tiempo, lamentamos que su experiencia no haya sido buena, trabajaremos para mejorar en el futuro. ";
        }

        var mensaje2 = "";
        if (respuesta3 == "Si") {
            mensaje2 = "Gracias por su tiempo!";
        } else {
            mensaje2 = "Gracias por darnos su valioso tiempo contestando esta encuesta, continuaremos mejorando todos los dias!";
        }

        emailjs.sendForm('service_5uwslus', 'template_wrc246f', '#formulario', 'NNgTi4E_wwrk8TCyJ');


        //desplegable aparecera cuando el cliente da clic al boton Enviar
        swal.fire({
            title: "Respuestas enviadas",
            text: "¡Gracias por realizar nuestra encuesta!",
            //icon: "success",
            html: "<iframe src='https://lottie.host/embed/a0db6994-9f39-4e16-b23e-88db3adcbccc/E2ySDdQUW2.json' width='440' height='380' > < /iframe>"
        })
        //resultado de la encuesta
        document.getElementById("res0").innerHTML = "¡Gracias por sus respuestas!";
        document.getElementById("res1").innerHTML = mensaje2
        document.getElementById("res2").innerHTML = mensaje3
        document.getElementById("res3").innerHTML = mensaje1
    }
}

function limpiar() {
    document.getElementById("r1").value = "";
    document.getElementById("r2").value = "";

    document.getElementById("radio1").checked = false;
    document.getElementById("radio2").checked = false;
    document.getElementById("radio3").checked = false;
    document.getElementById("radio4").checked = false;
    document.getElementById("radio5").checked = false;

    document.getElementById("grooming").checked = false;
    document.getElementById("consulta").checked = false;
    document.getElementById("vacunacion").checked = false;


            //resultado de la encuesta
    document.getElementById("res0").innerHTML = "";
    document.getElementById("res1").innerHTML = "";
    document.getElementById("res2").innerHTML = "";
    document.getElementById("res3").innerHTML = "";
}