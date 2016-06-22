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

var vector = [ 1, 2, "hello", 3, 4, "world", true, 5, false ]
typeExtractor(vector);

function typeExtractor(vector){
  try{
    var objeto = {};
    for (var i = 0; i < vector.length; i++) {
      if (typeof vector[i] === 'number') {
        Object.defineProperty(objeto, 'numeros', {value: vector[i], writable:true, enumerable:true, configurable:true});
      }
      else if(typeof vector[i] === 'string'){
        Object.defineProperty(objeto, 'caracteres', {value: vector[i], writable:true, enumerable:true, configurable:true});
      }
      else if(typeof vector[i] === 'boolean'){
        Object.defineProperty(objeto, 'booleanos', {value: vector[i], writable:true, enumerable:true, configurable:true});
      }
      else
      {
        console.log("el tipo de dato es diferente a number, string, boolean");
      }
    }
    console.log(objeto);
  }
  catch(err){
    console.log(err.message);
  }
}