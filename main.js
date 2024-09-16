// Función para verificar si el nombre contiene números o símbolos
function nombreNumerosOSimbolos(texto) {
    return /[^a-zA-Z\s]/.test(texto);
}

// Función Inicio de Aplicación
function iniciarAplicacion() {

    let nombreIngresado = prompt("Ingrese su nombre aquí por favor:");

    while (nombreIngresado === "" || nombreIngresado === null || nombreNumerosOSimbolos(nombreIngresado)) {
        if (nombreIngresado === null) {
            alert("ERROR! Para continuar, ingrese un nombre válido sin números ni símbolos.");
        } else if (nombreIngresado === "") {
            alert("Le pedimos por favor que ingrese su nombre para continuar.");
        } else {
            alert("ERROR! El nombre no puede contener números ni símbolos.");
        }
        nombreIngresado = prompt("Ingrese su nombre nuevamente por favor:");
    }

    alert("¡Hola, " + nombreIngresado + "! ¡Bienvenido a la Aplicación de Clima!");
    console.log("Nombre ingresado:", nombreIngresado);

// Llamada a la función que muestra el catálogo de ciudades
    mostrarCatalogoCiudades();
}

// Función que muestra el "catálogo" de ciudades para ver el clima
function mostrarCatalogoCiudades() {
    let opcion;

    do {
        opcion = prompt(`Selecciona una ciudad para ver el clima:
        1. Buenos Aires
        2. Madrid
        3. Nueva York
        4. Tokio
        0. Salir`);

        opcion = parseInt(opcion);
        switch (opcion) {
            case 1:
                alert("Clima en Buenos Aires: Soleado, 25°C.");
                break;
            case 2:
                alert("Clima en Madrid: Nublado, 18°C.");
                break;
            case 3:
                alert("Clima en Nueva York: Lluvia, 12°C.");
                break;
            case 4:
                alert("Clima en Tokio: Despejado, 30°C.");
                break;
            case 0:
                alert("Gracias por usar la aplicación, ¡hasta pronto!");
                break;
            default:
                alert("Opción no válida, por favor intente nuevamente.");
        }
    } while (isNaN(opcion) || opcion < 0 || opcion > 4);

    console.log("Opción seleccionada:", opcion);
}

// Iniciar la aplicación al hacer clic en el botón
document.getElementById("startBtn").addEventListener("click", iniciarAplicacion);