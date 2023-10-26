
document.getElementById("btn-login").addEventListener("click", login);


/*funcion que valida el login*/
function validation_alert(ptext) {
    swal.fire({

        title: "Entrada de datos incompleta o incorrecta.",
        text: ptext,
        confirmButtonText: "Intentar de nuevo",
        confirmButtonColor: "#008383",
        html: '<iframe src="https://lottie.host/?file=efc131aa-ca87-43ce-b7f2-c9cadb43fb1e/qocP5enIe8.json"></iframe> <br><p>' + ptext + " </p>",
        
    });
}

//funcion login
function login() {
    let user_input = document.getElementById("in-txt-user").value;
    let pass_input = document.getElementById("in-txt-pass").value;
    let username = "cenfo";
    let password = "123";

    let input = [user_input, pass_input];
    let input_id = ["in-txt-user", "in-txt-pass"];
    let error_count = 0;
    let text = "";

    for (let i = 0; i < input.length; i++) {
        document.getElementById(input_id[i]).classList.remove("error");
        if (input[i] == "") {
            text = "Verifique que todos los campos esten completos correctamente.";
            validation_alert(text);
            document.getElementById(input_id[i]).classList.add("error");
            error_count++;
        }
    }

    //validacion si los campos username y password son iguales
    if (error_count == 0) {
        if (user_input == username && pass_input == password) {
            Swal.fire({

                title: "Credenciales correctas",
                showConfirmButton: false,
                //milisegundos equivalen a 5seg
                timer: 5000,
                html: '<iframe width="320" height="240" src="https://lottie.host/?file=10657e49-70ec-4395-bc34-cf76f6d35e9a/7abSgI9hsv.json"></iframe> <br><br><p>Un momento...</p>',

            }).then(() => {
                window.location.href = "https://www.ucenfotec.ac.cr", "blank";
            });
        } else {
            text = "Usuario o contraseña incorrecta.";
            //carga la funcion de arriba
            validation_alert(text);
        }
    }
}