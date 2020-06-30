/*Este es un prototipo*/
function Persona(nombre, apellido, edad, altura) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
  this.altura = altura;
  //se puede colocar directamente el valor de una variable
  this.coloFavorito = "Rojo";
  //return this; esto es implicito no se debe de agregar
}
Persona.prototype.saludar = function () {
  console.log(
    `Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años de edad y mito ${this.altura}`
  );
};
Persona.prototype.alturaMensaje = function () {
  if (this.altura < 1.75) {
    console.log("Soy bajo");
  } else {
    console.log("Soy alto");
  }
};

var israel = new Persona("Israel", "Santizo", 21, 1.85);
var erika = new Persona("Erika", "Luna", 20, 1.7);
israel.saludar();
israel.alturaMensaje();
erika.saludar();
erika.alturaMensaje();
