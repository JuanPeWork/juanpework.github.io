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
		var f1 = [], f2 = [], suma=0,tabla="";

		for (var i = 0; i < fila.value; i++) {
			f1[i] = new Array(columna.value);
			f2[i] = new Array(columna.value);
		};
		tabla +="<h3>Matriz 1</h3><table>";
		for (var i = 0; i < fila.value; i++) {
			tabla +="<tr>";
			for (var j = 0; j <columna.value; j++) {
				f1[i][j] = Math.floor((Math.random() * 11) + 1);
				tabla += "<td>"+f1[i][j]+"</td>"
			};
			tabla +="</tr>";
		};
		tabla += "</table><br>";
		tabla +="<h3>Matriz 2</h3><table>";
		for (var i = 0; i < fila.value; i++) {
			tabla+="<tr>";
			for (var j = 0; j <columna.value; j++) {
				f2[i][j] = Math.floor((Math.random() * 11) + 1);
				tabla += "<td>"+f2[i][j]+"</td>"
			};
			tabla +="</tr>";
		};
		tabla += "</table><br>";
		tabla += "<h3>Suma</h3><table>";
		for (var i = 0; i < fila.value; i++) {
			tabla+="<tr>";
			for (var j = 0; j <columna.value; j++) {
				/*sumar matrices y mostrar*/
				suma = f1[i][j] + f2[i][j];
				tabla += "<td>"+suma+"</td>"
				suma=0;
			};
			tabla+="</tr>";
		};
		tabla += "</table>";
		
		resultado.innerHTML = tabla;
	}

}
