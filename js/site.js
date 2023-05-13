function iniciarListeners(){
    /* Boton Generar */
    botonGenerar = document.querySelector("#boton_generar");
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
    insercionCodigo(valor, formato);
    tamaño(tamaño);
}

function tamaño(){
    /* Modifica una class del body para ajustar el tamaño */
}

function insercionCodigo(){
    /* Revisa el Main, si existe lo borra y luego lo genera */
    main = document.querySelector(".codigoBarrasoQr")
    if (main != null) {
        /* Borrar el DIV con class codigoBarrasoQr*/
    }
    /* Insertar el DIV */
    /* Crear el div */
    /* Asignarle las clases */
    /* Inner HTML */
    /* Append child al Main */
}


//Inicia la Ejecucion
let botonGenerar;
let tamaño;
let formato;
let valor;
let main;

