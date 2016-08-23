var t0={x:100,y:100};
var t1={x:90,y:100};
var t2={x:90,y:110};
var t3={x:100,y:110};
var n=120;
var k=4;
function nova_tacka(tt1,tt2){
	var retVal = {x:0,y:0};
	retVal.x=tt1.x+1.1*(tt2.x-tt1.x);
	retVal.y=tt1.y+1.1*(tt2.y-tt1.y);
	return retVal;
}

function draw() {
	var canvas = document.getElementById("canvas");
	if (canvas == null || !canvas.getContext) 
		return;

	var ctx=canvas.getContext("2d");
	ctx.clearRect(0, 0, canvas.width, canvas.height); // Clears the canvas
	ctx.stroke();
	ctx.beginPath();
	var x0 = 0.5*canvas.width;  // x0 pixels from left to x=0
	var y0 = 0.5*canvas.height; // y0 pixels from top to y=0
	var width = canvas.width;
	var height = canvas.height;
	ctx.clearRect(0, 0, width, height);
 
	var t0={x:512,y:512};
	var t1={x:512-50,y:512};
	var t2={x:512-50,y:512+50};
	var t3={x:512,y:512+50};
	var t= [];
	t.push(t0);
	t.push(t1);
	t.push(t2);
	if(k==4){
		t.push(t3); 
	}
	ctx.moveTo(t3.x, t3.y);
	for(i =k;i<n;i++){
		var tt = nova_tacka(t[i-1],t[i-k]);
		t.push(tt);
		ctx.lineTo(tt.x, tt.y);
	}
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
function uradi2()
{
	n=document.getElementById("textBox").value;
	k=4;
	var canvas = document.getElementById("canvas");
	if (canvas == null || !canvas.getContext) 
		return;

	var ctx=canvas.getContext("2d");
	ctx.clearRect(0, 0, canvas.width, canvas.height); // Clears the canvas
	ctx.stroke();
	draw();
}
function uradi3()
{
	n=document.getElementById("textBox").value;
	n=n/2;
	k=3;
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