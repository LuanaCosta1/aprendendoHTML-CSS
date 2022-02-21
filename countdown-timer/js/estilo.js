var body = document.querySelector("body")
var titulo = document.querySelector('.container-title')
const dataAtual = new Date();
var horas = dataAtual.getHours();

function mudaBackground(){
    if(horas >= 7 && horas <= 18){
        body.style.backgroundImage = "url('images/MANHA.png')";
    }
    else{
        body.style.backgroundImage = "url('images/NOITE.png')";
    }
}

function horarioDia(){
    if(horas >= 0 && horas < 6){
        titulo.innerHTML = "Boa Madrugada";
    }
    if(horas >= 6 && horas < 12){
        titulo.innerHTML = "Bom Dia";
    }
    if(horas >= 12 && horas < 18){
        titulo.innerHTML = "Boa Tarde";
    }
    if(horas >= 18 && horas < 24){
        titulo.innerHTML = "Boa Noite";
    }
}

mudaBackground();
horarioDia();