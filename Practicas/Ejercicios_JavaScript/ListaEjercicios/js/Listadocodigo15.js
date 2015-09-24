/*15. Implementa MuestraDelUnoAlN que pida un número entero y que muestre la secuencia del 1 al número indicado.
* En caso de no poder generarse la secuencia (menor que 1), que lo indique. 
*
*JuanPedro
* 
*/

window.onload=function(){

	valor=document.getElementById("num");
	boton=document.getElementById("btn");

	boton.onclick=function(){
		var num=Math.ceil(valor.value);

		if(num>=1){

			document.write('<p>');
			for (var i = 1 ; i <= num; i++) {
				document.write(i+" ");

			}
			document.write('</p>');
	
		}
		else{
			document.write('Debes introducir un numero mayor de 1');
		}
		

		};
	}
