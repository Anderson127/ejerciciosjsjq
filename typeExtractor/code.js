/*10. Escribir una función JavaScript llamada typeExtractor la cual recibe como
único argumento un arreglo con diferentes valores, la función debe retornar un objeto
literal con los valores separados por tipo.

Ejemplo:

var result = typeExtractor([ 1, 2, "hello", 3, 4, "world", true, 5, false ])

result == {
    number: [ 1, 2, 3, 4, 5 ],
    string: [ "hello", "world" ],
    boolean: [ true, false ]
}
*/

var vector = [ 1, 2, "hello", 3, 4, "world", true, 5, false];
typeExtractor(vector);

function typeExtractor(vector){
  try{
    var obj = {};
    for (var i = 0; i < vector.length; i++) {
      if (typeof vector[i] == 'number') {
        obj.numero = vector[i];
      }
      else if(typeof vector[i] == 'string'){
        obj.caracteres = vector[i];
      }
      else if(typeof vector[i] == 'boolean'){
        obj.buleanos = vector[i];
      }
      else
      {
        alert("el tipo de dato: " + vector[i] + " es diferente a number, string o boolean");
      }
    }
    console.log(obj);
  }
  catch(err){
    console.log(err.message);
  }
}