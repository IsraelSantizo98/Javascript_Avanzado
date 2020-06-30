var israel = {
  nombre: "Israel",
  apellido: "Santizo",
  edad: 21,
  ingeniero: true,
  cocinero: false,
  cantante: false,
  dj: false,
  guitarrista: false,
  drone: true,
};
var jose = {
  nombre: "Jose",
  apellido: "Santos",
  edad: 17,
  ingeniero: true,
  cocinero: false,
  cantante: false,
  dj: false,
  guitarrista: false,
  drone: true,
};
function imprimirProfesiones(persona) {
  console.log(`${persona.nombre} es:`);
  //con este console log solo se debe de hacer si la persona es ingeniero
  if (persona.ingeniero) {
    console.log("Ingeniero");
  } else {
    console.log("No es Ingeniero");
  }
  if (persona.cocinero) {
    console.log("Cocinero");
  }
  if (persona.cantante) {
    console.log("Cantante");
  }
  if (persona.dj) {
    console.log("DJ");
  }
  if (persona.guitarrista) {
    console.log("Guitarrista");
  }
  if (persona.drone) {
    console.log("Piloto de  drone");
  }
}
const MAYORIA_DE_EDAD = 18;
function esMayorDeEdad(persona) {
  return persona.edad >= MAYORIA_DE_EDAD;
}
function imprimirSiEsMayorDeEdad(persona) {
  if (esMayorDeEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad`);
  } else {
    console.log(`${persona.nombre} es menor de edad`);
  }
}
imprimirSiEsMayorDeEdad(israel);
imprimirSiEsMayorDeEdad(jose);
