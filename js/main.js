// Promedio de edades

// Entrada de Datos
let cantidadEdades = parseInt(prompt("Ingrese la cantidad de edades (Máximo 5)"));
let edad = 0;
let limiteEdad = 5;
let edadControl;


// Proceso de datos
// While para limitar las edades
while ((cantidadEdades > limiteEdad) || (cantidadEdades < 0)) {
    alert("Debes ingresar entre 1 y 5 edades!");
    cantidadEdades = parseInt(prompt("Ingrese la cantidad de edades (Máximo 5)"));
}

// For para agregar las distintas edades. If para limitar las edades negativas.

for (let i = 1; i <= cantidadEdades; i++) {
    edadControl = parseInt(prompt("Ingrese la edad")) 
    if (edadControl < 0) {
        alert("La edad no puede ser negativa!");
        edadControl = parseInt(prompt("Ingrese la edad"));
    }else{
        edad += edadControl;
    }
    
}
console.log(edad);

// Function para realizar la operacion del promedio

function promedio(x, y) {
    let prom = parseInt(x/y);
    return prom;
}

let resultado = promedio(edad, cantidadEdades);

if (resultado > 100) {
    alert("La edad es muy alta!");
}else{
    alert("La edad esta re piola");
}

// Salida de Datos

console.log(resultado);
alert("El promedio de las edades ingresadas es: " + resultado);









