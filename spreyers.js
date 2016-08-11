var br = 1;
var provera = 1;

var obj3 = {x:600/2, y:600/2, r:600/2};
var prskalice = [];
var poligoni = [];
var poligon = [];
var navodnjavanje = [];

var currPosition = null;
var trt = true;
var canvasOffsetY = 0;
var canvasOffsetX = 0;

function onMousedown(e){
	x = e.pageX- canvasOffsetX-5-2;
	y = e.pageY- canvasOffsetY-10-5;	
	poligon.push({"x":x, "y":y});
	draw();
}

function onDoubleClick(e){
	x = e.pageX- canvasOffsetX-5-2;
	y = e.pageY- canvasOffsetY-10-5;
	
	poligon.push({"x":x, "y":y});
	poligon.push({"x":poligon[0].x,"y":poligon[0].y});
	draw();
	poligoni.push(poligon);
	poligon = [];
}

function onMousemove(e){
	x = e.pageX;
	y = e.pageY;
	
	currPosition = {'x': x, 'y':y};
	draw();
}//

function crtajPoligone(ctx){
	if(poligoni.length !=0){
		for(var j=0; j<poligoni.length; j++){
			ctx.beginPath();
			var niz = poligoni[j];
			ctx.moveTo(niz[0].x,niz[0].y);
			for(var i=0;i<niz.length;i++){
				ctx.lineTo(niz[i].x, niz[i].y);
			}
			ctx.stroke();
		}
	}
}

function polygon(ctx,niz){
	ctx.beginPath();
	if(niz.length !=0){
		ctx.moveTo(niz[0].x,niz[0].y);
		for(var i=0;i<niz.length;i++){
			ctx.lineTo(niz[i].x, niz[i].y);
		}
		ctx.stroke();
	}
}

function draw(){
	var canvas = document.getElementById("canvas");
	if (canvas == null || !canvas.getContext) 
		return;
	var ctx=canvas.getContext("2d");
	ctx.clearRect(0, 0, canvas.width, canvas.height); // Clears the canvas
	ctx.stroke();
	ctx.beginPath();
	var x0 = 0.5*canvas.width;  
	var y0 = 0.5*canvas.height; 
	var width = canvas.width;
	var height = canvas.height;
	ctx.stroke();
	ctx.beginPath();
	ctx.fillStyle = "#0000ff";
	ctx.arc(600/2,600/2,20/2, 0, 2*Math.PI);
	ctx.closePath();
	ctx.fill();
	
	if(trt){
		ctx.beginPath();
		ctx.arc(300,300,300, 0, 2*Math.PI);
		ctx.stroke();
	}

	if(navodnjavanje.length !=0){
		for(var j=0; j<navodnjavanje.length; j++){
			ctx.beginPath();
			var p = navodnjavanje[j];			
			ctx.beginPath();
			ctx.fillStyle = "#55aa55";
			ctx.arc(p.x, p.y, 5, 0, 2*Math.PI);
			ctx.closePath();
			ctx.fill();						
		}
	}	
	
	for(var i=0; i<10; i++){
		ctx.beginPath();
		ctx.fillStyle = prskalice[i].boja;
		ctx.arc(prskalice[i].x,prskalice[i].y,prskalice[i].r, 0, 2*Math.PI);
		ctx.closePath();
		ctx.fill();
	}
	ctx.beginPath();
	ctx.moveTo(600/2, 600/2);
	ctx.lineTo(obj3.x, obj3.y);
	ctx.stroke();
	
	ctx.beginPath();
	ctx.moveTo(0, 0);
	ctx.lineTo(height, 0);
	ctx.lineTo(height, width);
	ctx.lineTo(0, width);
	ctx.lineTo(0, 0);
	ctx.stroke();
	
	polygon(ctx,poligon);
	crtajPoligone(ctx);
	ctx.stroke();
 
}
var d = 0
var ugao = 0;
var dt = 1;
var trenutniKrug =1;

function pomeranje(){	
	d += 1;
	ugao =d;
	if(ugao%360==0 || ugao ==0){
		trenutniKrug = (ugao/360) +1;
		console.log(trenutniKrug);
	}
	for(var i=0; i<10; i++){
		prskalice[i].x = 600/2+(60/2*(i)+50/2)*Math.sin(d*Math.PI/180);
		prskalice[i].y = 600/2+(60/2*(i)+50/2)*Math.cos(d*Math.PI/180);
		if(poligoni.length ==0){
			for(k=0;k<prskalice.length;k++)
				prskalice[k].boja = "#ff0000";
		}
		for(j=0;j<poligoni.length;j++){
			if(PointInPolygon(poligoni[j],prskalice[i])){
				prskalice[i].boja = "#00ff00";
				navodnjavanje.push({"x":prskalice[i].x, "y":prskalice[i].y});
				if(navodnjavanje.length>200)
					navodnjavanje.splice(0, 1);
				break;
			}
			else
				prskalice[i].boja = "#ff0000";
		}
	}	
	obj3.x = 600/2+(600/2)*Math.sin(d*Math.PI/180);
	obj3.y = 600/2+(600/2)*Math.cos(d*Math.PI/180);
	draw();
}

function PointInPolygon(niz, point){
    var nvert = niz.length;
    var i;
	var j;
    var c = false;
    for (i = 0, j = nvert-1; i < nvert; j = i++) {
        if ( ((niz[i].y>point.y) != (niz[j].y>point.y)) &&
                (point.x < 
				(niz[j].x-niz[i].x) * (point.y-niz[i].y) / 
				(niz[j].y-niz[i].y) + niz[i].x))
            c = !c;
    }
    return c;
}  
function uradi1(){
	if(trt == true){
		document.getElementById("dugme1").className  = "button green";
		trt = false;
	}
	else{
		document.getElementById("dugme1").className  = "button gray";
		trt = true;
	}
}

function init(){
	var canvas = document.getElementById("canvas");
    var bodyRect = document.body.getBoundingClientRect();
	var canvasRect = canvas.getBoundingClientRect();
	canvasOffsetY = canvasRect.top - bodyRect.top;
	canvasOffsetX = canvasRect.left - bodyRect.left;
	
	if (canvas == null || !canvas.getContext) 
		return;
	poligon.push({x:100,y:100});
	poligon.push({x:200,y:100});
	poligon.push({x:200,y:200});
	poligon.push({x:100,y:200});
	poligon.push({x:100,y:100});
	poligoni.push(poligon);

	poligon = [];	
	poligon.push({x:100,y:350});
	poligon.push({x:350,y:350});
	poligon.push({x:350,y:450});
	poligon.push({x:100,y:450});
	poligon.push({x:100,y:350});
	poligoni.push(poligon);
	poligon = [];
	
	poligon.push({x:393,y:62});
	poligon.push({x:313,y:174});
	poligon.push({x:418,y:265});
	poligon.push({x:523,y:202});
	poligon.push({x:393,y:62});
	poligoni.push(poligon);
	poligon = [];

	
	for(var i=0; i<10; i++){
		prskalice.push({x:600/2, y:600/2+60/2*(i)+50/2, r:10/2, });
	}	
	obj3.x = 600/2+(600/2)*Math.sin(d*Math.PI/180);
	obj3.y = 600/2+(600/2)*Math.cos(d*Math.PI/180);
	canvas.addEventListener('mousedown', onMousedown, false);
	canvas.addEventListener('dblclick', onDoubleClick, false);
	var id = setInterval(pomeranje, 20)
	draw();
}