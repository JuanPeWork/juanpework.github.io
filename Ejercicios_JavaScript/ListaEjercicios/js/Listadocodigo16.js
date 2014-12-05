/*16. Implementa Pirámide que mediante un bucle for visualice una pirámide del siguiente tipo: 
*1 
*22 
*333 
*4444 
*55555 
*666666 
*7777777 
*88888888 
*999999999 
*0000000000 
*
*JuanPedro
* 
 */

window.onload=function(){

	boton=document.getElementById("btn");

	boton.onclick=function(){
		for (var i = 1; i <= 10; i++) {

			document.write("<p>");

			for (var j = 1; j <= i; j++) {
				if(i != 10){
				document.write(i)
				}
			};
			if(i==10){
				document.write("0000000000");
			}

			document.write("</p>");


		};
	}

}