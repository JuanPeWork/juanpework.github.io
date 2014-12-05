/*13. Implementa  ProductoPotencias que calcule y visualice el producto de las potencias de 2 entre 0 y 10. 
*
*
*JuanPedro
* 
*/

window.onload = function(){
	var resultado;
	for (var i = 0; i <= 10; i++) {
		resultado=Math.pow(2,i);
		document.write('<p>2^'+i+' = '+resultado+'</p>');
	};
}