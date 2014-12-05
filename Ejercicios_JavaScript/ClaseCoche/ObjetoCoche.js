/*Objetos coche
*Genera cuatro instancias del objeto Coche (propiedades marca, modelo y año)
*Imprimer sus propiedades en una tabla HTML (<table>). Genera el código desde JavaScript.
*Cada instancia ha de ocupar una línea (<tr>) y el valor de cada propiedad ha de ocupar una celda (<td>).
*
* JuanPedro
* 
*/

function Coche(marca, modelo, aniofac){
	this.marca = marca;
	this.modelo = modelo;
	this.aniofac = aniofac;

	/*this.getmarca = function(){
		return this.marca;
	}

	this.getmodelo = function(){
		return this.modelo;
	}
	this.getaniofac = function(){
		return this.aniofac;
	}*/
}

Coche.prototype.getmarca = function(){
	return this.marca;
}

Coche.prototype.getmodelo = function(){
	return this.modelo;
}
Coche.prototype.getaniofac = function(){
	return this.aniofac;
}



window.onload = function(){
	var coche1 = new Coche("BMW", "Serie 7", 1977);
	var coche2 = new Coche("Seat", "Córdoba", 1993);
	var coche3 = new Coche("Ferrari", "Testarossa", 1984);
	var coche4 = new Coche("Fiat", "500", 1996);


	/*document.write("<table border=\"1px solid black\">");
	document.write("<tr><td>Marca</td><td>Modelo</td><td>Año de Fabricación</td></tr>");
	document.write("<tr><td>"+coche1.getmarca()+"</td><td>"+coche1.getmodelo()+"</td><td>"+coche1.getaniofac()+"</td></tr>");
	document.write("<tr><td>"+coche2.getmarca()+"</td><td>"+coche2.getmodelo()+"</td><td>"+coche2.getaniofac()+"</td></tr>");
	document.write("<tr><td>"+coche3.getmarca()+"</td><td>"+coche3.getmodelo()+"</td><td>"+coche3.getaniofac()+"</td></tr>");
	document.write("</table>");*/

	function procesaDatos(){//Función para la creación de la tabla
		var tabla,fila;

		tabla = document.createElement("table");

			
					fila = document.createElement("tr");

					newTable(fila, "Marca");
					newTable(fila, "Modelo");
					newTable(fila, "Año de Fabricación");
					tabla.appendChild(fila);
				
					fila = document.createElement("tr");

					newTable(fila, coche1.getmarca());
					newTable(fila, coche1.getmodelo());
					newTable(fila, coche1.getaniofac());
					tabla.appendChild(fila);

					fila = document.createElement("tr");
					
					newTable(fila, coche2.getmarca());
					newTable(fila, coche2.getmodelo());
					newTable(fila, coche2.getaniofac());
					tabla.appendChild(fila);

					fila = document.createElement("tr");

					newTable(fila, coche3.getmarca());
					newTable(fila, coche3.getmodelo());
					newTable(fila, coche3.getaniofac());
					tabla.appendChild(fila);
					document.body.appendChild(tabla);

	}
	procesaDatos();

	function newTable(nodo, text){
		var celda, texto;
			celda = document.createElement("td");
			texto = document.createTextNode(text);
			celda.appendChild(texto);
			nodo.appendChild(celda);
	}
}
