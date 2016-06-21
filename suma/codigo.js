function suma(){
  try{
    numero1 = parseFloat(prompt("ingrese el primer número a sumar"));  //Obtiene el primer número ingresado por el usuario y lo convierte de string a entero
    numero2 = parseFloat(prompt("ingrese el segundo número a sumar")); //Obtiene el segundo número ingresado por el usuario y lo convierte de string a entero
    suma = numero1 + numero2;                                          //suma los dos número y lo asigna a la variable suma
    mostrar(suma);                                                     //llama al método mostrar y le envía la variable suma
  }
  catch(err){
    document.getElementById("mensaje").innerHTML = err.message;
  }
}

function mostrar(suma){
  document.getElementById("mensaje").innerHTML = "La suma de los dos números es: " + suma;
}