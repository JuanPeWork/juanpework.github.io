/*Implementa las operaciones básicas de una estructura de datos pila (stack). Recuerda que una pila es una estructura LIFO donde el último elemento en entrar es el primero en salir. Los métodos y atributos a implementar son:
*Introducir elemento en la pila apilar(elemento)
*Sacar elemento de la pila extraer() que devuelva el objeto.
*Cima de la pila, que devuelve el elemento de la cima de la pila. (cima())
*Propiedad cima de la pila, que siempre almacenará el último elemento.
*En la clase Array de JavaScript implementa los métodos necesarios de manera eficiente (prototype), y recuerda hacer las pruebas precisas. 
*Para ello crea una pila mediante formularios donde se añadan elementos del tipo Persona (nombre, apellidos, DNI y mostrar en una ventana nueva (mostrar())) y se invoquen a todos los métodos.
*La interacción con el usuario se realizará a base de formularios lo más amigables posible.
*
*JuanPedro
*
*/
var Persona = function(nombre, apellido, dni){

		this.nombre = nombre;
		this.apellido = apellido;
		this.dni = dni;

}
var Pila = function(){
	this.contenido=[];
}

Pila.prototype.cima = function(){
		return this.contenido[this.contenido.length - 1];
}
Pila.prototype.apilar = function(valor){
		return this.contenido.push(valor);
}
Pila.prototype.extraer = function(){
	return this.contenido.pop();
}

window.onload = function(){
	var pila = new Pila(),
		anadir,
		mostrar,
		extraer,
		nombre,
		apellido,
		dni,
		resultado;

	nombre = document.getElementById("nombre");
	apellido = document.getElementById("apellido");
	dni = document.getElementById("dni");

	anadir = document.getElementById("add");
	mostrar = document.getElementById("show");
	extraer = document.getElementById("ext");
	resultado = document.getElementById("resultado");

	anadir.onclick = function(){
		pila.apilar(new Persona(nombre.value, apellido.value, dni.value));
	}

	mostrar.onclick = function(){
		resultado.innerHTML = mostrarMatriz();
	}
	extraer.onclick = function(){
		pila.extraer();
	}

		function mostrarMatriz(){
		var tabla = "";

		tabla += "<table>";
		tabla += "<tr><td class=\"first\">Nombre</td><td class=\"first\">Apellido</td><td class=\"first\">dni</td></tr>"
		for (var i = 0; i < pila.contenido.length; i++) {
				tabla += "<tr><td>"+pila.contenido[i].nombre+"</td>";
				tabla += "<td>"+pila.contenido[i].apellido+"</td>";
				tabla += "<td>"+pila.contenido[i].dni+"</td></tr>";
		};
		tabla += "</table>";
		return tabla; 
	}


}

