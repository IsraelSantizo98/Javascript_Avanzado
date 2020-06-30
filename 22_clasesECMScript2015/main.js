var carrera = prompt("Ingrese carrera");
function heredaDe(prototipoHijo, prototipoPadre) {
  var fn = function () {};
  fn.prototype = prototipoPadre.prototype;
  prototipoHijo.prototype = new fn();
  //funcion constructora de la clase hija
  prototipoHijo.prototype.constructor = prototipoHijo;
}
function Persona(nombre, edad, estudio, carrera) {
  this.nombre = nombre;
  this.edad = edad;
  this.estudio = estudio;
  this.carrera = carrera;
}
function Desarrollador(nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;
}
Persona.prototype.saludo = function () {
  console.log(
    `Hola me llamo ${this.nombre} tengo ${this.edad} años de edad y estudio la carrera de ${this.estudio} y tambien ${this.carrera}`
  );
};
Persona.prototype.soyAlto = function () {
  //retorna un valor booleano
  return this.altura > 1.8;
};
heredaDe(Desarrollador, Persona);
Desarrollador.prototype.saludo = function () {
  console.log(`HOLA soy ${this.nombre}`);
};
// var israel = new Persona("Israel", 21, "Frontend", carrera);
// var israel = new Desarrollador("Israel", "Santos");
// console.log(israel.saludo());
// console.log(israel.saludoDesarrollador());
