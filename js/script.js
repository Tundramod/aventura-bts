const audioClick =
document.getElementById("audioClick");

const audioSuccess =
document.getElementById("audioSuccess");

const audioConfetti =
document.getElementById("audioConfetti");

const musica =
document.getElementById("musica");
const respuestas = {

    fecha: "",
    hora: "",
    comida: "",
    actividad: ""

};
let progreso = 0;

const mensajes = [

    "RM está revisando el itinerario...",
    "Jin aprobó el plan...",
    "SUGA verificó la logística...",
    "J-Hope está preparando el ambiente...",
    "Jimin eligió las mejores opciones...",
    "V está supervisando los parametros...",
    "Jungkook dio el visto bueno..."
];

let indice = 0;

const barra = document.getElementById("barra");
const mensaje = document.getElementById("mensaje");
const boton = document.getElementById("btnComenzar");

const intervalo = setInterval(() => {

    progreso += 14;

    barra.style.width = progreso + "%";

    mensaje.innerText = mensajes[indice];

    indice++;

    if (indice >= mensajes.length) {

        clearInterval(intervalo);

        barra.style.width = "100%";

        mensaje.innerText =
            "Todo listo. Puedes continuar.";

        boton.style.display = "inline-block";
    }

}, 1000);
function reproducirClick(){

    if(audioClick){

        audioClick.currentTime = 0;

        audioClick.play();

    }

}
function comenzar() {

    alert("Aquí comenzará la siguiente pantalla");

}
const pantallaBienvenida =
    document.getElementById("pantallaBienvenida");

const pantallaPregunta =
    document.getElementById("pantallaPregunta");

function mostrarPregunta() {

    pantallaBienvenida.classList.add("oculta");

    pantallaPregunta.classList.remove("oculta");
}
const btnNo =
    document.getElementById("btnNo");

const btnSi =
    document.getElementById("btnSi");

const mensajeNo =
    document.getElementById("mensajeNo");

const mascota =
    document.getElementById("mascotaPregunta");

let intentosNo = 0;

const mensajesNo = [

    "Ese botón parece defectuoso 🤔",

    "Lo revisé otra vez y sigue sin funcionar 😅",

    "Esto empieza a verse sospechoso 👀",

    "Quizás deberíamos intentar el otro botón 😎",

    "El departamento de negativas cerró hoy 😂",

    "Estoy empezando a pensar que sí quieres salir 😏",

    "Si tu no quieres dile a Alika mejor eh 😆"
];

const mascotas = [

    "cooky.png",
    "rj.png",
    "chimmy.png",
    "tata.png",
    "mang.png",
    "shooky.png",
    "koya.png"
];

btnNo.addEventListener("click", () => {
 reproducirClick();
    if (intentosNo < mensajesNo.length) {

        mensajeNo.innerText =
            mensajesNo[intentosNo];

        mascota.src =
            "img/bt21/" +
            mascotas[intentosNo];

        let escala =
            1 + ((intentosNo + 1) * 0.1);

        btnSi.style.transform =
            `scale(${escala})`;

        intentosNo++;
        if(intentosNo >= mensajesNo.length){

    btnSi.style.transform =
    "scale(4)";

    btnSi.innerText =
    "😎 Sí";

}
    }

});
btnSi.addEventListener("click", () => {
 audioSuccess.play();
    pantallaPregunta.classList.add("oculta");

    document
        .getElementById("pantallaFecha")
        .classList.remove("oculta");

});
const btnFecha =
    document.getElementById("btnFecha");
const fechaInput =
    document.getElementById("fechaSeleccionada");

const mensajeFecha =
    document.getElementById("mensajeFecha");

fechaInput.addEventListener("change", () => {

    const fecha = new Date(fechaInput.value);

    const dia = fecha.getDay();

    let mensaje = "";

    switch (dia) {

        case 0:
            mensaje =
                "Excelente elección para una aventura relajada ☀️";
            break;

        case 1:
            mensaje =
                "Empezando la semana con actitud 💪";
            break;

        case 2:
            mensaje =
                "Los martes merecen algo divertido 😎";
            break;

        case 3:
            mensaje =
                "Mitad de semana, buena decisión ✨";
            break;

        case 4:
            mensaje =
                "Ya casi es fin de semana 🎉";
            break;

        case 5:
            mensaje =
                "El fin de semana está a la vuelta de la esquina 😁";
            break;

        case 6:
            mensaje =
                "Sábado detectado. Nivel de diversión aumentado 🚀";
            break;
    }

    mensajeFecha.innerText = mensaje;

});
btnFecha.addEventListener("click", () => {
 reproducirClick();
    const fecha =
        document.getElementById(
            "fechaSeleccionada"
        ).value;

    if (fecha === "") {

        alert(
            "Primero selecciona una fecha 😊"
        );

        return;
    }

    respuestas.fecha = fecha;

    console.log(respuestas);

    document
        .getElementById("pantallaFecha")
        .classList.add("oculta");

    document
        .getElementById("pantallaHora")
        .classList.remove("oculta");

});
const horaInput =
    document.getElementById("horaSeleccionada");

const mensajeHora =
    document.getElementById("mensajeHora");

horaInput.addEventListener("change", () => {

    const hora =
        parseInt(
            horaInput.value.split(":")[0]
        );

    let mensaje = "";

    if (hora >= 0 && hora < 6) {

        mensaje =
            "¿Antes del amanecer? Estaré ahí. Pareceré un fantasma, pero estaré ahí 👻";

    }
    else if (hora < 10) {

        mensaje =
            "Otra vez al señor taco? ☀️";

    }
    else if (hora < 14) {

        mensaje =
            "A mi parecer ta bien 😋";

    }
    else if (hora < 18) {

        mensaje =
            "Un poco fuera de la zona de comfort eh 😎";

    }
    else if (hora < 22) {

        mensaje =
            "Un clásico. Difícil equivocarse con esta hora ✨";

    }
    else {

        mensaje =
            "Crees que te den permiso? 🌙";
    }

    mensajeHora.innerText = mensaje;

});
const btnHora =
    document.getElementById("btnHora");

btnHora.addEventListener("click", () => {
    reproducirClick();
    const hora =
        document.getElementById(
            "horaSeleccionada"
        ).value;

    if (hora === "") {

        alert(
            "Selecciona una hora primero 😊"
        );

        return;
    }

    respuestas.hora = hora;

    console.log(respuestas);

    document
        .getElementById("pantallaHora")
        .classList.add("oculta");

    document
        .getElementById("pantallaActividad")
        .classList.remove("oculta");

});
const tarjetasActividad =
    document.querySelectorAll(".actividad");

const mensajeActividad =
    document.getElementById("mensajeActividad");

let actividadSeleccionada = "";

tarjetasActividad.forEach(tarjeta => {

    tarjeta.addEventListener("click", () => {
 reproducirClick();
        tarjetasActividad.forEach(t =>
            t.classList.remove("seleccionada")
        );

        tarjeta.classList.add("seleccionada");

        actividadSeleccionada =
            tarjeta.dataset.actividad;

        respuestas.actividad =
            actividadSeleccionada;

        switch (actividadSeleccionada) {

            case "Cine":

                mensajeActividad.innerText =
                    "Prometo no llorar 🍿";
                break;

            case "Paseo":

                mensajeActividad.innerText =
                    "Ca cao siempre listo para un viaje 🏍️";
                break;

            case "Frappe":

                mensajeActividad.innerText =
                    "Buena conversación y algo rico para tomar, difícil fallar 😌";
                break;

            case "Fotos":

                mensajeActividad.innerText =
                    "Advertencia: No soy fotografo jaja📸";
                break;

            case "Caminar":

                mensajeActividad.innerText =
                    "Bueno para la salud xd ✨";
                break;
        }

    });

});
const btnActividad =
    document.getElementById("btnActividad");

btnActividad.addEventListener("click", () => {
 reproducirClick();
    if (actividadSeleccionada === "") {

        alert(
            "Selecciona una actividad primero 😊"
        );

        return;
    }

    console.log(respuestas);

    document
        .getElementById("pantallaActividad")
        .classList.add("oculta");

    document
        .getElementById("pantallaComida")
        .classList.remove("oculta");

});
const tarjetasComida =
    document.querySelectorAll(".comida");

const mensajeComida =
    document.getElementById("mensajeComida");

let comidaSeleccionada = "";

tarjetasComida.forEach(tarjeta => {

    tarjeta.addEventListener("click", () => {
 reproducirClick();
        tarjetasComida.forEach(t =>
            t.classList.remove("seleccionada")
        );

        tarjeta.classList.add("seleccionada");

        comidaSeleccionada =
            tarjeta.dataset.comida;

        respuestas.comida =
            comidaSeleccionada;

        switch (comidaSeleccionada) {

            case "Pizza":

                mensajeComida.innerText =
                    "Pizza, la mejor opcion despues de la hamburgesa 🍕";
                break;

            case "Tacos":

                mensajeComida.innerText =
                    "Esto ya comimos en tu cumple 🌮";
                break;

            case "Hamburguesa":

                mensajeComida.innerText =
                    "Perfección, Clásica, efectiva y deliciosa 🍔";
                break;

            case "Sushi":

                mensajeComida.innerText =
                    "No es mi favorito, pero puedo hacer una excepción 🍣";
                break;

            case "Frappe":

                mensajeComida.innerText =
                    "A ver si no nos vuelven a echar jaja 🥤";
                break;
        }

    });

});
const btnComida =
    document.getElementById("btnComida");

btnComida.addEventListener("click", () => {
 reproducirClick();
    if (comidaSeleccionada === "") {

        alert(
            "Selecciona una comida primero xd"
        );

        return;
    }

    document
        .getElementById("pantallaComida")
        .classList.add("oculta");

    document
        .getElementById("pantallaResumen")
        .classList.remove("oculta");

    document
        .getElementById("resumenFinal")
        .innerHTML = `

            <p><strong>📅 Día:</strong> ${respuestas.fecha}</p>

            <br>

            <p><strong>🕒 Hora:</strong> ${respuestas.hora}</p>

            <br>

            <p><strong>🎯 Actividad:</strong> ${respuestas.actividad}</p>

            <br>

            <p><strong>🍴 Comida:</strong> ${respuestas.comida}</p>

            <br><br>

            <h2>
                Nivel estimado de diversión: 99%
            </h2>

        `;
});
const btnConfirmar =
    document.getElementById("btnConfirmar");

console.log(btnConfirmar);

btnConfirmar.addEventListener("click", () => {
    reproducirClick();


    document
        .getElementById("pantallaResumen")
        .classList.add("oculta");

    document
        .getElementById("pantallaFinal")
        .classList.remove("oculta");

    mostrarResultadoFinal();

});
function mostrarResultadoFinal() {

    const mensaje =
        document.getElementById("mensajeFinal");

    const resultado =
        document.getElementById("resultadoFinal");

    setTimeout(() => {

        mensaje.innerText =
            "Los BTSianos han revisado tus respuestas.";

    }, 1000);

    setTimeout(() => {

        resultado.innerHTML = `

    <h2>
        🎉 Plan aprobado
        
    </h2>

    <br>

    <div class="resumen-final">

        <p>
            📅 <strong>Fecha:</strong><br>
            ${formatearFecha(respuestas.fecha)}
        </p>

        <br>

        <p>
            🕒 <strong>Hora:</strong><br>
            ${formatearHora(respuestas.hora)}
        </p>

        <br>

        <p>
            🎯 <strong>Actividad:</strong><br>
            ${respuestas.actividad}
        </p>

        <br>

        <p>
            🍴 <strong>Comida:</strong><br>
            ${respuestas.comida}
        </p>

    </div>

    <br>

    <div class="tarjeta-final">

        <h3>
            📋 Veredicto oficial
        </h3>

        <br>

        <p>
            ✅ El plan fue aprobado por unanimidad.
        </p>

        <br>

        <p>
            ⭐ Nivel estimado de diversión: 99%
        </p>

        <br>

    </div>

`;
confetti({

    particleCount: 120,

    spread: 100,

    origin: { y: 0.6 }

});

audioSuccess.play();

    }, 1800);

}
function formatearFecha(fechaISO) {

    const fecha = new Date(fechaISO + "T00:00:00");

    const opciones = {

        day: "numeric",
        month: "long",
        year: "numeric"

    };

    return fecha.toLocaleDateString(
        "es-MX",
        opciones
    );
}

function formatearHora(hora24) {

    let [hora, minuto] =
        hora24.split(":");

    hora = parseInt(hora);

    let periodo =
        hora >= 12 ? "PM" : "AM";

    hora =
        hora % 12;

    if (hora === 0) {

        hora = 12;
    }

    return `${hora}:${minuto} ${periodo}`;
}
const btnWhatsapp =
    document.getElementById("btnWhatsapp");

btnWhatsapp.addEventListener("click", () => {
 reproducirClick();
    const mensaje =

        `🎉 Plan completo 🎉

📅 Fecha elegida:
${formatearFecha(respuestas.fecha)}

🕒 Hora elegida:
${formatearHora(respuestas.hora)}

🎯 Actividad seleccionada:
${respuestas.actividad}

🍴 Recompensa culinaria:
${respuestas.comida}

📋 Veredicto final:

✅ El plan fue aprobado.

⭐ Nivel estimado de diversión: 99%

💜Gracias por completar la encuesta BTSiana.`;

    const telefono =
        "527341027980";

    const url =
        `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");

});
function cambiarPantalla(actual,nueva){

    actual.classList.add("oculta");

    nueva.classList.remove("oculta");
}
const btnMusica =
document.getElementById("btnMusica");

musica.volume = 0.25;

btnMusica.addEventListener("click",()=>{

    musica.play();

});
