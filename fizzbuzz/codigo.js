/*3.  Escribir una funcion fizzbuzz que reciba como unico argumento un numero,
la funcion debe cumplir las siguientes condiciones:

● Si él numero de entrada es multiplo de 3 debe retornar él string fizz
● Si él numero de entrada es multiplo de 5 debe retornar él string buzz
● Si él numero de entrada es multiplo tanto de 3 como de 5 debe retornar él string fizzbuzz
● Si él numero no cumple ninguna de estas condiciones debe retornar él mismo numero de entrada.
*/

function numero(){
  try{
    numero = parseFloat(prompt("ingrese un número"));
    fizzbuzz(numero);
  }
  catch(err){
    document.getElementById("mensaje").innerHTML = err.message;
  }
}

function fizzbuzz(numero){
    try{
      if(numero%3 == 0 && numero%5 == 0){
        document.getElementById("mensaje").innerHTML = "Como el número es multiplo de 3 Y 5 FIZZBUZZ";
      }
      else if(numero%3 == 0){
        document.getElementById("mensaje").innerHTML = "Como el número es multiplo de 3 FIZZ";
      }
      else if(numero%5 == 0){
        document.getElementById("mensaje").innerHTML = "Como el número es multiplo de 5 BUZZ";
      }
      else{
        document.getElementById("mensaje").innerHTML = "El número no es multiplo de 3 ni de 5,--------> " + numero;
      }
    }
    catch(err){
        document.getElementById("mensaje").innerHTML = err.message;
    }
}