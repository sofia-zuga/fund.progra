

//declaracion de constantes usando el metodo querySelector

//permite guardar el enlace el selecto <a> del html
const link = document.querySelectorAll('a');


const langEl = document.querySelector('.langWrap');
const inicio = document.querySelector('.inicio');
const servicios = document.querySelector('.servicios');
const grooming = document.querySelector('.grooming');
const consultas = document.querySelector('.consultas');
const nosotros = document.querySelector('.nosotros');
const equipo = document.querySelector('.equipo');
const contacto = document.querySelector('.contacto');
const encuesta = document.querySelector('.encuesta');
const titulo = document.querySelector('.titulo');
const subscripcion = document.querySelector('.subscripcion');
const email = document.querySelector('.email');
const boton1 = document.querySelector('.boton1');
const cantPacientes = document.querySelector('.cantPacientes');
const pacientes = document.querySelector('.pacientes');
const title2 = document.querySelector('.title2');
const derechos = document.querySelector('.derechos');


link.forEach(r => {
    r.addEventListener('click', () => {
        const attr = r.getAttribute('language');
     
        inicio.textContent = changeLanguage[attr].inicio;
        servicios.textContent = changeLanguage[attr].servicios;
        grooming.textContent = changeLanguage[attr].grooming;
        consultas.textContent = changeLanguage[attr].consultas;
        nosotros.textContent = changeLanguage[attr].nosotros;
        equipo.textContent = changeLanguage[attr].equipo;
        contacto.textContent = changeLanguage[attr].contacto;
        encuesta.textContent = changeLanguage[attr].encuesta;
        titulo.textContent = changeLanguage[attr].titulo;
        subscripcion.textContent = changeLanguage[attr].subscripcion;
        email.textContent = changeLanguage[attr].email;
        boton1.textContent = changeLanguage[attr].boton1;
        cantPacientes.textContent = changeLanguage[attr].cantPacientes;
        pacientes.textContent = changeLanguage[attr].pacientes;
        title2.textContent = changeLanguage[attr].title2;
        derechos.textContent = changeLanguage[attr].derechos;

    });
});


//objeto de json que asigna los valores a cada clase en español usando el atributo "espanish"
let changeLanguage = {

    "spanish":
    {
        "inicio": "Inicio",
        "servicios": "Servicios",
        "grooming": "Grooming",
        "consultas": "Consultas",
        "nosotros": "Nosotros",
        "equipo": "Equipo",
        "contacto": "Contacto",
        "encuesta": "Encuesta",
        "titulo": "¡CONOCÉ A LAS MASCOTAS DE LA VETERINARIA!",
        "subscripcion": "Suscríbete para más informacion y ofertas",
        "email": "Correo",
        "boton1": "Enviar",
        "cantPacientes": "¡Cantidad de pacientes!",
        "pacientes": "Pacientes",
        "title2": "Síguenos en nuestras redes sociales",
        "derechos": "Derechos Reservados a Veterinaria El Guato",
        
    },

  //objeto de json que asigna los valores a cada clase en ingles usando el atributo "english"
    "english":
    {
        "inicio": "Homepage",
        "servicios": "Services",
        "grooming": "Grooming",
        "consultas": "Consult",
        "nosotros": "Us",
        "equipo": "Team",
        "contacto": "Contact",
        "encuesta": "Survey",
        "titulo": "¡GET TO KNOW OUR MASCOSTS!",
        "subscripcion": "Suscribe for more information and offers",
        "email": "Email",
        "boton1": "Send",
        "cantPacientes": "¡Our pacients!",
        "pacientes": "Pacients",
        "title2": "Follow us on social media",
        "derechos": "All rights reserved for Veterinaria El Guato",
    }
}