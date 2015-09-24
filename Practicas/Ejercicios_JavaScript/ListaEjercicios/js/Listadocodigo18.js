/*18. Implementa PorLineas que visualice los números del 0 al 100 separados por comas. Cada múltiplo de 7 ha de comenzar en una línea nueva. 
*
*
*JuanPedro
* 
*/

document.write("<p>");

for (var i = 0; i <= 100; i++) {

	if(i%7 == 0 && i!=0){
		document.write("</p><p>"+i+", ");
	}
	else{
		document.write(i+", ");
	}

}
document.write("</p>");