var israel = {
  nombre: "Israel",
  apellido: "Santizo",
  edad: 21,
  peso: 130,
};
console.log(`Al inicio del año ${israel.nombre} pesa ${israel.peso}lb`);
const INCREMENTO_PESO = 20;
const DIAS_DEL_ANIO = 365;
const aumentarDePeso = (persona) => (persona.peso += INCREMENTO_PESO);
const adelagazarDePeso = (persona) => (persona.peso -= INCREMENTO_PESO);
for (var i = 1; i <= DIAS_DEL_ANIO; i++) {
  var random = Math.random();
  if (random < 0.25) {
    //aumenta de peso
    aumentarDePeso(israel);
  } else if (random < 0.5) {
    //Adelgaza de peso
    adelagazarDePeso(israel);
  }
}
console.log(
  `Al final del año ${israel.nombre} pesa ${israel.peso.toFixed(1)}lb`
);
