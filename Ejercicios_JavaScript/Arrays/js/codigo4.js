/*Crea la página sumaMatrices.html que sume dos matrices de enteros.
*El usuario introducirá por teclado las dimensiones de las matrices (m x n).
*Las matrices se inicializarán de forma aleatoria con enteros entre 0 y 10. Se visualizarán sumandos y suma.
*
* JuanPedro
*/

window.onload = function(){
	
	var fila, columna, boton, resultado;

	fila = document.getElementById("fil");
	columna = document.getElementById("col");
	boton = document.getElementById("btn");
	resultado = document.getElementById("result");

	boton.onclick = function(){
		var f1 = [], f2 = [], c1 = [], c2 = [], suma=0,tabla="";

		boton.disabled = true;

		for (var i = 0; i < fila.value; i++) {
			f1[i] = c1[columna.value];
			f2[i] = c2[columna.value];
		};
		tabla +="<table>";
		for (var i = 0; i < fila.value; i++) {
			tabla="<tr>";
			for (var j = 0; j <columna.value; j++) {
				c1[i][j] = Math.floor((Math.random() * 11) + 1);
				tabla += "<td>"+c1[i][j]+"</td>"
			};
			tabla="</tr>";
		};
		tabla += "</table>";
		tabla +="<table>";
		for (var i = 0; i < fila.value; i++) {
			tabla="<tr>";
			for (var j = 0; j <columna.value; j++) {
				c2[i][j] = Math.floor((Math.random() * 11) + 1);
				tabla += "<td>"+c2[i][j]+"</td>"
			};
			tabla="</tr>";
		};
		tabla += "</table>";
		tabla += "<table>";
		for (var i = 0; i < fila.value; i++) {
			tabla="<tr>";
			for (var j = 0; j <columna.value; j++) {
				/*sumar matrices y mostrar*/
				suma = c1[i][j] + c2[i][j];
				tabla += "<td>"+suma+"</td>"
				suma=0;
			};
			tabla="</tr>";
		};
		tabla += "</table>";
		
		resultado.innerHTML = tabla;
	}

}
