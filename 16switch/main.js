var signo = prompt("Cual es tu signo?");
switch (signo) {
  case "acuario":
    console.log(`Tu signo es ${signo}`);
    break;
  case "leo":
  case "leon":
    console.log(`Tu signo es ${signo}`);
    break;
  case "escorpio":
    console.log(`Tu signo es ${signo}`);
    break;
  default:
    console.log("Coloca un signo adecuado");
    break;
}
//para tener dos opciones en un mismo case ver linea 6 y 7
