/*Universitario
*
*Define la clase Universitario con los siguientes atributos: nombre, apellido1, apellido2 y fecha
*de nacimiento. Además, define el método mostrar que mostrará el nombre, apellidos y edad
*en una nueva ventana.
*
* @author JuanPedro
*
*/

function Universitario(nombre, apellido1, apellido2, fecha){
	this.nombre = nombre;
	this.apellido1 = apellido1;
	this.apellido2 = apellido2;
	this.fecha = fecha;
}
Universitario.prototype.getNombre = function(){
	return this.nombre;
}
Universitario.prototype.getApellido1 = function(){
	return this.apellido1;
}
Universitario.prototype.getApellido2 = function(){
	return this.apellido2;
}
Universitario.prototype.getFecha = function(){
	return this.fecha;
}
Universitario.prototype.getEdad = function(){
	var nacimiento = this.fecha;
	var valores  = nacimiento.split('-');
	var dia = parseInt(valores[2]),
		mes = parseInt(valores[1]),
		anio = parseInt(valores[0]),
		fechaActual = new Date();
	var edad = fechaActual.getFullYear()-anio;
	if(mes > (fechaActual.getMonth()+1)){
		edad = edad - 1;
	}
	else if(mes == (fechaActual.getMonth()+1)){
		if(dia > fechaActual.getUTCDate()){
			edad = edad - 1;
		}
	}
	return edad;

}

window.onload = function(){
	var nombre = document.getElementById("nombre"),
		apellido1 = document.getElementById("apell1"),
		apellido2 = document.getElementById("apell2"),
		fecha = document.getElementById("fechaNacimiento"),
		crear = document.getElementById("crear"),
		condiciones = document.getElementById("acepta"),
		limpiar = document.getElementById("limpiar"),
		msgError = document.getElementById("msgError");


		crear.onclick= function(){
			if(comprobarDatos()){

				if(condiciones.checked){
					var universitario = new Universitario(nombre.value, apellido1.value, apellido2.value, fecha.value); 
					mostrarUniversitario(universitario);
					msgError.innerHTML = "";
					creacionCookies();

				}
				else{
					msgError.innerHTML = "Debes aceptar las condiciones";
				}
			}
			else{
				msgError.innerHTML = "Debes rellenar todos los campos correctamente";
			}
		}

		limpiar.onclick = function(){
			msgError.innerHTML = "";
			eliminarCookie("nombre");
			eliminarCookie("apellido1");
			eliminarCookie("apellido2");
			eliminarCookie("fecha");

		}
function comprobarDatos(){

			if(isNaN(nombre.value) && isNaN(apellido1.value) && isNaN(apellido2.value)){
				return true;	
			}
			else{
				return false;
			}
}

function creacionCookies(){
			crearCookie("nombre", nombre.value);
			crearCookie("apellido1", apellido1.value);
			crearCookie("apellido2", apellido2.value);
			crearCookie("fecha", fecha.value);
		}
//Funcion Crear Cookies
function crearCookie(nombre, valor){
	expires = new Date();
	expires.setTime(expires.getTime() + 31536000000);
	cookie = nombre + "=" + valor + "; expires=" + expires.toUTCString();
	document.cookie = cookie;
}
//Funcion Eliminar Cookie
function eliminarCookie(nombre){
	console.log("eliminarCookie: "+nombre);
    return document.cookie = nombre + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
}

function mostrarUniversitario(object){
	nuevaVentana = window.open('','',' top="0", left="0" width=500px, height=500px');
	nuevaVentana.document.open();
	nuevaVentana.document.universitario = object;
	nuevaVentana.document.write('<!DOCTYPE html>'+
						'<html lang="es">'+
						'<head>'+
							'<meta charset="UTF-8">'+
							'<title>Datos Nuevo Universitario</title>'+
							'<link rel="stylesheet" type="text/css" href="css/normalize.css">'+
							'<link rel="stylesheet" type="text/css" href="css/style.css">'+
							'<script type="text/javascript" src="js/mostrarDatos.js"></script>'+ 
						'</head>'+
						'<body>'+
						'<h3>Nuevo Universitario</h3>'+	
						'<div id="contenido">'+
						'</div>'+
						'</body>'+
						'</html>');	

	nuevaVentana.document.close();
}
