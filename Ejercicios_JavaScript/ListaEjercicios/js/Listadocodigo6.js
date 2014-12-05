/*Implementa OrdenaTres que pida tres números y los muestre ordenados de menor a mayor. 
*
*JuanPedro
* 
*/
window.onload=function(){
	var valor1, valor2, valor3, boton;

		valor1 = document.getElementById("num1");
		valor2 = document.getElementById("num2");
		valor3 = document.getElementById("num3");

		boton = document.getElementById("btn");

		boton.onclick = function(){

			if(valor1.value!=valor2.value && valor2.value!=valor3.value && valor3.value!=valor1.value){

				if(valor1.value < valor2.value && valor2.value < valor3.value){
					document.write('<p>'+valor1.value+'<'+valor2.value+'<'+valor3.value+'</p>');
				}
				else if(valor1.value < valor2.value && valor2.value > valor3.value){
					document.write('<p>'+valor1.value+'<'+valor3.value+'<'+valor2.value+'</p>');
				}
				else if(valor2.value < valor1.value && valor1.value < valor3.value){
					document.write('<p>'+valor2.value+'<'+valor1.value+'<'+valor3.value+'</p>');
				}
				else if(valor2.value < valor3.value && valor3.value > valor1.value){
					document.write('<p>'+valor2.value+'<'+valor3.value+'<'+valor1.value+'</p>');
				}
				else if(valor3.value < valor1.value && valor1.value > valor2.value){
					document.write('<p>'+valor3.value+'<'+valor2.value+'<'+valor1.value+'</p>');
				}
				else if(valor3.value < valor2.value && valor2.value > valor1.value){
					document.write('<p>'+valor3.value+'<'+valor2.value+'<'+valor1.value+'</p>');
				}

			}

			else{
				document.write('<p>No puede coincidir ningún numero</p>');
			}
		}
}