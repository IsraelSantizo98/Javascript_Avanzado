var persona1 = {
  nombre: "Israel",
  apellido: "Santizo",
  altura: 1.6,
  cantidadDeLibros: 20,
};
var persona2 = {
  nombre: "Jose",
  apellido: "Santos",
  altura: 1.62,
  cantidadDeLibros: 32,
};
var persona3 = {
  nombre: "Dilia",
  apellido: "Valle",
  altura: 1.7,
  cantidadDeLibros: 89,
};
var persona4 = {
  nombre: "Isabel",
  apellido: "Caceres",
  altura: 1.9,
  cantidadDeLibros: 132,
};
var personas = [persona1, persona2, persona3, persona4];
//length toma todo el tamaño del array
for (var i = 0; i < personas.length; i++) {
  //recorre todo el array
  var persona = personas[i];
  console.log(`${persona.nombre} mide ${persona.altura}mts`);
}
// console.log(personas[0]);
// console.log(personas[0].altura);
// console.log(personas[0]["nombre"]);
/* forma para contar de distintas personas contar unicamente la cantidad de libros entre todos */
var acum = 0;
for (let i = 0; i < personas.length; i++) {
  acum = acum + personas[i].cantidadDeLibros;
}
console.log(`En total todos tiene ${acum} libros`);
/*Forma moderna de realizar lo de arriba*/
const reducer = (acum, personas) => {
  return acum + personas.cantidadDeLibros;
};
var totalDeLibros = personas.reduce(reducer, 0);
console.log(`En total todos tiene ${acum} libros`);
