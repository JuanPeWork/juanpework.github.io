trg/**
 * Dinámicamente, realiza las siguientes operaciones en el orden indicado:
 * 	1. Borra el nodo del párrafo “bórrame”
 *  2. Inserta antes de “Apellido del autor” tu nombre dentro de un párrafo
 *  3. Añade despues de “Apellido del autor” tu apellido dentro de un párrafo
 *
 * @author JuanPedro 
 *
 */

function anadirParrafo(element,text) {
	var text = document.createTextNode(text);
	element.appendChild(text);
}

window.onload = function() {
	document.body.children[1].remove();

	var p = document.createElement("p");
	anadirParrafo(p,"JuanPedro");
	document.body.insertBefore(p,document.body.lastElementChild);



	var p = document.createElement("p");
	anadirParrafo(p,"Adamuz");
	document.body.appendChild(p,document.body.lastElementChild);
}