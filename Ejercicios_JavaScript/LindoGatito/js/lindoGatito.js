/*Crea una clase Gato, y a partir de ella crea tantos gatos como quiera el usuario.
*Cada gato tendrá un nombre, una fecha de nacimiento, una raza y un peso.
*Cada vez que crees un objeto gato aparecerá una ventana nueva con una 
*imagen que cambiará en función de su estado (comiendo, durmiendo y jugando, que es su estado habitual).
*El usuario podrá averiguar la edad del gato partiendo de un evento.
*Evita las cajas de texto
*No puedes usar ni alert ni prompt
*Hazlo lo más dinámico posible.
*Utiliza prototype para los métodos
*
*JuanPedro
* 
*/
function Gatito(nombre, raza, fechaNacimiento){
	this.nombre = nombre;
	this.raza = raza;
	this.peso = obtenerPeso(this.raza);
	this.estado = "Jugando";
	this.fechaNacimiento = fechaNacimiento;
}


Gatito.prototype.comer = function(){
	this.peso += 0.5;
	this.estado = "Comiendo";
	this.comprobarSalud();

}

Gatito.prototype.ejercicio = function(){
	this.peso -= 0.5;
	this.estado = "Jugando";
	this.comprobarSalud();
}


Gatito.prototype.dormir = function(){
	this.estado = "Durmiendo";
}

Gatito.prototype.comprobarSalud = function(){
	if(this.peso < 4 || this.peso > 20){
		this.estado = "Muerto";
	}
}

function obtenerPeso(raza){
	var peso = 0;
	if(raza == "Persa"){
		peso = 10;
	}
	else if(raza == "Scottish Fold"){
		peso = 15;
	}
	else if(raza == "Bengala"){
		peso = 8;
	}
	else{
		peso= 12;
	}

	return peso;
}

Gatito.prototype.obtenerImagen = function(estadoActual){
	var imagen = "";
	if(estadoActual == "Jugando"){
			imagen = "images/jugando.gif";
	}
	else if(estadoActual == "Durmiendo"){
			imagen = "images/dormido.png";
	}
	else if(estadoActual == "Comiendo"){
			imagen = "images/comiendo.png";
	}
	else{
			imagen = "images/muerto.png";
	}

	return imagen;
}
window.onload = function(){
	var nombre = document.getElementById("nombre"),
	 	raza = document.getElementById("raza"),
	 	fechaNac = document.getElementById('fechaNac'),
	 	boton = document.getElementById('newbtn'),
	 	error = document.getElementById('error');

	boton.onclick = function(){
		var nac = "'"+fechaNac.value+"'";
		var fechaNacimiento = new Date(nac);
		console.log(fechaNacimiento);
		if (nombre.value == "") {
			error.innerHTML="Debes introducir un nombre";
		}
		else if(fechaNacimiento == "Invalid Date"){
			error.innerHTML="Introduce el formato de la fecha correctamente 'YYYY/mm/dd'";
		}
		else{
			var gato = new Gatito(nombre.value,raza.value, fechaNac.value);
			nuevaVentana(gato);
		}

	}

	function nuevaVentana(object){
		
		var nuevaVentana;
		var contenido = "";
		contenido += '<html>'
				  +		'<head>'
				  +			'<title>Nuevo Gatito</title>'
				  +			'<script type="text/javascript" src="js/MiGatito.js"></script>'
				  +		    '<link rel="stylesheet" type="text/css" href="css/style.css">'
				  +		'</head>'
				  +		'<body id="newbody">'
				  +			'<div id="principal">'
				  +				'<h1 id="newh1">Tu nuevo gatito</h1>'
				  +				'<div id="divimg"><img id="imgs" src="images/jugando.gif"></img></div>'
				  +				'<div id="tabla"></div>'
				  +				'<div id="controles">'
				  + 				'<input type="button" value="Jugar" id="jugar">'
				  +  				'<input type="button" value="Dar Comida" id="comer">'
				  +  				'<input type="button" value="Dormir" id="dormir">'
				  +				'</div>'
				  +		'</body>'
				  +	 '</html>';
		nuevaVentana = window.open('','',' top="0", left="0" width=800px,height=800px');
		nuevaVentana.document.open();
		nuevaVentana.document.gatito = object;
		nuevaVentana.document.write(contenido);
		nuevaVentana.document.close();
	}

}