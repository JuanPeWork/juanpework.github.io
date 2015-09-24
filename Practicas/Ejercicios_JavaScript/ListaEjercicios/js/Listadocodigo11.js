/*11. Implementa  MediaPositivos que calcule la media de una serie de números positivos, introducidos por teclado. Dejará de leer cuando el usuario introduzca el 0. 
*
*
*JuanPedro
* 
*/

window.onload = function(){
	var valor, boton, media=0, cont=0, texto;
	var valores = new Array();

		valor = document.getElementById('num');
		boton = document.getElementById('btn');


		boton.onclick = function(){
			if(valor.value>0){
				var numero=parseInt(valor.value);
				valores.push(numero);
				
				
			}
			else if(valor.value == 0){
				for (var i = 0; i <= valores.length -1; i++) {
					media+=valores[i];
				};

				media/=valores.length;

				document.write("<p>Media: "+media+"</p>");
			}


		}
}