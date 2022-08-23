let muestraHora = document.getElementById("tiempo");
let muestraFecha = document.getElementById("fecha");
let saludoReloj = document.getElementById("saludo");


setInterval(function () {
    // Zona de las horas
    let tiempo = new Date();
    let hora = tiempo.getHours();
    let minutos = tiempo.getMinutes();
    let segundos = tiempo.getSeconds();

    // Zana de las fechas
    let diaSemana = tiempo.getDay();
    let dia = tiempo.getDate();
    let mes = tiempo.getMonth();
    let año = tiempo.getFullYear();

    // Incluiremos nombre de los dias y meses del año
    let semana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    // Condicionales Horas y formato
    if (hora < 10) {
        hora = "0" + hora
    } if (minutos < 10) {
        minutos = "0" + minutos
    } if (segundos < 10) {
        segundos = "0" + segundos
    }

    if (hora >= 5 && minutos >= 1 && hora < 12) {
        saludoReloj.textContent = "Que tengas buen dia!"
    }
    if (hora >= 12 && minutos >= 1 && hora < 21) {
        saludoReloj.textContent = "Que tengas buena tarde!"
    }
    if (hora > 21 && minutos >= 1 || hora < 5) {
        saludoReloj.textContent = "Que tengas buenas noches..."
    }

    // Zona para asignar valores al document
    muestraHora.innerHTML = hora +":"+ minutos+":"+segundos

    muestraFecha.textContent = semana[diaSemana] + " " + dia + " de " + meses[mes] + " del " + año;
}, 1000);

