//Varibale global
var nombre = "Israel";
function imprimirNombreEnMayusculas(nombre) {
  nombre = nombre.toLocaleUpperCase();
  console.log(nombre);
}
//Se llma a la funcion de no llamarse no se ejecuta, la parte de arriba solo crea la funcion pero no la ejectura
imprimirNombreEnMayusculas(nombre);
