/*Crea la página notas.html que almacene en un array x notas,
*siendo x la dimensión elegida por el usuario.
*Las notas se inicializarán de forma aleatoria con enteros entre 0 y 10.
*Se visualizarán las notas resultantes y la media de las mismas.
*
*
*JuanPedro
* 
 */
window.onload = function(){
	var num, boton, div;

	num	= document.getElementById("dim");
	boton = document.getElementById("btn");
	notes = document.getElementById("notas");
	media = document.getElementById("media");
	div = document.getElementById("resultado");

	boton.onclick = function(){
		var notas=[], suma=0;

		for (var i = 0; i < num.value; i++) {
			notas[i] = Math.floor((Math.random() * 10) + 0);
			suma += notas[i];
			
		};
		suma/=num.value;
		div.innerHTML = mostrarDatos(notas, suma);


	}

	function mostrarDatos(arr, media){
		var tabla ="";
		tabla += "<table>";
		for (var i = 0; i < arr.length; i++) {
			tabla += "<tr><td>Nota:</td><td>" + arr[i] + "</td></tr>";
		};
		tabla += "<tr><td>Media:</td><td>" + media + "</td></tr>";
		tabla += "</table>";

		return tabla;
	}
}