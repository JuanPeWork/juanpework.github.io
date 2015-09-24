window.onload=function(){

	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	ctx.beginPath();
	ctx.fillStyle = '#00B02D';
	ctx.arc(10, 10, 10, 0, 2 * Math.PI);
	ctx.fill();

	ctx.fillStyle = "#FFFFFF";
	ctx.fillRect(9,7,2,6);

	ctx.fillStyle = "#FFFFFF";
	ctx.fillRect(7,9,6,2);

}