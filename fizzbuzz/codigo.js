function fizzbuzz(){
    try{
      numero = parseFloat(prompt("ingrese un número"));
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