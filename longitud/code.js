/*2.  Escribir una funcion longitud que encuentre la longitud de una cadena(string).

  Ejemplos:

  longitud(“”) //=> 0
  longitud(“Hola”) //=> 4
  longitud(“Hola Mundo”) //=> 10 (contando él espacio)
*/

function longitud(){
  try{
    longitud = prompt("ingrese la palabra a calcular la longitud:").length;
    document.getElementById("mensaje").innerHTML = "La longitud de la palabra es de: " + longitud;
  }
  catch(err){
    document.getElementById("mensaje").innerHTML = err.message;
  }
}
