/*Formulario completito
*Crea un formulario con todos los tipos de controles y realiza todas las validaciones posibles mediante JavaScript.
*Utiliza el modelo de registro avanzado de eventos según W3C (addEventListener), así como las expresiones regulares.
*Asegúrate de validar lo siguiente:
*Obligatoriedad (campo de texto, opción seleccionada (checkbox, radio button y selección)
*Tipo de dato introducido (numérico...)
*Dirección de correo válida
*Número de DNI válido
*Fecha válida
*Número de teléfono
*Número de cuenta corriente
*URL
*Asegúrate de que:
*
*Al perder el foco de cada control se comprueba su validación.
*Los errores los muestras mediante css.
*Al enviar el formulario se realizan TODAS LAS VALIDACIONES, yéndose el foco al primer error.
*Procura aislar las validaciones del interfaz del usuario (arquitectura de tres capas)
*
*
*JuanPedro Adamuz
* 
 */

window.onload = function(){
	var innombre = document.getElementById('nombre'),
	 	indireccion = document.getElementById('correo'),
	 	indni = document.getElementById('dni'),
	 	infecha = document.getElementById('fecha'),
	 	intelefono = document.getElementById('telefono'),
	 	intarjeta = document.getElementById('tarjeta'),
	 	inurl = document.getElementById('url'),
	 	insexo = document.getElementById('sexo')
	 	errnom = document.getElementById('Errornombre'),
	 	erremail = document.getElementById('Errorcorreo'),
	 	errdni = document.getElementById('Errordni'),
	 	errfecha = document.getElementById('Errorfecha'),
	 	errtarj = document.getElementById('Errortarjeta'),
	 	errtlf = document.getElementById('Errortelefono'),
	 	errurl = document.getElementById('Errorweb'),
	 	errsexo = document.getElementById('Errorsexo'),
	 	enviar = document.getElementById('btn');


	 	function eventosListener(){
	 		/*Es necesario introducirlo dentro de una funcion anonima, sino lo carga al recargar la página*/
	 		innombre.addEventListener("blur", function(){comprobarNombre()}, false);
	 		indireccion.addEventListener("blur", function(){comprobarEmail()}, false);
	 		indni.addEventListener("blur", function(){comprobarDni()}, false);
	 		infecha.addEventListener("blur", function(){comprobarFecha()}, false);
	 		intelefono.addEventListener("blur", function(){comprobarTelefono()}, false);
	 		intelefono.addEventListener("blur", function(){comprobarTarjetaCredito()}, false);
	 		intelefono.addEventListener("blur", function(){comprobarUrl()}, false);
	 		
	 	}

		function comprobarNombre(){
			if(innombre.value == ""){
				errnom.innerHTML = "Este campo es obligatorio";
				innombre.style.border="3px solid red";
				return false;
			}

			else if(!isNaN(innombre.value)){
				errnom.innerHTML = "Debes introducir tu nombre correctamente";
				innombre.style.border="3px solid red";
				return false;
			}
			else{
				errnom.innerHTML = "";
				innombre.style.border="2px solid green";
				return true;
			}
		}

		function comprobarEmail(){
			var validarEmail = new RegExp("^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$");
			var correct = validarEmail.test(indireccion.value);
			if(!correct){
				erremail.innerHTML = "Debes introducir una direccion de correo correcta";
				indireccion.style.border="3px solid red";
				return false;
			}
			else{
				erremail.innerHTML = "";
				indireccion.style.border = "2px solid green"
				return true;
			}
		}

		function comprobarDni(){
			var validarDni = new RegExp("^(([X-Z]{1})([-]?)(\\d{7})([-]?)([A-Z]{1}))|((\\d{8})([-]?)([A-Z]{1}))$");
			var correct = validarDni.test(indni.value);

			if(!correct){
				errdni.innerHTML = "Debes introducir correctamente el dni";
				indni.style.border="3px solid red";
				return false;
			}
			else{
				errdni.innerHTML = "";
				indni.style.border = "2px solid green";
				return true;
			}
		}
		function comprobarFecha(){
			var validarFecha = new RegExp("^(?:(?:31(\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(\\/|-|\\.)(?:0?[1,3-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$");
			var correct = validarFecha.test(infecha.value);

			if(!correct){
				errfecha.innerHTML = "Debes introducir la fecha correctamente";
				infecha.style.border="3px solid red";
				return false;
			}
			else{
				errfecha.innerHTML = "";
				infecha.style.border = "2px solid green";
				return true;
			}
		}
		function comprobarTelefono(){
			var validarTelefono = new RegExp("^[9|6]{1}(\\d{2}-?){3}\\d{2}$");
			var correct = validarTelefono.test(intelefono.value);

			if(!correct){
				errtlf.innerHTML = "Debes introducir un numero de telefono valido";
				intelefono.style.border="3px solid red";
				return false;
			}
			else{
				errtlf.innerHTML = "";
				intelefono.style.border = "2px solid green";
				return true;
			}
		}
		function comprobarTarjetaCredito(){
			var validarTarjeta = new RegExp("^4[0-9]{12}(?:[0-9]{3})?$");
			var correct = validarTarjeta.test(intarjeta.value);

			if(!correct){
				errtarjet.innerHTML = "Debes introducir un numero de tajeta valido(VISA)";
				intarjeta.style.border="3px solid red";
				return false;
			}
			else{
				errtarjet.innerHTML = "";
				intarjeta.style.border = "2px solid green";
				return true;
			}
		}
		
		function comprobarUrl(){
			var validarUrl = new RegExp("/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/");
			var correct = validarUrl.test(inurl.value);
			/*Ejemplos:
			www.google.com
			http://www.google.com
			mailto: somebody@google.com
			somebody@google.com
			www.url-with-querystring.com/?url=has-querystring*/
			if(!correct){
				errurl.innerHTML = "Debes introducir una url válida";
				inurl.style.border="3px solid red";
				return false;
			}
			else{
				errurl.innerHTML = "";
				inurl.style.border = "2px solid green";
				return true;
			}
		}
		
		eventosListener();

		enviar.onclick = function(){
			/*Falta cambiar mover el foco al primer campo que muestre el error con focus();*/
			if(comprobarNombre() && comprobarEmail() && comprobarDni() && comprobarFecha() && comprobarTelefono() && comprobarTarjetaCredito() && comprobarUrl()){
				alert("Formulario Correcto");
			}
			else{

			}
		}

}
