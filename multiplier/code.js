/*5.  Escribir una funcion llamada multiplier que recibirá dos argumentos,
el primero será un arreglo de números y el segundo un nùmero por el cual cada
uno de los elementos del primer arreglo se multiplicará.
Ejemplo:

  multiplier([1, 2, 3], 3) == [3, 6, 9]
  multiplier([1, 2, 3], 10) == [10, 20, 30]
*/

function tamano(){
  tamano = parseInt(prompt("Cual sera el tamaño del vector de 1 a 10?"));
  if (validartamano(tamano)) {
    hacervector(tamano);
  }
  else
  {
    document.getElementById("mensaje").innerHTML = "tamaño invalido";
  }
}

function validartamano(tamano){
  if (tamano > 0 && tamano <=10)
    return true;
}

function hacervector(tamano){
  try{
    vector = [];
    for (var i = 0; i < tamano; i++) {
      vector[i] = parseFloat(prompt("Dígite el número que ira en la posición: "+ (i+1)));
    }
    multi = parseFloat(prompt("Dígite el número que multiplicara el vector"));
    multiplier(vector, multi);
  }
  catch(err)
  {
    document.getElementById("mensaje").innerHTML = err.mesagge;
  }
}

/*function multiplier(vector, multi){
  try{
    vector2 = [];
    for (i = 0; i < vector.length; i++) {
      vector2[i] = vector[i]*multi;
    }
    document.getElementById("mensaje").innerHTML = "El primer vector era: [" + vector + "]";
    document.getElementById("mensaje2").innerHTML = "Despues de multiplicar el vector por el número "+ multi +
     ", quedo de la siguiente manera: [" + vector2 + "]";
  }
  catch(err){
    document.getElementById("mensaje").innerHTML = err.mesagge;
  }
}
*/

function multiplier(vector, multi){
  try{
    vector2 = vector.map(function(num) {
    return num * multi;
    });
    document.getElementById("mensaje").innerHTML = "El primer vector era: [" + vector + "]";
    document.getElementById("mensaje2").innerHTML = "Despues de multiplicar el vector por el número "+ multi +
     ", quedo de la siguiente manera: [" + vector2 + "]";
  }
  catch(err){
    document.getElementById("mensaje").innerHTML = err.mesagge;
  }
}
