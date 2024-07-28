function iniciarListeners(){
    /* Boton Generar */
    botonGenerar = document.querySelector("#button-generar");
    botonGenerar.addEventListener("click", (e)=> {
        console.log("Se preciono el boton Generar");
        capturaDeDatos()
    })
    /* Boton Pegar */
    botonPegar = document.querySelector("#button-pegar");
    botonPegar.addEventListener("click", (e)=> {
        console.log("Se preciono el boton pegar");
        leerDelPortapapeles()
    })
    /* Boton Borrar */
    botonBorrar = document.querySelector("#button-borrar");
    botonBorrar.addEventListener("click", (e)=> {
        console.log("Se preciono el boton borrar");
        limpiarValor()
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
        document.querySelector("#botonDescargar").remove();
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
        /* Borra el QR anterior */
        document.querySelector(".codigoBarrasoQr").remove();
        /* borra el boton descargar */
        document.querySelector("#botonDescargar").remove();
    }
    /* Insertar el IMG dentro del div, tambien le asigno clases y lo meto en el Main*/
    imgCod = document.createElement("div");
    imgCod.classList.add("col-10", "codigoBarrasoQr");
    imgCod.innerHTML = `<img src="https://barcode.tec-it.com/barcode.ashx?data=${valor}&code=${formato}&translate-esc=true&dpi=300&imagetype=Png" alt="barcode/QRcode" id="codigo">`;
    document.querySelector("main").appendChild(imgCod);
    console.log(`Se genero el codigo. Formato: ${formato}. Valores Generados: ${valor}`)
    /* Inserta el Boton de descarga */
    btnDescarga = document.createElement("div");
    btnDescarga.classList.add("d-grid", "gap-2");
    btnDescarga.id = "botonDescargar"
    btnDescarga.innerHTML =`<button class="btn btn-outline-success btn-sm" type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-arrow-down" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M7.646 10.854a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 9.293V5.5a.5.5 0 0 0-1 0v3.793L6.354 8.146a.5.5 0 1 0-.708.708z"/>
                                    <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383m.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/>
                                </svg>
                                Descargar
                            </button>`
    document.querySelector("#controles").appendChild(btnDescarga);
}

async function leerDelPortapapeles(){
    try{
        const textoPortapapeles = await navigator.clipboard.readText();
        console.log("Texto en Portapapeles: "+textoPortapapeles);
        document.querySelector("#valor").value = textoPortapapeles ;
    } catch (error){
        console.log(error)
    }
}

function limpiarValor(){
    valor = document.querySelector("#valor")
    if (valor) {
        valor.value="";
    }else{
        console.log("El campo valor esta vacio, no se pudo borrar")
    }
}

//Inicia la Ejecucion
let botonGenerar;
let botonPegar;
let botonBorrar;
let tamaño;
let formato;
let valor;
let imgCod;
let body;
let errorMsj;

iniciarListeners();