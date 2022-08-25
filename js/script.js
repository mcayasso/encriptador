var botonEncriptar = document.querySelector(".encriptar");
var botonDesencriptar = document.querySelector(".desencriptar");
var muneco = document.querySelector(".img_muneco");
var tituloH3 = document.querySelector(".contenedor-h3");
var ptexto = document.querySelector(".contenedor-p");
var parrafo = document.querySelector(".parrafo");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar(){
    ocultarFrente();
    var area = recuperarTexto();
    parrafo.textContent = textoEncriptado(area);
}

function desencriptar(){
    ocultarFrente();
    var area = recuperarTexto();
    parrafo.textContent = textoDesencriptado(area);
}

function recuperarTexto(){
    var area = document.querySelector(".area");
    return area.value;
}

function ocultarFrente(){
    muneco.classList.add("ocultar");
    tituloH3.classList.add("ocultar");
    ptexto.classList.add("ocultar");
}

function textoEncriptado(mensaje){
    var texto = mensaje;
    var textoFinal ="";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai";
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter";
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes";
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober";
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat";
        }
        else{
            textoFinal = textoFinal + texto[i];
        }

    }
    return textoFinal;
}

function textoDesencriptado(mensaje){
    var texto = mensaje;
    var textoFinal ="";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
           textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
           textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
           textoFinal = textoFinal + "o"
            i = i+3;
        }
        else if(texto[i] == "u"){
           textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
           textoFinal = textoFinal + texto[i];
        }

    }
    return textoFinal;
}

const button = document.querySelector(".copiar");
const input = document.querySelector(".parrafo");

button.addEventListener("click",function(){
    document.execCommand("selectAll");
    document.execCommand("copy");
})