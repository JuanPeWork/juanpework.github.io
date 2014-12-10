/*
*Crea la página tablaDecimales.html que cree una matriz de decimales. 
*Pide las dimensiones (filas y columnas). Se inicializa con valores aleatorios entre 1 y 100. Visualiza el array,
*localiza los valores máximo y mínimo y muestra tanto estos valores como la posición que ocupan en la matriz.
*
*JuanPedro
* 
 */

window.onload = function(){
	var filas, columnas, boton, mayor=0, menor;

	columnas = document.getElementById("dimx");
	filas = document.getElementById("dimy");
	boton = document.getElementById("btn");


	boton.onclick = function(){
		var rows=[], cols=[], tabla="";
		boton.disabled = true;

		for (var i = 0; i < filas.value ; i++) {//Creamos el array multidimensional
			rows[i]=cols[columnas.value];
		};

		tabla = "<table>";
		for (var i = 0; i < filas.value; i++){//Recorremos el array general (filas).
			
			tabla+="<tr>";

			for (var j = 0; j < columnas.value; j++) {//Recorremos cada posicion del array contenido(columnas).
				

				cols[j]=(Math.random() * 100);//Introducimos un valor por cada posición.
					if(i == 0 && j == 0){
						menor = cols[j];
					}
					else if(menor > cols[j]){
						menor = cols[j];
					}
					if(mayor < cols[j]){
						mayor = cols[j];
					}
				tabla += '<td>'+cols[j]+'</td>';
			}
			
			tabla+="</tr>";
		}
		tabla+="</table> <p>"+mayor+"</p><p>"+menor+"</p>";
	}


}
			

