/**
 *Implementa Decena que solicite un número entre 0 y 10 (9,76876) e indique:
 *	a. Cuántas cifras tiene (7 cifras)
 * b. Lo muestre del revés
 *
 *JuanPedro
 * 
 */

function Decena(){
	
	var elemento = document.getElementById("num").value;
	var numero = ""+elemento;

	document.write("<p>Cifras: " + numero.length + "</p>");
	 numero = numero.split("").reverse().join("")
	document.write("<p>Invertido: " + numero + "</p>");

}