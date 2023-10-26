function buscar() {

    var cedula = document.getElementById('cedula').value;
    var resultado = document.getElementById('resultado');
    // var persona1 = document.getElementById('ima1');
    // var persona2 = document.getElementById('ima2');
    // var persona3 = document.getElementById('ima3');

    var cedula1 = 111111111;
    var cedula2 = 222222222;
    var cedula3 = 999999999;

    //isNaN(numero).  Comprueba que el valor número que se ha convertido previamente es un número y no letra
    if (isNaN(parseInt(cedula))) {
        //invoca un desplegable JS
        Swal.fire({
            icon: 'error',
            title: 'Atención usuario',
            text: 'El campo esta vacío.'
        });
        return false;
    } else
    //validacion campo vacio cedula     
    if (cedula == "" || cedula < 0) {
        Swal.fire({
            title: 'Atención usuario!',
            text: 'Digite una cedula válida',
            icon: 'info',
            timer: 3000,
            onOpen: function() {
                swal.showLoading()
            }
        }).then(
            function() {},
            function(dismiss) {
                if (dismiss === 'timer') {
                    console.log('Desplegable cerrada')
                }
            }
        )
    } else {
        if (cedula == 0) {
            document.getElementById('cedula').value = "";
            limpiar();
        }
        if (cedula == cedula1) {
            resultado.innerHTML = 'Persona existe';
            document.getElementById("ima1").style.display = 'block';
            document.getElementById("ima0").style.display = 'none';
            document.getElementById("ima2").style.display = 'none';
            document.getElementById("ima3").style.display = 'none';


        } else {
            if (cedula == cedula2) {
                resultado.innerHTML = 'Persona existe';
                document.getElementById("ima1").style.display = 'none';
                document.getElementById("ima0").style.display = 'none';
                document.getElementById("ima2").style.display = 'block';
                document.getElementById("ima3").style.display = 'none';
                document.getElementById('cedula').value = "";
            } else {
                if (cedula == cedula3) {
                    resultado.innerHTML = 'Persona existe';
                    document.getElementById("ima1").style.display = 'none';
                    document.getElementById("ima0").style.display = 'none';
                    document.getElementById("ima2").style.display = 'none';
                    document.getElementById("ima3").style.display = 'block';
                    document.getElementById('cedula').value = "";


                } else {
                    if (cedula != cedula1 || cedula != cedula2 || cedula != cedula3) {
                        resultado.innerHTML = 'Persona NO existe';
                        document.getElementById("ima1").style.display = 'none';
                        document.getElementById("ima0").style.display = 'none';
                        document.getElementById("ima2").style.display = 'none';
                        document.getElementById("ima3").style.display = 'none';
                        document.getElementById('cedula').value = "";

                    }  
                        
                    
                }
            }
        }
    }
}

function limpiar() {
    document.getElementById('cedula').value = "";
    resultado.innerHTML = '';
    document.getElementById("ima1").style.display = 'none';
    document.getElementById("ima0").style.display = 'none';
    document.getElementById("ima2").style.display = 'none';
    document.getElementById("ima3").style.display = 'none';
    document.getElementById('cedula').value = "";
}