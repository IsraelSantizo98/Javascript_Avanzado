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
function imprimirNombreYEdad(persona) {
  var { nombre } = persona;
  var { apellido } = persona;
  var { edad } = persona;
  console.log(
    "Mi nombre es " +
      persona.nombre +
      " " +
      persona.apellido +
      " y tengo " +
      persona.edad +
      " años de edad"
  );
}
imprimirNombreYEdad(jose);
imprimirNombreYEdad(israel);
