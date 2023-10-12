var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var pais = document.getElementById("pais");
var direccion = document.getElementById("direccion");
var usuario = document.getElementById("usuario");
var correo = document.getElementById("correo");
var contrasena = document.getElementById("contrasena");
var cf_contrasena = document.getElementById("cf_contrasena");
var radio_gustos = document.getElementById("gustos");
var color = document.getElementById("color");
var marca = document.getElementById("marca");
var tipo_coche = document.getElementById("tipo_coche");
var registrar = document.getElementById("registrar");

validacion = {
    nombre: /^[a-zA-Z\s]{1,25}$/,
    apellido: /^[a-zA-Z\s]{1,25}$/,
    direccion: /^(cll|cra|av|anv|trans)[a-zA-Z0-9\s\_\-\#]{1,25}$/,
    usuario: /^[a-zA-Z0-9\-\_]{10,20}$/,
    contrasena: /^.{15,20}$/, // 
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    celular: /^[0-9]{10,10}$/,
}

function ocultar(elementos) {
    for (i = 0; i < elementos.length; i++) {
        elementos[i].style.display = "none";
    }
}

registrar.addEventListener("click", function() {
    let alertas = document.querySelectorAll(".alerta");
    ocultar(alertas);

    var bandera = true;

    if (!validacion.nombre.test(nombre.value)) {
        if (nombre.value.length > 25) {
            alertas[0].style.display = "block";
        } else {
            alertas[1].style.display = "block";
        }
        bandera = false;
    }

    if (!validacion.apellido.test(apellido.value)) {
        if (apellido.value.length > 25) {
            alertas[2].style.display = "block";
        } else {
            alertas[3].style.display = "block";
        }
        bandera = false;
    }

    if (pais.value == "Elegir") {
        alertas[4].style.display = "block"
        bandera = false;
    }

    if (!validacion.direccion.test(direccion.value)) {
        alertas[5].style.display = "block";
        bandera = false;
    }

    if (!validacion.usuario.test(usuario.value)) {
        if (usuario.value.length > 20 || usuario.value.length < 10) {
            alertas[6].style.display = "block";
        } else {
            alertas[7].style.display = "block";
        }
        bandera = false;
    }

    if (!validacion.correo.test(correo.value)) {
        alertas[8].style.display = "block";
        bandera = false;
    }

    if (!validacion.celular.test(celular.value)) {
        alertas[9].style.display = "block";
        bandera = false;
    }

    if (!validacion.contrasena.test(contrasena.value)) {
        alertas[10].style.display = "block";
        bandera = false;
    } else if (contrasena.value != cf_contrasena.value) {
        alertas[11].style.display = "block";
        alertas[12].style.display = "block";
        bandera = false;
    }

    if (radio_gustos.checked) {

        if (color.value == "Elegir") {
            alertas[13].style.display = "block"
            bandera = false;
        }

        if (marca.value == "Elegir") {
            alertas[14].style.display = "block"
            bandera = false;
        }

        if (tipo_coche.value == "Elegir") {
            alertas[15].style.display = "block"
            bandera = false;
        }
    }

    if (bandera) {
        alert("Formulario Enviado")
    }
})