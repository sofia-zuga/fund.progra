
document.getElementById('menuOpciones').addEventListener('change', galeria);


function galeria() {
    var opciones = document.getElementById('menuOpciones').value;
    switch (opciones) {
        case "curridabat":
            document.querySelector('.galeriaCurridabat').style.display = "block"
            document.querySelector('.galeriaZapote').style.display = "none"
            document.querySelector('.galeriaHeredia').style.display = "none"

            break;

        case "zapote":
            document.querySelector('.galeriaCurridabat').style.display = "none"
            document.querySelector('.galeriaZapote').style.display = "block"
            document.querySelector('.galeriaHeredia').style.display = "none"
            break;    

        case "heredia":
            document.querySelector('.galeriaCurridabat').style.display = "none"
            document.querySelector('.galeriaZapote').style.display = "none"
            document.querySelector('.galeriaHeredia').style.display = "block"
            break;
        

        default:
            document.querySelector('.galeriaCurridabat').style.display = "none"
            document.querySelector('.galeriaZapote').style.display = "none"
            document.querySelector('.galeriaHeredia').style.display = "none"

    }
}

