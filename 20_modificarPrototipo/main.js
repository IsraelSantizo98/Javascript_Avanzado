//Cuando hay algun error en js deja de ejecutar desde la linea de codigo que encuentre el error
function Persona(nombre, apellido, edad, altura) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
  this.altura = altura;
}
//El prototipo es otro objeto
Persona.prototype.saludar = function () {
  console.log(`Hola soy ${this.nombre} y tengo ${this.edad} años de edad`);
};
Persona.prototype.soyAlto = function () {
  //retorna un valor booleano
  return this.altura > 1.8;
};
var israel = new Persona("Israel", "Santizo", 21, 1.72);
var jose = new Persona("Jose", "Santizo", 21, 1.65);
var erika = new Persona("Erika", "Santizo", 21, 1.85);
israel.saludar();
israel.soyAlto();
