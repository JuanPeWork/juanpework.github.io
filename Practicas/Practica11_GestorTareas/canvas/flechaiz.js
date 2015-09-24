window.onload = function(){

            var canvas = document.getElementById("flechaizq");
            if (canvas.getContext){
               var ctx = canvas.getContext("2d");
               drawcanvas(ctx);
            }
            else{
               alert("Canvas NOT supported");
            }
         
         function drawcanvas(ctx){

                            //Shape0;
               ctx.shadowColor ="rgba(0,0,0,0)";
               ctx.strokeStyle ="rgba(255,255,255,1)";
               ctx.lineWidth = 10;
               ctx.lineCap = "butt";
               ctx.lineJoin = "miter";
               ctx.beginPath();
               ctx.moveTo(26,36);
               ctx.lineTo(14,44);
               ctx.lineTo(14,28);
               ctx.lineTo(26,36);
               ctx.closePath();
               ctx.stroke();
               ctx.shadowOffsetX = 15;
               ctx.shadowOffsetY = -15;
               ctx.shadowBlur = 0;
               ctx.shadowColor = "rgba(0,0,0,0)";
               ctx.fillStyle = "rgba(255,255,255,1)";
               ctx.fill();

               //Shape2;
               ctx.shadowColor ="rgba(0,0,0,0)";
               ctx.strokeStyle ="rgba(255,255,255,1)";
               ctx.lineWidth = 10;
               ctx.lineCap = "butt";
               ctx.lineJoin = "miter";
               ctx.beginPath();
               ctx.moveTo(51,36);
               ctx.lineTo(40,44);
               ctx.lineTo(40,29);
               ctx.lineTo(51,36);
               ctx.closePath();
               ctx.stroke();
               ctx.shadowOffsetX = 15;
               ctx.shadowOffsetY = -15;
               ctx.shadowBlur = 0;
               ctx.shadowColor = "rgba(0,0,0,0)";
               ctx.fillStyle = "rgba(255,255,255,1)";
               ctx.fill();
         }
}