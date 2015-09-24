/*
*1. Implementa el juego “Adivínalo”. Consiste en que el usuario ha de adivinar un número 
*entre el 1 y el 100. Mostrará un mensaje:
*	a. Para indicar si has acertado (en una nueva ventana)
* 	b. Para indicar si la solución es mayor o es menor.
*Al finalizar, se le preguntará al usuario si quiere repetir el juego.
* 
*JuanPedro
*
*/
 function jugar(){
	aleatorio = Math.floor((Math.random()*100)+1);
}

function adivina(){

	
	var numero = document.getElementById("num").value.trim();
	mensaje =document.getElementById("msj");


	if(numero > aleatorio){
		mensaje.innerHTML = "Te has pasado";
	}
	else if(numero < aleatorio){
		mensaje.innerHTML = "Te has quedado corto";
	}
	else if(numero == aleatorio){
		mensaje.innerHTML = "";
		var recargar=confirm("¿Jugar otra vez?");

		if(recargar){
			jugar();	
		}
		
	}

}
