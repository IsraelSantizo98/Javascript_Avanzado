var persona1 = {
  nombre: "Israel",
  apellido: "Santizo",
  altura: 1.6,
};
var persona2 = {
  nombre: "Jose",
  apellido: "Santos",
  altura: 1.62,
};
var persona3 = {
  nombre: "Dilia",
  apellido: "Valle",
  altura: 1.7,
};
var persona4 = {
  nombre: "Isabel",
  apellido: "Caceres",
  altura: 1.9,
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
