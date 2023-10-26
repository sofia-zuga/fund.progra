window.onload = function() {
    document.getElementById("modelo").onchange = function(e) {
        a = e.target.value;
        if (a == "Tundra") {
            var imagen = "imagenes/tundra.png";
        } else if (a == "Hilux") {
            var imagen = "imagenes/hilux.png";
        } else if (a == "Tacoma") {
            var imagen = "imagenes/tacoma.png";
        } 
        document.getElementById("imagen").src = imagen;
    }
    document.getElementById("version").onchange = function(es) {
        n = es.target.value;
    }
}



function calcular() {
    if (document.getElementById("modelo").value == "Seleccione el carro:") {
        swal.fire({
            icon: "info",
            title: "Atención",
            html: '<p class="texto1"> Seleccione el modelo del carro.</p> '
        })
    } else {
        if (document.getElementById("version").value == "Seleccione la version:") {
            swal.fire({
                icon: "info",
                title: "Atención",
                html: '<p class="texto1"> Seleccione la versión del carro.</p> '
            })
        } else {
            var montoCuota = 0;
            if (a == "Tundra") {
                if (n == "4x2") {
                    montoCuota = 800;
                    swal.fire({
                        imageUrl: "imagenes/tundra.png",
                        html: "<p> La cuota mensual del Tundra 4x2 es<br><br> <strong>Cuota mensual:</strong></p> " + "$" + montoCuota,
                        imageWidth: 300,
                        imageHeight: 300,
                        imageAlt: "Toyota Tundra",
                    })
                } else {
                    montoCuota = 1000;
                    swal.fire({
                        imageUrl: "imagenes/tundra.png",
                        html: "<p>Mira la cuota mensual del Tundra 4x4 es<br><br> <strong>Cuota mensual:</strong></p> " + "$" + montoCuota,
                        imageWidth: 300,
                        imageHeight: 300,
                        imageAlt: "Toyota Tundra",
                    })
                }
            } else if (a == "Hilux") {
                if (n == "4x2") {
                    montoCuota = 600;
                    swal.fire({
                        html: "<p> Mira la cuota mensual del Toyota Hilux 4x2 <br><br> <strong>Cuota mensual:</strong></p> " + "$" + montoCuota,
                        imageUrl: "imagenes/hilux.png",
                        imageWidth: 400,
                        imageHeight: 300,
                        imageAlt: "Toyota Hilux",
                    })
                } else {
                    montoCuota = 1200;
                    swal.fire({
                        html: "<p>Mira la cuota mensual del Toyota Hilux 4x4 <br><br> <strong>Cuota mensual:</strong></p> " + "$" + montoCuota,
                        imageUrl: "imagenes/hilux.png",
                        imageWidth: 400,
                        imageHeight: 300,
                        imageAlt: "Toyota Hilux",
                    })
                }
            } else if (a == "Tacoma") {
                if (n == "4x2") {
                    montoCuota = 850;
                    swal.fire({
                        html: "<p> Mira la cuota mensual del Toyota Tacoma 4x2 <br><br> <strong>Cuota mensual:</strong></p> " + "$" + montoCuota,
                        imageUrl: "imagenes/tacoma.png",
                        imageWidth: 400,
                        imageHeight: 400,
                        imageAlt: "Toyota Tacoma",
                    })
                } else {
                    montoCuota = 1300;
                    swal.fire({
                        html: "<p>Mira la cuota mensual del Toyota Tacoma 4x4 <br><br> <strong>Cuota mensual:</strong></p> " + "$" + montoCuota,
                        imageUrl: "imagenes/tacoma.png",
                        imageWidth: 400,
                        imageHeight: 400,
                        imageAlt: "Toyota Tacoma",
                    })
                }
                
            }
        }
    }
}