/*14. Implementa CalculaMedia que pida números hasta que se introduzca uno negativo. Entonces, que muestre la media
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
			if(valor.value>=0){
				var numero=parseInt(valor.value);
				valores.push(numero);
				
				
			}
			else if(valor.value < 0){
				for (var i = 0; i <= valores.length -1; i++) {
					media+=valores[i];
				};

				media/=valores.length;

				document.write("<p>Media: "+media+"</p>");
			}


		}
}