var desplegar = document.getElementById("despliegue_enfermedades");
var checkbox_enfermedades = document.getElementById("enfermedades");

var bandera = false;

checkbox_enfermedades.addEventListener("click", function() {
    if (bandera != false) {
        checkbox_enfermedades.checked = !checkbox_enfermedades.checked;
        desplegar.style.display = "none";
        bandera = false;
    } else {
        bandera = true;
        desplegar.style.display = "block";
    }
})