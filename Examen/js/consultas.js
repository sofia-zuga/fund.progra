
document.getElementById('vetOpciones').addEventListener('change', seleccion1);
 

function seleccion1() {
    var opciones = document.getElementById('vetOpciones').value;
    switch (opciones) {
        case "anual":
            document.querySelector('.galeriaConsulta').style.display = "block"
            document.querySelector('.galeriaGripe').style.display = "none"
            document.querySelector('.galeriaEnfermedad').style.display = "none"
            document.querySelector('.galeriaDental').style.display = "none"
            break;

        case "gripe":
            document.querySelector('.galeriaConsulta').style.display = "none"
            document.querySelector('.galeriaGripe').style.display = "block"
            document.querySelector('.galeriaEnfermedad').style.display = "none"
            document.querySelector('.galeriaDental').style.display = "none"
            break;    

        case "enfermedad":
            document.querySelector('.galeriaConsulta').style.display = "none"
            document.querySelector('.galeriaGripe').style.display = "none"
            document.querySelector('.galeriaEnfermedad').style.display = "block"
            document.querySelector('.galeriaDental').style.display = "none"
            break;
        
        case "dental":
            document.querySelector('.galeriaConsulta').style.display = "none"
            document.querySelector('.galeriaGripe').style.display = "none"
            document.querySelector('.galeriaEnfermedad').style.display = "none"
            document.querySelector('.galeriaDental').style.display = "block"
            break;    
        
        default:
            document.querySelector('.galeriaConsulta').style.display = "none"
            document.querySelector('.galeriaGripe').style.display = "none"
            document.querySelector('.galeriaEnfermedad').style.display = "none"
            document.querySelector('.galeriaDental').style.display = "none"

    }
}


//combo doble
window.onload = function() {
    document.getElementById("cantidad").onchange = function(e) {
        a = e.target.value;
        if (a == "1") {
            var imagen = "imagenes/dog1.jpg";
        } else if (a == "2-3") {
            var imagen = "imagenes/dog2.jpg";
        } else if (a == "4-5") {
            var imagen = "imagenes/dog3.jpg";
        } else if (a == "+5") {
            var imagen = "imagenes/dog4.jpg";
        } 
        document.getElementById("imagen").src = imagen;
    }
    document.getElementById("vacunas").onchange = function(es) {
        n = es.target.value;
    }
}



function calcular() {
    if (document.getElementById("cantidad").value == "Seleccione la cantidad de mascotas:") {
        swal.fire({
            icon: "info",
            title: "Atención",
            html: '<p class="texto1"> Seleccione la cantidad de mascotas:</p> '
        })
    } else {
        if (document.getElementById("vacunas").value == "Seleccione si ocupa sus vacunas anuales:") {
            swal.fire({
                icon: "info",
                title: "Atención",
                html: '<p class="texto1"> Seleccione si ocupa sus vacunas anuales</p> '
            })
        } else {
            var montoCuota = 0;
            if (a == "1") {
                if (n == "Si") {
                    montoCuota = 40000;
                    swal.fire({
                        imageUrl: "imagenes/guato.png",
                        html: "<p> La consulta tendria un costo de: </strong></p> " + "$" + montoCuota,
                        imageWidth: 300,
                        imageHeight: 300,
                    })
                } else {
                    montoCuota = 30000;
                    swal.fire({
                        imageUrl: "imagenes/guato.png",
                        html: "<p>La consulta tendria un costo de: </strong></p> " + "$" + montoCuota,
                        imageWidth: 300,
                        imageHeight: 300,
                    })
                }
            } else if (a == "2-3") {
                if (n == "Si") {
                    montoCuota = 50000;
                    swal.fire({
                        html: "<p> La consulta tendria un costo de: </strong></p> " + "$" + montoCuota,
                        imageUrl: "imagenes/guato.png",
                        imageWidth: 400,
                        imageHeight: 300,
                    })
                } else {
                    montoCuota = 40000;
                    swal.fire({
                        html: "<p> La consulta tendria un costo de: </strong></p> " + "$" + montoCuota,
                        imageUrl: "imagenes/guato.png",
                        imageWidth: 400,
                        imageHeight: 300,
                    })
                }
            } else if (a == "4-5") {
                if (n == "Si") {
                    montoCuota = 70000;
                    swal.fire({
                        html: "<p> La consulta tendria un costo de: </strong></p> " + "$" + montoCuota,
                        imageUrl: "imagenes/guato.png",
                        imageWidth: 400,
                        imageHeight: 400,
                    })
                } else {
                    montoCuota = 55000;
                    swal.fire({
                        html: "<p> La consulta tendria un costo de: </strong></p> " + "$" + montoCuota,
                        imageUrl: "imagenes/guato.png",
                        imageWidth: 400,
                        imageHeight: 400,
                    })
                } 
                
            } else if (a == "+5") {
                if (n == "Si") {
                    montoCuota = 80000;
                    swal.fire({
                        html: "<p> La consulta tendria un costo de: </strong></p> " + "$" + montoCuota,
                        imageUrl: "imagenes/guato.png",
                        imageWidth: 400,
                        imageHeight: 400,
                    })
                } else {
                    montoCuota = 75000;
                    swal.fire({
                        html: "<p> La consulta tendria un costo de: </strong></p> " + "$" + montoCuota,
                        imageUrl: "imagenes/guato.png",
                        imageWidth: 400,
                        imageHeight: 400,
                    })
                } 
                
            }
        }
    }
}

