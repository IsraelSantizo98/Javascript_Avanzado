var x = 4,
  y = "4";
x == y;
x === y;

var israel = {
  nombre: "Israel",
  apellido: "Santizo",
  edad: 21,
};
var jose = {
  nombre: "Israel",
  apellido: "Santizo",
  edad: 21,
};
//si se cambia el valor desde la variable jose igualada a israel y se cambia los datos afectara la variable jose
var jose = israel;
