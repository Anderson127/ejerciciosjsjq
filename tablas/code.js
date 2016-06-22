/*7.  Realiza un ciclo que muestre la tabla del nueve. Ej (1*9 = 9 , 2 * 9 = 18, 3 * 9 =27)....
Bonus: Utiliza un ciclo nesteado para mostrar las tablas del 1-10 (100 resultados en total).*/

function tablas(){
  for(var i = 1;i <= 10; i++){
    for(var j = 1; j<=10; j++){
      console.log(i + "*" + j +" = " + i*j);
    }
    console.log("------------");
  }
}
