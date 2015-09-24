/*js para la ventana de cada gatito
*
*
*JuanPedro
* 
*/
window.onload = function(){
	var tabla = document.getElementById("tabla"),
		controles = document.getElementById("controles"),
		imagen = document.getElementById("imgs"),
		jugar = document.getElementById("jugar"),
		dormir = document.getElementById("dormir"),
		comer = document.getElementById("comer");

		tabla.innerHTML += generarTabla();
		
		jugar.onclick = function(){
			document.gatito.ejercicio();
			actualizarDatos();
		}
		dormir.onclick = function(){
			document.gatito.dormir();
			actualizarDatos();
		}
		comer.onclick = function(){
			document.gatito.comer();
			actualizarDatos();
		}

		function actualizarDatos(){
			var peso = document.getElementById("p"),
				estado = document.getElementById("est");
				peso.innerHTML = document.gatito.peso;
				estado.innerHTML = document.gatito.estado;
				if(document.gatito.estado == "Muerto"){
					controles.innerHTML = "";
				}
				imagen.src = document.gatito.obtenerImagen(document.gatito.estado);
		}
		
}

		function generarTabla(){
			var contenidoTabla = "";
			contenidoTabla += '<table>'
						   +	'<tr><td><p>Nombre: </p></td><td><p>'+document.gatito.nombre+'</p></td></tr>'
						   +	'<tr><td><p>Raza: </p></td><td><p>'+document.gatito.raza+'</p></td></tr>'
						   +	'<tr><td><p>Fecha de Nacimiento: </p></td><td><p>'+document.gatito.fechaNacimiento+'</p></td></tr>'
						   +	'<tr><td><p>Peso: </p></td><td><p id="p">'+document.gatito.peso+'</p></td></tr>'
						   +	'<tr><td><p>Estado: </p></td><td><p id="est">'+document.gatito.estado+'</p></td></tr>'
						   +  '</table>';
			return contenidoTabla;
		}

		