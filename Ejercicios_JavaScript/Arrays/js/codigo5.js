/*Crea la página multiplicaMatrices.html que multiplique dos matrices de enteros. 
*El usuario elegirá las dimensiones de las matrices (m x n, n x o).
*Las matrices se inicializarán de forma aleatoria con enteros entre 1 y 10. Se visualizarán factores y resultado.
*
*JuanPedro
*
*/
	function generarMatriz(filas, columnas){
		var matriz = [];
		for (var i = 0; i < filas; i++) {
			matriz[i] = new Array(columnas);
		};

		for (var i = 0; i < filas; i++) {
			for (var j = 0; j < columnas; j++) {
				matriz[i][j] = Math.floor((Math.random() * 11) + 1);
			};
		};
		return matriz;
	}

	function generarProducto(m1, m2){

		var producto=[], suma = 0;

		for (var i = 0; i < m1.length; i++) {
			producto[i] = [];			
		}

		for (var i = 0; i < m1.length; i++) {
			
			for (var j = 0; j < m2[0].length ; j++) {
				
				for (var k = 0; k < m1[0].length; k++) {

					suma += m1[i][k] * m2[k][j];
					
				};
				producto[i][j] = suma;
				suma = 0;
			};
		};
		return producto;

	}
	
	function mostrarMatriz(matriz){
		var tabla = "";

		tabla += "<table>";
		for (var i = 0; i < matriz.length; i++) {
				tabla += "<tr>";
				for (var j = 0; j < matriz[0].length; j++) {
					tabla += "<td>"+matriz[i][j]+"</td>";	
				};
				tabla += "</tr>";
		};
		tabla += "</table>";
		return tabla; 
	}

window.onload = function(){

	var filas1, columnas2, filcol, boton, matriza, matrizb, resultado, div;

	filas1 = document.getElementById("fils");
	columnas2 = document.getElementById("cols");
	filcol = document.getElementById("filscols");
	boton = document.getElementById("btn");
	div = document.getElementById("matrices");


	boton.onclick = function(){
		var tabla="";
		//generar matriza, matrizb
		matriza = generarMatriz(filas1.value, filcol.value);
		matrizb = generarMatriz(filcol.value, columnas2.value);
		//generar producto
		 resultado = generarProducto(matriza, matrizb);
		//mostrar matrices
		tabla += "<h3>Matriz A:</h3><br>"+mostrarMatriz(matriza)+"<br>";
		tabla += "<h3>Matriz B:</h3><br>"+mostrarMatriz(matrizb)+"<br>";
		tabla += "<h3>Resultado:</h3><br>"+mostrarMatriz(resultado);
		div.innerHTML = tabla;

	}

}