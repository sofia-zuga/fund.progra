
window.onload = function () {

    document.getElementById("ubicacion").onchange = function(e) {
        let n = e.target.value;

        let imagen = "<img src='imagenes/ubicacion/" + n + ".jpg' class='img-fluid img-thumbnail rounded' alt='ubicacion'/>";
        let text = ["Lugar: City Mall Alajuela. <br>",
        "Lugar: Ciudad del Este. <br>",
        "Lugar: Multiplaza Escazu. <br>",

    ];

    document.getElementById("output-img").innerHTML = imagen;
    document.getElementById("output-txt").innerHTML = text[n - 1];

    };
};

//funcion del boton reiniciar
document.getElementById("btn-clean").onclick = function() {

    document.getElementById("output-txt").innerHTML = "";
    document.getElementById("ubicacion").value = "";
    document.getElementById("output-img").innerHTML = "";

};


//lightbox


function ejecutar(div, video_id) {
    var video = document.getElementById(video_id).src;
    document.getElementById(video_id).src = video + '&autoplay=1';
    document.getElementById(div).style.display = 'block';
}



// Ocultar la caja y eliminar la reproducción automática de YouTube
function ocultar(div, video_id) {
    var video = document.getElementById(video_id).src;
    //remover el autoplay URL
    var cleaned = video.replace('&autoplay=1', '');
    document.getElementById(video_id).src = cleaned;
    document.getElementById(div).style.display = 'none';
}


//lightbox fotografico
//obtener el modal
var modal = document.getElementById("modal1");

//obtener la imagen y agregarla dentro del modal - 
//Usar el texto alternativo "alt" como subtítulo

//imagen
var img = document.getElementById("myImg");
//contenido
var modalImg = document.getElementById("img01");
//titulo 
var captionText = document.getElementById("caption"); 


//al dar clic a la foto en pequeño 
img.onclick = function() {
    //desplegar la foto
    modal.style.display = "block";
    //apunta el contenido del modal
    modalImg.src = this.src;
    //asigna el ALT debabo de la imagen
    captionText.innerHTML = this.alt;
}

//obtenga el elemento <span> que cierra el modal

//pregunta: ese [0] a que se refiere? es como una lista?
var cerrar = document.getElementsByClassName("close")[0];

//cuando el usuario hace clic en <span> (x), cierre el modal
cerrar.onclick = function() {
    modal.style.display = "none";
}

//tabs

//recibe el controlador de eventos y el ID de cada contenido
function opciones(evt, info) {
  
    //*declaracion de variables
    //i controla el for
    //tabcontent controla el contenido de los TABS
    //tablinks controla los enlaces de los TABS
    var i, tabcontent, tablinks;
  
    // Obtener todos los elementos con class = "tabcontent" y ocúltelos
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Apunta a todos los elementos con class = "tablinks" y elimine la clase "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Apunta a todos los elementos con class = "tablinks" y elimine la clase "active". 
    //Muestre la pestaña actual y agregue una clase "activa" al botón que abrió la pestaña.
    document.getElementById(info).style.display = "block";
    evt.currentTarget.className += " active";
  }