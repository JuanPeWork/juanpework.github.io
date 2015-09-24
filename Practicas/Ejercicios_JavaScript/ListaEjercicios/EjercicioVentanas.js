/*Crea la siguiente página Web donde el botón crea cinco nuevas ventanas ubicadas en la esquina tal y como se muestran.
*
* JuanPedro
 */
function nuevaVentana(num){
	miVentana = window.open('','','width=200,height=200');
	miVentana.document.open();
	miVentana.document.write("<p>Ventana " + num + "</p><input type=\"button\" value=\"cerrar\" onclick=\"window.close()\">"); 		
	miVentana.document.close();
}
function crearVentanas(){

	for (var i = 1; i <= 5; i++) {
		nuevaVentana(i);
	};
}