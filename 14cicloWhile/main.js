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
const comeMucho = () => Math.random() < 0.3;
const realizaDeporte = () => Math.random() < 0.4;
const META = israel.peso - 30;
var dias = 0;
while (israel.peso > META) {
  // debugger;
  if (comeMucho()) {
    //aumentarDePEso
    aumentarDePeso(israel);
  }
  if (realizaDeporte()) {
    //adelgazarDePeso
    adelagazarDePeso(israel);
  }
  dias += 1;
}
console.log(`Pasaron ${dias} dias hasta que  ${israel.nombre} adelgazo 30lb`);
