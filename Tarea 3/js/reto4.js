
window.onload = function () {

    document.getElementById("paisaje").onchange = function(e) {
        let n = e.target.value;

        let imagen = "<img src='imagenes/reto4/" + n + ".jpg' class='img-fluid img-thumbnail rounded' alt='paisaje'/>";
        let text = ["Lugar: Lago Atlitlán. <br> Es el lago más profundo de Centro América y el tercero más grande de Guatemala.",
        "Lugar: Mercado de Chichicastenango. <br> Es un reconocido centro turístico por su mercado local. ",
        "Lugar: Semuc champey. <br> Es un enclave natural localizado en el municipio guatemalteco de Lanquín.",

    ];

    document.getElementById("output-img").innerHTML = imagen;
    document.getElementById("output-txt").innerHTML = text[n - 1];

    };
};

//funcion del boton reiniciar
document.getElementById("btn-clean").onclick = function() {

    document.getElementById("output-txt").innerHTML = "";
    document.getElementById("paisaje").value = "";
    document.getElementById("output-img").innerHTML = "";

};
