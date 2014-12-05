window.onload = function(){
	var exe1, exe2, exe3, exe4, exe5, volver;


	exe1 = document.getElementById("ejer1");
	exe2 = document.getElementById("ejer2");
	exe3 = document.getElementById("ejer3");
	exe4 = document.getElementById("ejer4");
	exe5 = document.getElementById("ejer5");
	volver = document.getElementById("atras");


	exe1.onclick = function(){
	 	window.parent.frames[1].location="notas.html";		
	}
	exe2.onclick = function(){
	 	window.parent.frames[1].location="tablaDecimales.html";		
	}
	exe3.onclick = function(){
	 	window.parent.frames[1].location="secuencia.html";		
	}
	exe4.onclick = function(){
	 	window.parent.frames[1].location="sumaMatrices.html";		
	}
	exe5.onclick = function(){
	 	window.parent.frames[1].location="multiplicaMatrices.html";		
	}
	volver.onclick = function(){
		window.parent.frames[0].location="frameizq.html";
	}


}