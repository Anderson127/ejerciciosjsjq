/*8.  Escribir una función llamada sumame que recibe un arreglo de números y debe retornar la suma de esos números.

  Ejemplos:

  sumame([1,2,3,4]) => 10
  sumame([3]) => 3
  sumame([]) => 0
*/

var vector = [1,2,3,4];
alert("La suma de los elementos del vector [" + vector + "] es: " + sumame(vector));

function sumame(vector){
  try{
    var suma = 0;
    for (var i = 0; i < vector.length; i++) {
      suma = suma + vector[i];
    }
    return suma;
  }
  catch(err){
    alert("Hay un error y es el siguiente: " + err.message);
  }
}