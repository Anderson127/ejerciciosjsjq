/*4.  Escribir una funcion llamada fibonacci que reciba un unico argumento numerico n
 y retorne él numero fibonacci que esta en la posicion n.

  La sucesion de fibonacci se calcula asi: f(n) = f(n-1) + f(n - 2) donde f(0) == 0 y f(1) == 1

  Ejemplo:

  fibonacci(0) === 0
  fibonacci(1) === 1
  fibonacci(2) === 1
  fibonacci(3) === 2
  fibonacci(4) === 3
  fibonacci(5) === 5
  fibonacci(6) === 8
  ...
  fibconacci(14) === 377
*/

function numero(){
  try{
    n = parseInt(prompt("Ingrese un número para calcular la serie fibonacci: "));
    if (n == 0){
      document.getElementById("mensaje").innerHTML = "fibonacci(0) = 0";
    }
    else if (n == 1){
    document.getElementById("mensaje").innerHTML = "fibonacci(1) = 1";
    }
    else if (n > 1){
      document.getElementById("mensaje").innerHTML = "fibonacci("+n+") = "+fibonacci(n);;
    }
    else
    {
      document.getElementById("mensaje").innerHTML="número negativo";
    }
  }
  catch(err){
    document.getElementById("mensaje").innerHTML = err.message;
  }
}

function fibonacci(n){
  try{
    var c;
    a = 0, b = 1;
    for (var i = 2; i <= n; i++) {
      c = a;
      a = b;
      b = a + c;
    }
    return b;
  }
  catch(err){
    document.getElementById("mensaje").innerHTML = err.message;
  }
}

