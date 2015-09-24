/*Implementa ComprobacionFecha que solicite el día, el mes y el año e indique si la fecha es correcta. Si lo fuera, ha de mostrar el día después. 
*
*JuanPedro
* 
*/
window.onload=function(){
	var fecha, f, fechaActual;
		f = new Date();
		fecha=document.getElementById("fech");
		boton=document.getElementById("btn");
		if(f.getDate()<10){
			fechaActual = f.getFullYear() + "-" + (f.getMonth() +1) + "-0" +  f.getDate();
		}
		else{
			fechaActual = f.getFullYear() + "-" + (f.getMonth() +1) + "-" +  f.getDate();
		}
		fechaActual = f.getFullYear() + "-" + (f.getMonth() +1) + "-" +  f.getDate(); 
		boton.onclick=function(){
			if(fecha.value == fechaActual){
				document.write("<p>Fecha correcta</p>");
				document.write(f.getFullYear() + "-" + (f.getMonth() +1) + "-" +  (f.getDate()+1));
			}
			else{
				document.write("<p>Fecha incorrecta</p>");
			}
		}

}