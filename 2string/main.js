var nombre = "Israel",
  apellido = "Santizo";
var nombreEnMayusculas = nombre.toUpperCase();
var apellidoEnMinuscula = apellido.toLowerCase();
var primeraLetraDelNombre = nombre.charAt(0);
var cantidadDeLetrasDelNombre = nombre.length;
var nombreCompleto = nombre + " " + apellido;
var nombreCompleto2 = `${nombre} ${apellido.toLocaleUpperCase()}`;
var str = nombre.charAt(1) + nombre.charAt(2);
var str2 = nombre.substr(1, 2);
console.log(nombre);
console.log("Mi nombre en mayusculas es  " + nombreEnMayusculas);
console.log(apellido);
console.log("Mi apellido en minuscula es " + apellidoEnMinuscula);
console.log(primeraLetraDelNombre);
console.log(cantidadDeLetrasDelNombre);
console.log(nombreCompleto);
console.log(nombreCompleto2);
console.log(str);
//si queremos ver la cantidad de letras de otro nombre debemos actualiar el nombre y declara nuevamente la variable cantidadDeLetrasDeNombre
nombre = "Dilia";
cantidadDeLetrasDelNombre = nombre.length;
