/*
 * JuanPedro
 */
window.onload = function(){

	var boton;

	boton = document.getElementById("btn");

	boton.onclick = function(){
			var miVentana, gcap, permite = "";
			miVentana = window.open("","","width=500px, height=500px");
			miVentana.document.open();

			if(miVentana.navigator.javaEnabled()){
				permite = "Java SI disponible en esta ventana";
			}
			else{
				permite = "Java SI disponible en esta ventana";
			}

			miVentana.document.write("<!DOCTYPE html>"+
						"<html lang=\"en\">"+
							"<head>"+
								"<meta charset=\"UTF-8\">"+
								"<title>Ventana Nueva</title>"+
							"</head>"+
							"<body>"+
							"<p>Location: "+ location.href +"</p>"+
							"<p>Protocolo: "+ location.protocol +"</p>"+
							"<p>Navigator: "+ navigator.appCodeName +"</p>"+
							"<p>"+ permite +"</p>"+
							"</body>"+
						"</html>");	

			miVentana.document.close();
			gcap = window.open("http://www.iesgrancapitan.org/portal/","","width=800px, height=600px");
			
			introducirDatos();	
			boton.disabled=true;
			
			
	}

	function introducirDatos(){

				var titulo, nombre, apellidos, dia, mes, anio, sentences, array=[65, 22, 69, 99, 12], nacimiento, nacorto;
				
				titulo = document.getElementById("titulo");
				titulo.innerHTML = "Tarea Tema 3";

				nombre = prompt("Introduzca su nombre:");
				apellidos = prompt("Introduzca sus apellidos:");
				dia = prompt("Introduzca su dia de nacimiento: ");
				mes = prompt("Introduzca su mes de nacimiento: ");
				anio = prompt("Introduzca su año de nacimiento: ");

				sentences = "Buenos dias " + nombre + " " + apellidos;
				procesaDatos("h2",sentences);
				sentences = "Tu nombre tiene "+ nombre.length +" caracteres, incluidos espacios.";
				procesaDatos("p",sentences);
				sentences = "La primera letra E de tu nombre está en la posición: "+ nombre.indexOf("e");
				procesaDatos("p",sentences);
				sentences = "Tu nombre menos las 3 primeras letras es: "+ nombre.slice(2);
				procesaDatos("p",sentences);
				sentences = "Tu nombre todo en mayúsculas es: "+ nombre.toUpperCase();
				procesaDatos("p",sentences);
				nacimiento = new Date(anio+"/"+mes+"/"+dia);
				nacorto= new Date(nacimiento.getFullYear()+"/"+(nacimiento.getMonth()+1)+"/"+nacimiento.getDate());
				sentences = "Tu edad es:"+ obtenerEdad(nacorto) +" años.";
				procesaDatos("p",sentences);
				sentences = "Naciste un feliz " + mes + " del año "+anio+". ";
				procesaDatos("p",sentences);
				sentences = "El coseno de 90 es: "+ Math.cos(90 * Math.PI/180);
				procesaDatos("p",sentences);
				sentences = "El número mayor de (65, 22, 69, 99, 12) es: "+ numeroMayor(array);
				procesaDatos("p",sentences);
				sentences = "Ejemplo de número al azar entre 1 y 10: "+ Math.floor((Math.random() * 10) + 1);
				procesaDatos("p",sentences);


			}

			function procesaDatos(etiqueta, texto){//Función para la creación de nuevos nodos
				var nodo, contenido;

				nodo = document.createElement(etiqueta);
				contenido = document.createTextNode(texto);
				nodo.appendChild(contenido);
				document.body.appendChild(nodo);

			}
			function numeroMayor(listnum){//Recorre el array almacenando el valor mayor
				var mayor=0;
				
				for (var i = 0; i < listnum.length; i++) {

					if(listnum[i] > mayor){
						mayor = listnum[i];
					}

					
				};

				return mayor;
			}

			function obtenerEdad(fechaNacimiento){//Obtenemos la edad restando la fecha introducida a la fecha actual

				var d=new Date(), fechaActual, restaFechas, conversion;
				fechaActual = new Date(d.getFullYear()+"/"+(d.getMonth()+1)+"/"+d.getDate());
				restaFechas= fechaActual - fechaNacimiento;
				conversion=((((restaFechas/1000)/60)/60)/24)/365;

				return Math.floor(conversion);
			}

}