var israelMasViejo;
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
// imprimirNombreYEdad(jose);
// imprimirNombreYEdad(israel);
//Modificando el obejto actual
function cumpleanosModificadonObjeto(persona) {
  persona.edad += 1;
}
//Se retorna otro objeto para evitar que modifique mi objeto actual
function cumpleanosSinModificarObjeto(persona) {
  return {
    ...persona,
    edad: persona.edad + 1,
  };
}
israelMasViejo = cumpleanosSinModificarObjeto(israel);
// cumpleanosModificadonObjeto(israel);
console.log(israel);
console.log(israelMasViejo);
