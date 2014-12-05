/*Crea la siguiente página Web (lo más dinámica posible)
*donde el botón crea una nueva ventana ubicada en la esquina
*superior izquierda de la pantalla (top = 0, left = 0) y con los tamaños indicados.
*
* JuanPedro
 */
window.onload = function(){
	var boton, w, h;
	
	boton = document.getElementById('btn');
	w = document.getElementById('width');
	h = document.getElementById('height');


	boton.onclick= function(){

		

	miVentana = window.open('','',' top="0", left="0" width='+w.value+'px,height='+h.value+'px');
	miVentana.document.open();
	miVentana.document.write("<!DOCTYPE html>"+
						"<html lang=\"en\">"+
						"<head>"+
							"<meta charset=\"UTF-8\">"+
							"<title>Nueva Ventana</title>"+
						"</head>"+
						"<body>"+
						"<p>Se han utilizado las propiedades: </p>"+
						"<ul>"+
						"<li>width:"+w.value+"px</li>"+
						"<li>height:"+h.value+"px</li>"+
						"</ul>"+
						"</body>"+
						"</html>");	

	miVentana.document.close();
		
	}
}
