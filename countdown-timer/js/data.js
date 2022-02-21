const diasEl = document.getElementById("dias");
const mesesEl = document.getElementById("meses");
const anosEl = document.getElementById("anos");
const horasEl = document.getElementById("horas");
const minutosEl = document.getElementById("minutos");
const segundosEl = document.getElementById("segundos");


function Data() {

    const dataAtual = new Date();

    var dias = dataAtual.getDate();
    var meses = (dataAtual.getMonth() + 1);
    var anos = dataAtual.getFullYear();
    var horas = dataAtual.getHours();
    var minutos = dataAtual.getMinutes();
    var segundos = dataAtual.getSeconds();

    if (dias < 10) {
        diasEl.innerHTML = '0' + dias;
    } else {
        diasEl.innerHTML = dias;
    }

    if (meses < 10) {
        mesesEl.innerHTML = '0' + meses;
    } else {
        mesesEl.innerHTML = meses;
    }

    if (horas < 10) {
        horasEl.innerHTML = '0' + horas;
    } else {
        horasEl.innerHTML = horas;
    }

    if (minutos < 10) {
        minutosEl.innerHTML = '0' + minutos;
    } else {
        minutosEl.innerHTML = minutos;
    }

    if (segundos < 10) {
        segundosEl.innerHTML = '0' + segundos;
    } else {
        segundosEl.innerHTML = segundos;
    }

    anosEl.innerHTML = anos;

}

Data();
setInterval(Data, 1000);