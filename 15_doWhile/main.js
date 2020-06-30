var contador = 0;
var israel = {
  nombre: "Israel",
};
const llueve = () => Math.random() < 0.25;
do {
  console.log("Ve a ver si llueve");
  contador++;
} while (!llueve());
{
  if (contador >= 2) {
    console.log(`${israel.nombre} fue a ver si llovia ${contador} veces`);
  } else {
    console.log(`${israel.nombre} fue a ver si llovia ${contador} vez`);
  }
}
