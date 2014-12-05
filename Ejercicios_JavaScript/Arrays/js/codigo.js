window.onload = function(){
	var enlace1, enlace2;

	enlace1 = document.getElementById("link1");
	enlace2 = document.getElementById("link2");

	enlace1.onclick = function(){
	 window.parent.frames[1].location="Teoria.html";		
	}

	enlace2.onclick = function(){
			 window.parent.frames[0].location="Practica.html";
	}

}