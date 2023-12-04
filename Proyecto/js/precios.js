"use strict";
var num = 1; 

function incluir() {
    var nombreTxt = document.getElementById("nombre").value;
    var consultaTxt = document.getElementById("consulta").value;
    var cantidad = document.getElementById("cantidad").value;
    var iva = 0.13;

    let precioConsultaAnual = 60000;
    let precioGrooming = 20000;
    let precioVacunas= 40000;



    var total = 0;
    var precioMascota = 0;
    var subtotal = 0;
    var ivaTotal = 0;
    let precio = 0; 

    if (nombreTxt == "" || consultaTxt == "" || cantidad == "") {
        Swal.fire({
            title: 'Atención',
            icon: 'error',
            iconColor: '#3a7aa5',
            text: 'Por favor rellenar todos los espacios',
            imageUrl: "imagenes/alert.png",
            imageWidth: 100,
            imageHeight: 100,
            imageAlt: 'Alerta',
        })
    } else {
        if (consultaTxt == "Consulta Anual" && cantidad > 0) {
            precioMascota = precioConsultaAnual;
            subtotal = cantidad * precioMascota;
            ivaTotal = iva * subtotal;
            total = subtotal + ivaTotal;

            //variable que almacena la estructura de la tabla
            //td define la celda de una tabla que contiene datos
            var datosTabla = "<td>" + nombreTxt + "</td><td>" + consultaTxt + "</td><td>" + cantidad + "</td><td>" + "₡" + precioMascota + "</td><td>" + "₡" + subtotal + "</td><td>" + "₡" + ivaTotal + "</td><td>" + "₡" + total + "</td>";
            //crea el elemento fila
            var agregar = document.createElement("tr");
            //apunta los datos de la tabla 
            agregar.innerHTML = datosTabla;
            //agrega los datos a la tabla usando appendChild (nodo)
            document.getElementById('tabla').appendChild(agregar);
            //incrementa el id de cada registro
            num++;
            document.getElementById("nombre").value = "";
            document.getElementById("consulta").value = "";
            document.getElementById("cantidad").value = "";

        } else {
            if (consultaTxt == "Grooming" && cantidad > 0) {
                precioMascota = precioGrooming;
                subtotal = cantidad * precioMascota;
                ivaTotal = iva * subtotal;
                total = subtotal + ivaTotal;
    
                //variable que almacena la estructura de la tabla
                //td define la celda de una tabla que contiene datos
                var datosTabla = "<td>" + nombreTxt + "</td><td>" + consultaTxt + "</td><td>" + cantidad + "</td><td>" + "₡" + precioMascota + "</td><td>" + "₡" + subtotal + "</td><td>" + "₡" + ivaTotal + "</td><td>" + "₡" + total + "</td>";
                //crea el elemento fila
                var agregar = document.createElement("tr");
                //apunta los datos de la tabla 
                agregar.innerHTML = datosTabla;
                //agrega los datos a la tabla usando appendChild (nodo)
                document.getElementById('tabla').appendChild(agregar);
                //incrementa el id de cada registro
                num++;

                document.getElementById("nombre").value = "";
                document.getElementById("consulta").value = "";
                document.getElementById("cantidad").value = "";

            } else {
                if (consultaTxt == "Vacunas" && cantidad > 0) {
                    precioMascota = precioVacunas;
                    subtotal = cantidad * precioMascota;
                    ivaTotal = iva * subtotal;
                    total = subtotal + ivaTotal;
        
                    //variable que almacena la estructura de la tabla
                    //td define la celda de una tabla que contiene datos
                    var datosTabla = "<td>" + nombreTxt + "</td><td>" + consultaTxt + "</td><td>" + cantidad + "</td><td>" + "₡" + precioMascota + "</td><td>" + "₡" + subtotal + "</td><td>" + "₡" + ivaTotal + "</td><td>" + "₡" + total + "</td>";
                    //crea el elemento fila
                    var agregar = document.createElement("tr");
                    //apunta los datos de la tabla 
                    agregar.innerHTML = datosTabla;
                    //agrega los datos a la tabla usando appendChild (nodo)
                    document.getElementById('tabla').appendChild(agregar);
                    //incrementa el id de cada registro
                    num++;

                    document.getElementById("nombre").value = "";
                    document.getElementById("consulta").value = "";
                    document.getElementById("cantidad").value = "";
                } 
        
            }
    
        }

    };
    //limpiar los campos input

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
    document.getElementById("consultaTxt").value = "";
    document.getElementById("cantidad").value = "";
    //borra el contenido de la tabla
    document.getElementById("tabla").innerHTML = "";
}