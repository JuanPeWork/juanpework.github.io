window.onload = function(){
	var contenido = document.getElementById("contenido");

	contenido.innerHTML = "<table>"+
						  "<tr><td><p>Nombre:</p></td><td><p>"+document.universitario.getNombre()+"</p></td></tr>"+
						  "<tr><td><p>Apellido1:</p></td><td><p>"+document.universitario.getApellido1()+"</p></td></tr>"+
						  "<tr><td><p>Apellido2:</p></td><td><p>"+document.universitario.getApellido2()+"</p></td></tr>"+
						  "<tr><td><p>Edad:</p></td><td><p>"+document.universitario.getEdad()+"</p></td></tr>"+
						  "</table>";
}