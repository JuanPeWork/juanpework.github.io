/*
*
* Implenta NumeroPrimo que pida un número e indique si es primo o no.
* 
 */

function primos(){
			 valor = document.getElementById("num").value;

			 contador = 0;

			for (var i = 1; i <= valor; i++) {
				if(valor%i == 0){
					contador++;
				}
			};

			if(contador == 2){
				document.write("<p>"+valor+" es primo</p>");
			}
			else{
				document.write("<p>"+valor+" no es primo</p>");	
			}
}