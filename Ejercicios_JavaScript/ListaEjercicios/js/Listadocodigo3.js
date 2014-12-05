/*
*Implementa MultiplosDeCinco que pida 7 números e indique si alguno es múltiplo de 5
*
 */

window.onload= function(){
		var valor, valor2, valor3, valor4, valor5, valor6, valor7;
				valor=document.getElementById("num");
				valor2=document.getElementById("num2");
				valor3=document.getElementById("num3");
				valor4=document.getElementById("num4");
				valor5=document.getElementById("num5");
				valor6=document.getElementById("num6");
				valor7=document.getElementById("num7");
				var boton=document.getElementById("btn");



				boton.onclick=function(){

					if(valor.value%5 == 0){
						document.write('<p>'+valor.value+' es múltiplo de 5</p>');
					}
					if(valor2.value%5 == 0){
						document.write('<p>'+valor2.value+' es múltiplo de 5</p>');
					}
					if(valor3.value%5 == 0){
						document.write('<p>'+valor3.value+' es múltiplo de 5</p>');
					}
					if(valor4.value%5 == 0){
						document.write('<p>'+valor4.value+' es múltiplo de 5</p>');
					}
					if(valor5.value%5 == 0){
						document.write('<p>'+valor5.value+' es múltiplo de 5</p>');
					}
					if(valor6.value%5 == 0){
						document.write('<p>'+valor6.value+' es múltiplo de 5</p>');
					}
					if(valor7.value%5 == 0){
						document.write('<p>'+valor7.value+' es múltiplo de 5</p>');
					}


				}



}