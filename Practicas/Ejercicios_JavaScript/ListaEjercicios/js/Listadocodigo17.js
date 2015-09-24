/*17. Implementa PiramideDos que mediante un bucle for visualice una pirámide del siguiente tipo:
*
*1
*12
*123
*1234
*12345
*123456
*1234567
*12345678
*123456789
*1234567890
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
				if(j != 10 ){
				document.write(j)

				}
				else{
					document.write("0");					
				}
				
			};

			document.write("</p>");


		};
	}

}