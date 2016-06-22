/*6.  Escribir un ciclo que muestre una variable de 0 a 20.
Cada vez que muestre la variable debe mostrar si esta es par o impar,
por medio de un alert especificarlo. (ej: 1 es impar, 2 es par)*/

function paroimpar(){
  var numero = 0;
  try{
    if (validar(numero)) {
      ciclo(numero);
    }
    else
    {
      alert("El número debe ser entre 0 y 20");
    }
  }
  catch(err){
    alert("hay el siguienter error" + err.message);
  }
}

function validar(numero){
  if (numero >= 0 && numero <= 20) {
    return true;
  }
  else
  {
    return false;
  }
}

function ciclo(numero){
  try{
    for (var i = 0; i <= 20; i++) {
        if(numero == 0){
          alert(numero + " es un número neutro");
        }
        else if (numero%2 == 0) {
          alert(numero + " es par")
        }
        else
        {
          alert(numero + " es impar")
        }
        numero+=1;
      }
  }
  catch(err){
    alert("hay el siguienter error" + err.message);
  }
}