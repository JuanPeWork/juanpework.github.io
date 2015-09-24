/*Crea la página secuencia.html que busque la secuencia en orden 
*creciente más larga dentro de un vector de enteros inicializado aleatoriamente.
*Se mostrará tanto la posición de la primera componente de la secuencia como el tamaño de la misma.
*
* JuanPedro
* 
*/
window.onload = function(){
	var vector = [], secuencia, longitud=1, pos=0, mayor=0, position, phrase;

	phrase = document.getElementById("texto");

	for (var i = 0; i < 100; i++) {
		vector[i]=Math.floor((Math.random()*10)+1);
	};

	secuencia = vector[0];

	for (var i = 0; i < 100; i++) {

		procesaDatos("p","Posición " + i + " : "+vector[i]);

		if(vector[i] == (secuencia+1)){
			secuencia = vector[i];
			longitud++;
		}
		else{
			secuencia = vector[i];
			pos = i;
			longitud = 1;
		}

		if(mayor < longitud){
			mayor = longitud;
			position = pos;
		}
	};
	phrase.innerHTML= "Longitud de la mayor secuencia: " + mayor + ". Posición primer elemento: "+ position;

	function procesaDatos(etiqueta, texto){//Función para la creación de nuevos nodos
		var nodo, contenido;

		nodo = document.createElement(etiqueta);
		contenido = document.createTextNode(texto);
		nodo.appendChild(contenido);
		document.body.appendChild(nodo);

	}

}