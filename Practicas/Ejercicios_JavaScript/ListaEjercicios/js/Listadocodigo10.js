/*
*Implementa MultiplicaImpares que multiplique los 20 
*primeros números impares y muestre el resultado en pantalla.
*
*JuanPedro 
*/
function MultiplicaImpares(){
	var num = 0, resul= 1,cont=0;
	document.write("<h1>Numeros Impares</h1>");

	do{
		num++;

		if(num % 2 != 0){
			document.write("<p>"+num+"</p>");
			resul=resul*num;
			cont++;
		}

	}while(cont<20);


	document.write("<p>Resultado: "+resul+"</p>");
}