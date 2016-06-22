/*1.  Escribir una funcion suma que sume dos numeros y retorne él resultado.

  Ejemplos:

  suma(1, 2) //=> 3
  suma(0, 0) //=> 0
  suma(145, 674) //=> 819
*/

function insertar(){
  try{
    numero1 = parseFloat(prompt("ingrese el primer número a sumar"));
    numero2 = parseFloat(prompt("ingrese el segundo número a sumar"));
    document.getElementById("mensaje").innerHTML = "RESULTADO: " + numero1 + "+" + numero2 + " = " + suma(numero1, numero2);
  }
  catch(err){
    document.getElementById("mensaje").innerHTML = err.message;
  }
}

function suma(numero1, numero2){
  try{
    var suma = numero1 + numero2;
    return suma;
  }
  catch(err){
    document.getElementById("mensaje").innerHTML = err.message;
  }
}