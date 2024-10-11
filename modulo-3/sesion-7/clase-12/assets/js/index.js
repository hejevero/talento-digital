//Clase pasada

//Metodos de String

// replaceAll -- replace -- trimStart -- trimEnd

//replaceAll: Remplaza todas las coincidencias

// Sintaxis: variabre.replaceAll("palabra remplazada", "nueva palabra" )

//replace: Remplaza la primera coincidencias

// Sintaxis: variabre.replace("palabra remplazada", "nueva palabra" )

//-----------------------------
// Trim() elimina los espacios.. Elimina los primeros espacios y los últimos
// trimStart().. Elimina los primeros espacios
// TrimEnd().. Elimina los últimos espacios

//Sintaxis: stringAModificar.trim()
//Sintaxis: stringAModificar.trimStart()
//Sintaxis: stringAModificar.TrimEnd()

//-----------------------------------------------------
//                   Clase de Hoy clase 12 sesion 7
//-----------------------------------------------------

// SEPARADOR NUMÉRICO: con el "_" puedo separ números, haciendolos mas facil de leer y comprender, sin que afecte el dato.
// const presupuestoAnual = 1000000000;
// const presupuestoAnualDos = 1_000_000_000;
// console.log(presupuestoAnual)
// console.log(presupuestoAnualDos)

//------------------------------------------------------
// OPERADOR DE FUSIÓN NULA

//es un operador lógico que devuelve el operando del lado derecho cuando el del lado izquierdo es nulo o indefinido y, de lo contrario, devuelve el operando del lado izquierdo.

// const nombre = null ?? "Jerson";
// console.log(nombre)
// const nombreDos = undefined ?? "Rodolfo";
// console.log(nombreDos)
// const nombreTres = "Brandon" ?? "Bernarda";
// console.log(nombreTres)

//-------------------------------------------------------------
//OPERADORES LÓGICOS DE ASIGNACIÓN

// let saludo = "Hola Buen día";
// saludo ||= "Hola buenas tardes"

// console.log(saludo)

// let alumno = {
//     nombre: "Carlos",
//     apellido: "Duran"
// }

// alumno.apellido &&= "Palape"
// console.log(alumno)

// let saludo = "Hola Buen día";
// saludo &&= "Hola buenas tardes"

// console.log(saludo)

//Operador de asignacion de fusion nula ??=

// let dimensiones = {
//     altura: 50,
//     // ancho: 10
// }
// dimensiones.ancho ??= 35
// console.log(dimensiones)

// let dimensionesDos = 58
// dimensionesDos ??= 33.7;
// console.log(dimensionesDos);

// OPERADOR DE ENCADENAMIENTO OPCIONAL

// const pacienteVeterinario = {
//     dueño: 'Ghiselle',
//     mascota: {
//     tipo: 'gato',
//     nombre: 'Chispas',
//     mostrarVacunas: () => ['rabia', 'parvovirus']
//     }
//    };

//    // Éste método si existe
//    console.log(pacienteVeterinario.mascota.mostrarVacunas?.())
//    // Éste método NO existe
//    console.log(pacienteVeterinario.mascota.registrarVacunas?.())

// ------------------------------------

// Ejercicio 1
// Consigna: Crea un objeto persona con propiedades nombre, edad, y ciudad. Usa el operador de fusión nula para asignar un valor predeterminado a ciudad si es null o undefined.

const persona1 = {
    nombre: "Emiliano",
    edad: 31,
    ciudad: null,
};

const ciudad1 = persona1.ciudad ?? "Desconocida";
console.log(ciudad1);
console.log(persona1.ciudad);

// Ejercicio 2
// Consigna: Dado un objeto configuración, usa el operador lógico de asignación para asignar valores predeterminados a las propiedades tema e idioma si no están definidos.

const configuracion = {
    tema: null,
    idioma: "Español",
};

configuracion.tema ||= "oscuro";
configuracion.idioma ||= "Ingles";
console.log(configuracion);

// Ejercicio 3
// Consigna: Usa el operador de encadenamiento opcional para acceder a la propiedad direccion de un objeto usuario, y asigna un valor predeterminado en caso de que no exista.

const usuario = {
    nombre: "Emiliano",
    direccion: null,
};

const ciudad2 = usuario.direccion?.ciudad ?? "No especificada";
console.log(ciudad2);

// Ejercicio 4
// Consigna: Crea una función que reciba un objeto producto y use el operador de fusión nula y el operador de encadenamiento opcional para devolver el precio con impuestos, usando un valor predeterminado si precio es null o undefined. (No hacerlo con destructuracion)

const calcularPrecioConImpuesto = (producto) => {
    const precio = producto?.precio ?? 0;
    const impuestos = producto?.impuestos ?? 0.1;

    return precio + precio * impuestos;
};

const producto1 = {
    precio: 100,
};

console.log(calcularPrecioConImpuesto(producto1));

// Ejercicio 5
// Consigna: Dado un objeto config, usa el operador lógico de asignación y el operador de encadenamiento opcional para asegurar que config.url y config.timeout tengan valores predeterminados.

const config = {
    url: null,
    timeout: undefined,
};

config.url ||= "www.edutecno.com";
config.timeout ||= 10000;

console.log(config);

// Ejercicio 6
// Consigna: Crea un objeto persona con un método saludar. Usa el operador de encadenamiento opcional para llamar al método saludar, y si no existe, retorna un mensaje predeterminado.

const persona2 = {
    nombre: "Rodrigo",
    saludar: null,
};

const mensaje = persona2.saludar?.() ?? "No hay saludo disponible";

console.log(mensaje);

// Ejercicio 7
// Consigna: Usa el operador de fusión nula para establecer un valor predeterminado para una propiedad descuento en un objeto producto, y luego usa el operador lógico de asignación para garantizar que no se sobreescriba si ya existe un valor

const producto2 = {
    nombre: "remera",
    descuento: null,
};

producto2.descuento = producto2.descuento ?? 0.1;

console.log(producto2.descuento);

// Ejercicio 8
// Consigna: Crea una función que reciba un objeto cliente y use el operador de encadenamiento opcional para obtener el nombre de su empresa. Si no existe, usa el operador de fusión nula para devolver "Sin empresa".

const nombreDeLaEmpresa = (cliente) => {
    return cliente.empresa?.nombre ?? "Sim empresa";
};

const cliente = {
    nombre: "Emiliano",
    empresa: null,
};

cliente.empresa = { nombre: "Edutecno" };

console.log(nombreDeLaEmpresa(cliente));
