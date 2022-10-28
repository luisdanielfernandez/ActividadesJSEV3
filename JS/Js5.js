function calcular() {
    let numero1 = parseInt(document.getElementById("num1").value);
    let numero2 = parseInt(document.getElementById("num2").value);
    let operacion = (document.getElementById("operacion").value);
    let resultado = document.getElementById("resul");
    switch (operacion) {
        case "+":
            resultado.value = (numero1+numero2);
            break;
        case "-":
            resultado.value = (numero1-numero2);
            break;
        case "*":
            resultado.value = (numero1*numero2);
            break;
        case "/":
            resultado.value = (numero1/numero2);
            break;
        default:
            resultado.value = ("Escoge bien tu opcion");
            break;
    }
}

function verImagen() {
    let num  = parseInt(document.getElementById("num3").value);
    let imagen = document.getElementById('img');

    switch (num) {
        case 1:
            imagen.src = "https://www.futboltotal.com.mx/wp-content/uploads/2022/10/tigres-uanl-rompe-racha-de-nueve-anos-disputando-finales.jpg";
            break;
        case 2:
            imagen.src = "https://www.24-horas.mx/wp-content/uploads/2022/07/Diseno-sin-titulo-2022-07-20T123332.764.jpg?w=1200";
            break;
        case 3:
            imagen.src = "https://sm.ign.com/ign_latam/news/a/avengers-e/avengers-endgame-directors-joe-and-anthony-russo-are-not-dir_n2ez.jpg";
            break;
        case 4:
            imagen.src = "https://fotografias.lasexta.com/clipping/cmsimages01/2022/03/26/AD36770F-447B-4EA3-9A3A-B357A9328D72/messi-argentina_98.jpg?crop=1200,675,x0,y0&width=1900&height=1069&optimize=low&format=webply";
            break;
        case 5:
            imagen.src = "https://www.record.com.mx/sites/default/files/styles/v2-crop768x433/public/articulos/2017/03/29/20170329092901.jpg?itok=Bs4mR7dY";
            break;
        case 6:
            imagen.src = "https://images.ole.com.ar/2021/12/04/3-AtEO3Uk_340x340__1.jpg";
            break;
        default:
            imagen.src = "https://learn.microsoft.com/es-es/windows/win32/uxguide/images/mess-error-image1.png";
            break;
    }
}

function Tabla() {
    let numero = parseInt(document.getElementById("num4").value);
    tablas_id.innerHTML = "";

    for(let i=1; i<=10;i++){
        tablas_id.innerHTML += `<ul>${numero} x ${i} = ${numero * i}</ul>`;
    }
}