/*Crea la página sumaMatrices.html que sume dos matrices de enteros.
*El usuario introducirá por teclado las dimensiones de las matrices (m x n).
*Las matrices se inicializarán de forma aleatoria con enteros entre 0 y 10. Se visualizarán sumandos y suma.
*
* JuanPedro
*/

window.onload = function(){
	
	var fila, columna, boton;

	fila = document.getElementById("fil");
	columna = document.getElementById("col");
	boton = document.getElementById("btn");

	boton.onclick = function(){
		var f1 = [], f2 = [], c1 = [], c2 = [], suma;

		boton.disabled = true;

		for (var i = 0; i < fila.value; i++) {
			f1[i] = c1[columna.value];
			f2[i] = c2[columna.value];
		};

		for (var i = 0; i < fila.value; i++) {
			
			for (var j = 0; j <columna.value; j++) {
				c1[j] = Math.floor((Math.random() * 11) + 1);
				c2[j] = Math.floor((Math.random() * 11) + 1);
				/*sumar matrices y mostrar*/
				suma = c1[j] + c2[j];
				procesaDatos("p", "Fila: "+i+". Columna: "+j+". Valor 1: "+c1[j]+" + "+c2[j]+" = "+suma);
			};

		};
	
	}

	function procesaDatos(etiqueta, texto){//Función para la creación de nuevos nodos
				var nodo, contenido;

				nodo = document.createElement(etiqueta);
				contenido = document.createTextNode(texto);
				nodo.appendChild(contenido);
				document.body.appendChild(nodo);

	}

}