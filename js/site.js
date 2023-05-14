function iniciarListeners(){
    /* Boton Generar */
    botonGenerar = document.querySelector("#button-addon2");
    botonGenerar.addEventListener("click", (e)=> {
        console.log("Se preciono el boton Generar");
        capturaDeDatos()
    })
}

function capturaDeDatos(){
    /* Captura del tamaño seleccionado */
    tamaño = document.querySelector("#selectorTamaño").value;
    /* Captura del formato seleccionado */
    formato = document.querySelector("#selectorFormato").value;
    /* Captura del valor seleccionado */
    valor = document.querySelector("#valor").value;
    if (valor) {
        tamañoBody(tamaño);
        insercionCodigo(valor, formato);
    }else{
        document.querySelector(".codigoBarrasoQr").remove();
        console.log("El campo valor esta vacio, no se pudo generar el QR")
    }
}

function tamañoBody(tamaño){
    /* Modifica una class del body para ajustar el tamaño */
    body = document.querySelector("body").classList;
    body.remove("tamaño-grande");
    body.remove("tamaño-mediano");
    body.remove("tamaño-pequeño");
    body.add(tamaño);
}

function insercionCodigo(valor, formato){
    /* Revisa el Main, si existe lo borra y luego lo genera */
    imgCod = document.querySelector(".codigoBarrasoQr")
    if (imgCod != null) {
        document.querySelector(".codigoBarrasoQr").remove();
    }
    /* Insertar el IMG dentro del div, tambien le asigno clases y lo meto en el Main*/
    imgCod = document.createElement("div");
    imgCod.classList.add("col-10", "codigoBarrasoQr");
    imgCod.innerHTML = `<img src="https://barcode.tec-it.com/barcode.ashx?data=${valor}&code=${formato}&translate-esc=true&dpi=300&imagetype=Png" alt="barcode/QRcode" id="codigo">`;
    document.querySelector("main").appendChild(imgCod);
    console.log(`Se genero el codigo. Formato: ${formato}. Valores Generados: ${valor}`)
}


//Inicia la Ejecucion
let botonGenerar;
let tamaño;
let formato;
let valor;
let imgCod;
let body;
let errorMsj;

iniciarListeners();