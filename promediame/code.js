/*9.  Escribir una función promediame que recibe un arreglo de números como argumento y retorna el promedio.

  Nota:
El promedio se define como la suma de los elementos dividido en el número
  de elementos.

  Ejemplos:

  promediame([]) // => 0
  promediame([1]) // => 1
  promediame([1,2,3,4]) => 2.5

*/

var vector = [1,2,3,4];
alert("El promedio de los elementos del vector [" + vector + "] es: " + promediame(vector));

function promediame(vector){
  try{
    var promedio;
    var suma = 0;
    for (var i = 0; i < vector.length; i++) {
      suma = suma + vector[i];
    }
    promedio = suma / vector.length;
    return promedio;
  }
  catch(err){
    alert("Hay un error y es el siguiente: " + err.message);
  }
}