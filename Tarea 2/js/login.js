
document.getElementById("btn-login").addEventListener("click", login);


function validation_alert(ptext) {
    swal.fire({
        title: "Estimado usuario verifique que todos los campos requeridos esten rellenados.",
        text: ptext,
        confirmButtonText: "Intente de nuevo",
        confirmButtonColor: "#008383",
        html: '<iframe src="https://lottie.host/?file=efc131aa-ca87-43ce-b7f2-c9cadb43fb1e/qocP5enIe8.json"></iframe> <br><p>' + ptext + " </p>",
        
    });
}

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
            text = "Los campos requeridos* no pueden estar vacios.";
            validation_alert(text);
            document.getElementById(input_id[i]).classList.add("error");
            error_count++;
        }
    }

    //validacion
    if (error_count == 0) {
        if (user_input == username && pass_input == password) {
            Swal.fire({
                title: "Credenciales correctas",
                showConfirmButton: false,
                timer: 5000,
                html: '<iframe width="320" height="240" src="https://lottie.host/?file=a3cc3bfa-b0f6-4b92-afbd-7b36e921e333/9j972CyrtL.json"></iframe> <br><br><p>Un momento mientras cargamos la página...</p>',

            }).then(() => {
                window.location.href = "landing.html", "blank";
            });
        } else {
            text = "Usuario o contraseña incorrecta.";
            validation_alert(text);
            
        }
    }
}