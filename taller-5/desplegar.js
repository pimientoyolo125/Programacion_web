var desplegar = document.getElementById("despliegue_gustos");
var radio_gustos = document.getElementById("gustos");

var bandera = false;

radio_gustos.addEventListener("click", function(){
    if(bandera != false){
        radio_gustos.checked = !radio_gustos.checked;
        desplegar.style.display = "none";
        bandera = false;
    }else{
        bandera = true;
        desplegar.style.display = "block";
    }
})