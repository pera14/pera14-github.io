var obj1 = {x:200, y:200, r:15}
var obj2 = {x:200, y:200, r:15}
var obj3 = {x:200, y:300-7.5, r:100-7.5}
var obj4 = {}
var obj5 = {}
var obj6 = {}
var obj7 = {}
var obj8 = {}
var obj9 = {}
var prikazuj = false;
var ubrzaj = true;
var zaustavi = false;
var stop = false;

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
 

	ctx.stroke();
	ctx.beginPath();
	ctx.arc(200,200,200, 0, 2*Math.PI);
	ctx.fillStyle = 'red';
	ctx.fill();
	
	

	if(prikazuj == true){
	
		crtanjeKruga1(ctx,obj3);
		ctx.stroke();
		ctx.strokeStyle = '#000000';
		y1 = 0;
		yy = y1+400;
		ctx.moveTo(200, y1);
		ctx.lineTo(200, yy);
		
		ctx.stroke();
		x1 = 0;
		xx = x1+400
		ctx.moveTo(x1, 200);
		ctx.lineTo(xx, 200);
		
		ctx.stroke();
		var k2 = Math.sqrt(80000)
		var k1 = Math.sqrt(2)
		
		crtaj(ctx,-3*45);
		crtaj(ctx,3*45);
		crtaj(ctx,45);
		crtaj(ctx,-45);
		crtaj(ctx,45/2);
		crtaj(ctx,-45/2);
		crtaj(ctx,3*45/2);
		crtaj(ctx,5*45/2)
		crtaj(ctx,7*45/2);
		crtaj(ctx, 9*45/2);
		crtaj(ctx, 11*45/2);
		crtaj(ctx, 13*45/2);
	}

	crtanjeKruga(ctx, obj1);
	crtanjeKruga(ctx,obj2);
	crtanjeKruga(ctx, obj4);
	crtanjeKruga(ctx,obj5);
	crtanjeKruga(ctx, obj6);
	crtanjeKruga(ctx,obj7);
	crtanjeKruga(ctx,obj8);
	crtanjeKruga(ctx,obj9);
}
function crtanjeKruga(ctx, obj)
{
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(obj.x,obj.y,obj.r, 0, 2*Math.PI);
	ctx.fillStyle = "rgba(255, 255, 255, 1)";
	ctx.fill();
	ctx.stroke();
}
function crtanjeKruga1(ctx, obj)
{
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(obj.x,obj.y,obj.r, 0, 2*Math.PI);
	ctx.fillStyle = "rgba(200, 0, 0, 0.5)";
	ctx.fill();
	ctx.stroke();
}

function crtaj(ctx, y)
{
	ctx.beginPath();
	for (var i=1;i<=200;i+=5) {           //Centralni krug
		x1 = 200+i*Math.cos(y*Math.PI/180);
		y1 = 200+i*Math.sin(y*Math.PI/180);
		xx = 200+(i+5)*Math.cos(y*Math.PI/180);
		yy = 200+(i+5)*Math.sin(y*Math.PI/180);
		ctx.moveTo(x1,y1);

		ctx.lineTo(xx,yy);
		}
	ctx.stroke();
}
var d = 0
var t = 0;
var dt = 1;

function crtanje()
{	
	if(zaustavi == false){
		t += dt;
		if(ubrzaj == true){
			d += 1;
		}
		else 
			d +=2;
		if(t==185)
			dt = -1;
		if(t==-185)
			dt = 1;
		var T = 45;
		var T1 = 22.5
		var T2 = 45+22.5
		var T3 = 90+22.5
		var T4 = 90+45
		var T5 = 90+45+22.5
		
		crtanje_pomeranje(obj1,T2,d,false);
		crtanje_pomeranje(obj2,T3,d,false);
		
		obj3.x = 200+(100-7.5)*Math.cos(d*Math.PI/180);
		obj3.y = 200+(100-7.5)*Math.sin(d*Math.PI/180);

		obj4.r = 15;
		obj4.x = 200+2*((100-7.5)*Math.cos(d*Math.PI/180));
		obj4.y = 200;
		
		obj5.r = 15;
		obj5.x = 200;
		obj5.y = 200+2*((100-7.5)*Math.sin(d*Math.PI/180));
		
		crtanje_pomeranje(obj6,T,d,true);
		crtanje_pomeranje(obj7,T1,d,true);
		crtanje_pomeranje(obj8,T4,d,true);
		crtanje_pomeranje(obj9,T5,d,true);
		
	}
	draw();
}
function crtanje_pomeranje(obj,T,d, t)
{
	if(t==true){	
		obj.r = 15;
	}
	obj.x = 200+2*(100-7.5)*Math.cos((d-T)*Math.PI/180)*Math.cos(T*Math.PI/180);
	obj.y = 200+2*(100-7.5)*Math.cos((d-T)*Math.PI/180)*Math.sin(T*Math.PI/180);
}
function pomeranje(obj,T, t)
{
	var d = 78;
	if(t==true){	
		obj.r = 15;
	}
	obj.x = 200+2*(100-7.5)*Math.cos((d-T)*Math.PI/180)*Math.cos(T*Math.PI/180);
	obj.y = 200+2*(100-7.5)*Math.cos((d-T)*Math.PI/180)*Math.sin(T*Math.PI/180);
}

function init(){
	var d = 78;
	var T = 45
	var T1 = 22.5
	var T2 = 45+22.5
	var T3 = 90+22.5
	var T4 = 90+45
	var T5 = 90+45+22.5
	pomeranje(obj1,T2,false);
	pomeranje(obj2,T3,false);

	obj3.x = 200+(100-7.5)*Math.cos(d*Math.PI/180);
	obj3.y = 200+(100-7.5)*Math.sin(d*Math.PI/180);

	obj4.r = 15;
	obj4.x = 200+2*((100-7.5)*Math.cos(d*Math.PI/180));
	obj4.y = 200;
	
	obj5.r = 15;
	obj5.x = 200;
	obj5.y = 200+2*((100-7.5)*Math.sin(d*Math.PI/180));
	
	pomeranje(obj6,T,true);
	pomeranje(obj7,T1,true);
	pomeranje(obj8,T4,true);
	pomeranje(obj9,T5,true);

	var id = setInterval(crtanje, 20)
}
function uradi1()
{
	
	if(prikazuj==false){
		document.getElementById("dugme1").className  = "button green";
		prikazuj = true;
	
	}else{
		document.getElementById("dugme1").className  = "button gray ";
		prikazuj = false;
	}
}
function uradi2()
{	
	if(zaustavi == false)
	{
		if(ubrzaj==false)
		{
			document.getElementById("dugme2").className  = "button gray ";
			ubrzaj = true;
		}else{
			document.getElementById("dugme2").className  = "button green";
			ubrzaj = false;
		}
	}

}
function uradi3()
{
	if(zaustavi == false){
		ubrzaj = true; 
		document.getElementById("dugme2").className  = "button gray ";
		document.getElementById("dugme3").className  = "button green";
		zaustavi = true;} 
	else{
		document.getElementById("dugme3").className  = "button gray";
		zaustavi = false;
	}
}