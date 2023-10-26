"use strict";
var num = 1;

function incluir() {
    var nombreTxt = document.getElementById("nombre").value;
    var articuloTxt = document.getElementById("articulo").value;
    var cantidad = document.getElementById("cantidad").value;
    var precio = document.getElementById("precio").value;
    var iva = 0.13;
    var servicio = 0.05;

    var total = 0;
    var subtotal = 0;
    var ivaTotal = 0;
    var servicioTotal = 0;

    if (nombreTxt == "" || articuloTxt == "" || cantidad == "" || precio == "") {
        Swal.fire({
            title: 'Atención',
            icon: 'error',
            iconColor: '#3a7aa5',
            text: 'Campos vacios. Intentar de nuevo por favor.',
            imageUrl: "imagenes/alert.png",
            imageWidth: 100,
            imageHeight: 100,
            imageAlt: 'Logotipo de la empresa',
        })
    } else {
        if (precio > 0) {
            subtotal = cantidad * precio;
            ivaTotal = iva * subtotal;
            servicioTotal = subtotal * servicio;
            total = subtotal + ivaTotal + servicioTotal;
        }
        //variable que almacena la estructura de la tabla
        //td define la celda de una tabla que contiene datos
        var datosTabla = "<td>" + nombreTxt + "</td><td>" + articuloTxt + "</td><td>" + cantidad + "</td><td>" + "₡" + precio + "</td><td>" + "₡" + subtotal + "</td><td>" + "₡" + ivaTotal + "</td><td>" + "₡" + servicioTotal + "</td><td>" + "₡" + total + "</td>";
        //crea el elemento fila
        var agregar = document.createElement("tr");
        //apunta los datos de la tabla 
        agregar.innerHTML = datosTabla;
        //agrega los datos a la tabla usando appendChild (nodo)
        document.getElementById('tabla').appendChild(agregar);
        //incrementa el id de cada registro
        num++;
    };
    //limpiar los campos input
    document.getElementById("nombre").value = "";
    document.getElementById("articulo").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("precio").value = "";
};



function Numeros(string){//Solo numeros
    var out = '';
    var filtro = '1234567890';//Caracteres validos
    
    //Recorrer el texto y verificar si el caracter se encuentra en la lista de validos 
    for (var i = 0; i < string.length; i++)
       if (filtro.indexOf(string.charAt(i)) != -1) 
             //Se añaden a la salida los caracteres validos
         out += string.charAt(i);
    
    //Retornar valor filtrado
    return out;
} 


function limpiar() {
    //asigna 1 al campo numero
    num = 1;
    //recarga la pagina web
    location.reload();
    document.getElementById("nombre").value = "";
    document.getElementById("articulo").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("precio").value = "";
    //borra el contenido de la tabla
    document.getElementById("tabla").innerHTML = "";
}