/*
*
* Implenta NumeroPrimo que pida un número e indique si es primo o no.
* 
 */

function primos(){
			 valor = document.getElementById("num").value;//Obtenemos el valor del input
			 contador = 0;


			for (var i = 1; i <= valor; i++) {

				//Recorre los valores desde el 1 hasta el valor indicado
				for (var j = 1; j <= i; j++) {
					//For que recorre todos los valores 1 y el valor de i
					if(i%j == 0){
						//si el resto es 0 aumenta el contador
						contador++;
						
					}
					if(i == j && contador == 2){
						//Si i y j sabemos que ha acabado de recorres ese numero
						//Como contador es 2 significa que es primo por lo que establecemos el contador a 0 para el siguiente valor
						document.write("<p>"+i+" es primo</p>");
						contador=0;
					}
					if(i == j && contador !== 2){
						//Si el contador es distinto de 2 no es primo y establecemos el contador a 0 para el siguiente valor 
						contador=0;
					}
					
				};
				
			};

}