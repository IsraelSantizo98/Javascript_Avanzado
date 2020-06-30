//Los objetos ayudan para poder reutilizar la misma variable
var israel = {
  nombre: "Israel",
  apellido: "Santizo",
  edad: 21,
};
var jose = {
  nombre: "Jose",
  apellido: "Santos",
  edad: 21,
};
function imprimirNombreEnMayuscula(persona) {
  var nombre = persona.nombre.toUpperCase();
  var apellido = persona.apellido.toUpperCase();
  console.log(nombre + " " + apellido);
}
function imprimirApellidoEnMayuscula({ nombre, apellido, edad }) {
  console.log(nombre.toUpperCase());
  console.log(nombre.toUpperCase() + " " + apellido.toUpperCase() + " " + edad);
}
imprimirNombreEnMayuscula(israel);
imprimirApellidoEnMayuscula(jose);
imprimirApellidoEnMayuscula({ nombre: "Pepito" });
