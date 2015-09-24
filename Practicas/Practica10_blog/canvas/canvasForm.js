window.onload = function(){
		
		var elemento = document.getElementById("micanvas");
		if (elemento && elemento.getContext) {
			//Accedo al contexto de '2d' de este canvas, necesario para dibujar
			var contexto = elemento.getContext('2d');

				contexto.fillRect(0, 0, 100, 150);
				contexto.fillStyle = 'white';				
				contexto.fillRect(2, 2, 96, 146);
				contexto.fillStyle = 'black';
				contexto.fillRect(10, 10, 30, 30);
				contexto.fillStyle = 'white';
				contexto.fillRect(11, 11, 28, 28);
				
				contexto.beginPath();
				contexto.moveTo(45, 10);
				contexto.lineTo(95, 10);
				contexto.stroke();

				contexto.beginPath();
				contexto.moveTo(45, 20);
				contexto.lineTo(95, 20);
				contexto.stroke();

				contexto.beginPath();
				contexto.moveTo(45, 30);
				contexto.lineTo(95, 30);
				contexto.stroke();	

				contexto.beginPath();
				contexto.moveTo(45, 40);
				contexto.lineTo(95, 40);
				contexto.stroke();			

				contexto.beginPath();
				contexto.moveTo(10, 50);
				contexto.lineTo(95, 50);
				contexto.stroke();

				contexto.beginPath();
				contexto.moveTo(10, 60);
				contexto.lineTo(95, 60);
				contexto.stroke();

				contexto.beginPath();
				contexto.moveTo(10, 70);
				contexto.lineTo(95, 70);
				contexto.stroke();

				contexto.beginPath();
				contexto.moveTo(10, 80);
				contexto.lineTo(95, 80);
				contexto.stroke();

				contexto.beginPath();
				contexto.moveTo(10, 90);
				contexto.lineTo(95, 90);
				contexto.stroke();

				contexto.beginPath();
				contexto.moveTo(10, 100);
				contexto.lineTo(95, 100);
				contexto.stroke();

				contexto.beginPath();
				contexto.moveTo(10, 110);
				contexto.lineTo(95, 110);
				contexto.stroke();

				contexto.beginPath();
				contexto.moveTo(10, 120);
				contexto.lineTo(95, 120);
				contexto.stroke();

				contexto.beginPath();
				contexto.moveTo(10, 130);
				contexto.lineTo(95, 130);
				contexto.stroke();

		}

		var elemento = document.getElementById("micanvas2");
		if (elemento && elemento.getContext) {
			//Accedo al contexto de '2d' de este canvas, necesario para dibujar
			var contexto = elemento.getContext('2d');

				contexto.fillRect(0, 0, 100, 150);
				contexto.fillStyle = 'white';				
				contexto.fillRect(2, 2, 96, 146);
				contexto.fillStyle = 'black';
				contexto.fillRect(10, 10, 30, 30);
				contexto.fillStyle = 'white';
				contexto.fillRect(11, 11, 28, 28);
				
				contexto.beginPath();
				contexto.moveTo(45, 10);
				contexto.lineTo(95, 10);
				contexto.stroke();

				contexto.beginPath();
				contexto.moveTo(45, 20);
				contexto.lineTo(95, 20);
				contexto.stroke();

				contexto.beginPath();
				contexto.moveTo(45, 30);
				contexto.lineTo(95, 30);
				contexto.stroke();	

				contexto.beginPath();
				contexto.moveTo(45, 40);
				contexto.lineTo(95, 40);
				contexto.stroke();			

				contexto.beginPath();
				contexto.moveTo(10, 50);
				contexto.lineTo(95, 50);
				contexto.stroke();

				contexto.beginPath();
				contexto.moveTo(10, 60);
				contexto.lineTo(95, 60);
				contexto.stroke();

				contexto.beginPath();
				contexto.moveTo(10, 70);
				contexto.lineTo(95, 70);
				contexto.stroke();

				contexto.beginPath();
				contexto.moveTo(10, 80);
				contexto.lineTo(95, 80);
				contexto.stroke();

				contexto.beginPath();
				contexto.moveTo(10, 90);
				contexto.lineTo(95, 90);
				contexto.stroke();

				contexto.beginPath();
				contexto.moveTo(10, 100);
				contexto.lineTo(95, 100);
				contexto.stroke();

				contexto.beginPath();
				contexto.moveTo(10, 110);
				contexto.lineTo(95, 110);
				contexto.stroke();

				contexto.beginPath();
				contexto.moveTo(10, 120);
				contexto.lineTo(95, 120);
				contexto.stroke();

				contexto.beginPath();
				contexto.moveTo(10, 130);
				contexto.lineTo(95, 130);
				contexto.stroke(); 

	}
}

