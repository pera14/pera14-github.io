var count;
var n;
var c= 0;
var x =0;
var y = 0;
var pi;

function draw() {
	var canvas = document.getElementById("canvas");
	if (canvas == null || !canvas.getContext) 
		return;

	var ctx=canvas.getContext("2d");
	ctx.clearRect(0, 0, canvas.width, canvas.height); // Clears the canvas
	ctx.stroke();

	var x0 = 0.5*canvas.width;  // x0 pixels from left to x=0
	var y0 = 0.5*canvas.height; // y0 pixels from top to y=0
	var width = canvas.width;
	var height = canvas.height;
	crtanjeKruga(ctx,500,500,500,"rgba(255, 255, 255, 1)");
	for(var i=0;i<100;i++)
	{
		y=getRandom(-1,1);
		x=getRandom(-1,1);
		console.log("x:	"+x);
		console.log("y:	"+y);
		var color = "rgba(255, 255, 255, 1)";
		
		if (((x * x) + (y * y) <= 1))
		{	
				c++;
				color = "rgba(255, 0, 0, 1)";
				
		}
		crtanjeKruga(ctx,x0+(x*500),y0+(y*500),5,color);
		
	}
	pi = 4.0* (c/100);
	
}


 
function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomizer(bottom, top) {
    
        return Math.floor( Math.random() * ( 1 + top - bottom ) ) + bottom;
    
}
function crtanjeKruga(ctx, x,y,r,color)
{
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(x,y,r, 0, 2*Math.PI);
	ctx.fillStyle = color;
	ctx.fill();
	ctx.stroke();
}
function init(){
 
	
	draw();
}