var count;
var n=7500;
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
	var w2=width/2;
	crtanjeKruga(ctx,w2,w2,w2,"rgba(255, 255, 255, 1)");
	for(var i=0;i<n;i++)
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
		crtanjeKruga(ctx,x0+(x*w2),y0+(y*w2),5,color);
		
	}
	pi = 4.0* (c/n);
	
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
function uradi1()
{
	n=document.getElementById("textBox").value;
	//alert(n);
	var canvas = document.getElementById("canvas");
	if (canvas == null || !canvas.getContext) 
		return;

	var ctx=canvas.getContext("2d");
	ctx.clearRect(0, 0, canvas.width, canvas.height); // Clears the canvas
	ctx.stroke();
	draw();
}
function init(){
 
	
	draw();
}