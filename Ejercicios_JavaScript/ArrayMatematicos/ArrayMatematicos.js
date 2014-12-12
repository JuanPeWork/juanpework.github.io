/*Mediante prototype, agrega los métodos sumar, restar, trasponer y multiplicar a la clase ArraysMatematicos.
*Recuerda que el estado de un array deberían de ser los elementos.
*Recuerda las restricciones y posibilidades de un Array:
*Sobre las dimensines de los arrays implicados (unidimensional, bidimensional...)
*Sobre las longitudes de los arrays implicados (1 en adelante)
*Sobre los contenidos de los arrays implicados (numéricos)
*Podemos rellenar un Array con valores aleatorios o directamente desde teclado.
*Una vez creada la clase, demuestra su funcionamiento en una página bien diseñada.
*Evita las cajas de texto y hazla lo más dinámica posible.
*
*JuanPedro
*
*/

function Arr(filas, columnas){
	this.filas = filas;
	this.columnas = columnas;
	this.contenido = this.generarMatriz();

	}
Arr.prototype.generarMatriz = function () {
	var matriz = new Array(this.filas);

	for (var f = 0; f < this.filas; f++) {
		matriz[f] = new Array(this.columnas);
		for (var c = 0; c < this.columnas; c++) {
			matriz[f][c] = Math.floor((Math.random()*10)+1); ;
		};
	};

	return matriz;
};

Arr.prototype.mostrar = function (){
	var cadena = '<table>';

	for (var f = 0; f < this.filas; f++) {
		cadena+= '<tr>';
		for (var c = 0; c < this.columnas; c++) {
			cadena += "<td>"+this.contenido[f][c]+"</td>";
		};
		cadena+= "</tr>";
	};
	cadena += '</table>';
	return cadena;
};

Arr.prototype.sumar = function(arr2){

	var suma = new Arr(this.filas, this.columnas);

	for (var i = 0; i < this.filas; i++) {
		for (var j = 0; j < this.columnas; j++) {
			suma.contenido[i][j] = this.contenido[i][j] + arr2.contenido[i][j];
		};
	};
	return suma;

}

Arr.prototype.restar = function(arr2){

	var resta = new Arr(this.filas, this.columnas);

	for (var i = 0; i < this.filas; i++) {
		for (var j = 0; j < this.columnas; j++) {
			resta.contenido[i][j] = this.contenido[i][j] - arr2.contenido[i][j];
		};
	};
	return resta;

}

Arr.prototype.multiplicar = function(arr2){

		var producto = new Arr(this.filas, arr2.columnas), suma = 0;

		for (var i = 0; i <this.filas ; i++){
			
			for (var j = 0; j < arr2.columnas; j++) {
				
				for (var k = 0; k < this.columnas; k++) {
					suma += this.contenido[i][k]*arr2.contenido[k][j];
				};
				producto.contenido[i][j] = suma;
				suma = 0;
			};
		};
		return producto
}
Arr.prototype.trasponer = function(){
	var traspuesta = new Arr(this.columnas, this.filas);

	for (var i = 0; i < this.filas; i++) {
		
		for (var j = 0; j < this.columnas; j++) {
			traspuesta.contenido[j][i] = this.contenido[i][j];
		};
	};
	return traspuesta;
}


window.onload = function(){

	var matriz1 = null,
		matriz2 = null,
		botonCrear = document.getElementById('btnCrear'),
		botonSumar = document.getElementById('btnSumar'),
		botonRestar = document.getElementById('btnRestar'),
		botonMultiplicar = document.getElementById('btnMultiplicar'), 
		botonTrasponer = document.getElementById('btnTrasponer'),
		botonTrasponer2 = document.getElementById('btnTrasponer2'),
		filas1 = document.getElementById('fil1'),
		columnas1 = document.getElementById('col1'),
		filas2 = document.getElementById('fil2'),
		columnas2 = document.getElementById('col2'),
		mostrarTabla = document.getElementById('mostrar'),
		mostrarSum = document.getElementById('suma'),
		mostrarRes = document.getElementById('resta'),
		mostrarMult = document.getElementById('multiplicacion'),
		mostrarTras = document.getElementById('traspuesta1'),
		mostrarTras2 = document.getElementById('traspuesta2'),
		error = document.getElementById('msgError');

		botonCrear.onclick = function(){
			if(!controlDimensiones()){
				error.innerHTML = "Los valores introducidos deben ser numeros";
			}
			else{
				 matriz1 = new Arr(filas1.value, columnas1.value);
			 	matriz2 = new Arr(filas2.value, columnas2.value);

				if(datosIntroducidos()){
					mostrarTabla.innerHTML = matriz1.mostrar();
					mostrarTabla.innerHTML += matriz2.mostrar();
					mostrarMult.innerHTML = "";
					mostrarSum.innerHTML = "";
					mostrarRes.innerHTML = "";
					mostrarTras.innerHTML = "";
					mostrarTras2.innerHTML = "";
					mostrarTabla.focus();
				}	
			}

		}
		botonSumar.onclick = function(){
			if(matricesCreadas()){
				var resultadoSum = matriz1.sumar(matriz2);
				if(!coincidenDimesiones()){
					error.innerHTML = "Las dimensiones de las matrices deben ser iguales";
				}
				else{
					error.innerHTML = "";
					mostrarSum.innerHTML = '<h3>Suma</h3>'; 
					mostrarSum.innerHTML += resultadoSum.mostrar();	
					mostrarSum.focus();
				}
			}
		}
		botonRestar.onclick = function(){
			if(matricesCreadas() && datosIntroducidos()){
				var resultadoRes = matriz1.restar(matriz2);
			
				if(!coincidenDimesiones()){
					error.innerHTML = 'Las dimesiones de las matrices deben ser iguales';
				}
				else{
					error.innerHTML = "";
					mostrarRes.innerHTML = '<h3>Resta</h3>';
					mostrarRes.innerHTML += resultadoRes.mostrar();
					mostrarRes.focus();
				}
			}			
		}
		botonMultiplicar.onclick = function(){

			if(matricesCreadas() && datosIntroducidos()){

				if(!coincidenColumnasFilas()){
					error.innerHTML = 'El número de columnas de la primera matriz y el numero de filas de la segunda deben coincidir';
				}
				else{
					error.innerHTML = '';
					var resultadoMult = matriz1.multiplicar(matriz2);
					mostrarMult.innerHTML = '<h3>Multiplicación</h3>';
					mostrarMult.innerHTML += resultadoMult.mostrar();
					mostrarMult.focus();
				}
			}


		}
		botonTrasponer.onclick = function(){
			if(matricesCreadas() && datosIntroducidos()){
				var resultadoTras = matriz1.trasponer();
				mostrarTras.innerHTML = '<h3>Traspuesta Matriz 1</h3>'
				mostrarTras.innerHTML += resultadoTras.mostrar();
				mostrarTras.focus();
			}
		}
		btnTrasponer2.onclick = function(){
			if(matricesCreadas() && datosIntroducidos()){
				var resultadoTras2 = matriz2.trasponer();
				mostrarTras2.innerHTML = '<h3>Traspuesta Matriz 2</h3>'
				mostrarTras2.innerHTML += resultadoTras2.mostrar();
				mostrarTras2.focus();
			}	
		}

		function datosIntroducidos(){
			if(filas1.value == "" || columnas1.value == "" || filas2.value == "" || columnas2.value == ""){
					error.innerHTML = "Debes rellenar todos los campos";
					return false;
			}
			else if(filas1.value == "0" || columnas1.value == "0" || filas2.value == "0" || columnas2.value == "0"){
					error.innerHTML = "El valor debe ser mayor de 0";
					return false;
			}
			else{
				error.innerHTML = "";
				return true;
			}
		}

		function matricesCreadas(){
			if(matriz1 != null && matriz2 != null){
				error.innerHTML = "";
				return true;
			}
			else{
				error.innerHTML = "Debes crear las matrices antes de realizar esta acción";
				return false;
			}
		}

		function coincidenDimesiones(){
			if(matriz1.filas == matriz2.filas && matriz1.columnas == matriz2.columnas){
				return true;
			}
			else{
				return false;
			}
		}

		function coincidenColumnasFilas(){
			if(matriz1.columnas == matriz2.filas){
				return true;
			}
			else{
				return false;
			}
		}
		function controlDimensiones(){
			if(isNaN(filas1.value) && isNaN(columnas1.value) && isNaN(filas2.value) && isNaN(columnas2.value)){
				return false;
			}
			else{
				return true;
			}
		}
}
