
function redireccionar() {
    window.location.href = "https://www.ucenfotec.ac.cr", "blank";
}


function contenido1() {
    let dato1 = document.querySelector('input[name="r"][value="dato1"]');
    let dato2 = document.querySelector('input[name="r"][value="dato2"]');
    let dato3 = document.querySelector('input[name="r"][value="dato3"]');
    let dato4 = document.querySelector('input[name="r"][value="dato4"]');
    let visa = document.getElementById("visa");

    if (dato1.checked) {
        visa.style.display = "block";
        mastercard.style.display = "none";
        amex.style.display = "none";
        paypal.style.display = "none";
        document.getElementById("output-txt").innerHTML = "Paga con tu Visa";


    }
}

function contenido2() {
    let dato1 = document.querySelector('input[name="r"][value="dato1"]');
    let dato2 = document.querySelector('input[name="r"][value="dato2"]');
    let dato3 = document.querySelector('input[name="r"][value="dato3"]');
    let dato4 = document.querySelector('input[name="r"][value="dato4"]');
    let mastercard = document.getElementById("mastercard");

    if (dato2.checked) {
        visa.style.display = "none";
        mastercard.style.display = "block";
        amex.style.display = "none";
        paypal.style.display = "none";
        document.getElementById("output-txt2").innerHTML = "Paga con tu MasterCard";


    }
}

function contenido3() {
    let dato1 = document.querySelector('input[name="r"][value="dato1"]');
    let dato2 = document.querySelector('input[name="r"][value="dato2"]');
    let dato3 = document.querySelector('input[name="r"][value="dato3"]');
    let dato4 = document.querySelector('input[name="r"][value="dato4"]');
    let amex = document.getElementById("amex");

    if (dato3.checked) {
        visa.style.display = "none";
        mastercard.style.display = "none";
        amex.style.display = "block";
        paypal.style.display = "none";
        document.getElementById("output-txt3").innerHTML = "Paga con tu AMEX";


    }
}

function contenido4() {
    let dato1 = document.querySelector('input[name="r"][value="dato1"]');
    let dato2 = document.querySelector('input[name="r"][value="dato2"]');
    let dato3 = document.querySelector('input[name="r"][value="dato3"]');
    let dato4 = document.querySelector('input[name="r"][value="dato4"]');
    let paypal = document.getElementById("paypal");

    if (dato4.checked) {
        visa.style.display = "none";
        mastercard.style.display = "none";
        amex.style.display = "none";
        paypal.style.display = "block";
        document.getElementById("output-txt4").innerHTML = "Paga con tu Paypal";


    }
}

