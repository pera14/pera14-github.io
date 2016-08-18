var base_image;

var piunB; //11
var topB; //12
var konjB; //13
var lovacB; //14
var kraljicaB; //15
var kraljB; //16

var piunC; //21
var topB; //22
var konjC; //23
var lovacC; //24
var kraljicaC; //25
var kraljC; //26

var di = -1;
var dj = -1;

function onMousedown(e) {
	x = e.pageX;
	y = e.pageY;
	if(di == -1 && dj == -1){
		console.log('selektuj');
		//for(i=0; i<8; i++)
		//	for(j=0; j<8; j++)
		//		potez[i][j] = 0;
		
		di = Math.floor((y-32)/64);
		dj = Math.floor((x-32)/64);
		var figura = elements[di][dj];
		if(figura == 13 || figura == 23) // KONJ
		{
			var i1 = di-2;
			var j1 = dj-1;
			if(i1>=0 && i1<8 && j1>=0&&j1<8)
				potez[i1][j1] = 1;			
			i1 = di-2;
			j1 = dj+1;
			if(i1>=0 && i1<8 && j1>=0&&j1<8)
				potez[i1][j1] = 1;
			i1 = di+2;
			j1 = dj-1;
			if(i1>=0 && i1<8 && j1>=0&&j1<8)
				potez[i1][j1] = 1;
			i1 = di+2;
			j1 = dj+1;
			if(i1>=0 && i1<8 && j1>=0&&j1<8)
				potez[i1][j1] = 1;
			i1 = di-1;
			j1 = dj-2;
			if(i1>=0 && i1<8 && j1>=0&&j1<8)
				potez[i1][j1] = 1;
			i1 = di-1;
			j1 = dj+2;
			if(i1>=0 && i1<8 && j1>=0&&j1<8)
				potez[i1][j1] = 1;
			i1 = di+1;
			j1 = dj-2;
			if(i1>=0 && i1<8 && j1>=0&&j1<8)
				potez[i1][j1] = 1;
			i1 = di+1;
			j1 = dj+2;
			if(i1>=0 && i1<8 && j1>=0&&j1<8)
				potez[i1][j1] = 1;		
			
		}
		else if(figura == 12 || figura == 22)//Top
		{
			for(j=0; j<8; j++){
				potez[di][j] = 1;		
			}
			for(i=0; i<8; i++){
				potez[i][dj] = 1;		
			}
		}else if(figura == 14 || figura == 24) //Lovac
		{
			for(i=1; i<8; i++){
				ii = di-i
				jj = dj+i
				if(ii>=0 && ii<8 && jj>=0&&jj<8)
					potez[ii][jj] = 1;	
			}for(i=1; i<8; i++){
				ii = di+i
				jj = dj+i
				if(ii>=0 && ii<8 && jj>=0&&jj<8)
					potez[ii][jj] = 1;	
			}for(i=1; i<8; i++){
				ii = di+i
				jj = dj-i
				if(ii>=0 && ii<8 && jj>=0&&jj<8)
					potez[ii][jj] = 1;	
			}for(i=1; i<8; i++){
				ii = di-i
				jj = dj-i
				if(ii>=0 && ii<8 && jj>=0&&jj<8)
					potez[ii][jj] = 1;	
			}
		}
		if(figura == 16 || figura == 26){
			var i1 = di-1;
			var j1 = dj-1;
			if(i1>=0 && i1<8 && j1>=0&&j1<8)
				potez[i1][j1] = 1;			
			i1 = di-1;
			j1 = dj+1;
			if(i1>=0 && i1<8 && j1>=0&&j1<8)
				potez[i1][j1] = 1;
			i1 = di+1;
			j1 = dj-1;
			if(i1>=0 && i1<8 && j1>=0&&j1<8)
				potez[i1][j1] = 1;
			i1 = di+0;
			j1 = dj+1;
			if(i1>=0 && i1<8 && j1>=0&&j1<8)
				potez[i1][j1] = 1;
			i1 = di-0;
			j1 = dj-1;
			if(i1>=0 && i1<8 && j1>=0&&j1<8)
				potez[i1][j1] = 1;
			i1 = di+1;
			j1 = dj+0;
			if(i1>=0 && i1<8 && j1>=0&&j1<8)
				potez[i1][j1] = 1;
			i1 = di+1;
			j1 = dj+1;
			if(i1>=0 && i1<8 && j1>=0&&j1<8)
				potez[i1][j1] = 1;
			i1 = di-1;
			j1 = dj+0;
			if(i1>=0 && i1<8 && j1>=0&&j1<8)
				potez[i1][j1] = 1;		
			
		}
		if(figura == 11 )
		{//kralj
			var i1 = di+1;
			var j1 = dj-0;
			if(i1>=1 && i1<8 && j1>=0&&j1<8)
				potez[i1][j1] = 1;			
		}
		if(figura == 11 )
		{//piun
			var i1 = di+2;
			var j1 = dj-0;
			if(i1>=3 && i1<4  && dj>=0&&dj<8)
				potez[i1][j1] = 1;			
		}
		if(figura == 21 )
		{//piun
			var i1 = di-1;
			var j1 = dj-0;
			if(i1>=0 && i1<8 && j1>=0&&j1<8)
				potez[i1][j1] = 1;			
		}
		if(figura == 21 )
		{//piun
			var i1 = di-2;
			var j1 = dj-0;
			if(i1>3 && i1<=5  && dj>=0&&dj<8)
				potez[i1][j1] = 1;			
		}
		else if(figura == 15 || figura == 25) 
		{//kraljica
			for(i=1; i<8; i++){
				ii = di-i
				jj = dj+i
				if(ii>=0 && ii<8 && jj>=0&&jj<8)
					potez[ii][jj] = 1;	
			}for(i=1; i<8; i++){
				ii = di+i
				jj = dj+i
				if(ii>=0 && ii<8 && jj>=0&&jj<8)
					potez[ii][jj] = 1;	
			}for(i=1; i<8; i++){
				ii = di+i
				jj = dj-i
				if(ii>=0 && ii<8 && jj>=0&&jj<8)
					potez[ii][jj] = 1;	
			}for(i=1; i<8; i++){
				ii = di-i
				jj = dj-i
				if(ii>=0 && ii<8 && jj>=0&&jj<8)
					potez[ii][jj] = 1;	
			}for(j=0; j<8; j++){
				potez[di][j] = 1;		
			}
			for(i=0; i<8; i++){
				potez[i][dj] = 1;		
			}
		}0
		
			
		
	}else{
		console.log('deselektuj');
		ddi = Math.floor((y-32)/64);
		ddj = Math.floor((x-32)/64);
		if(ddi==di && ddj==dj){
			alert('greska');
		}else{
			elements[ddi][ddj] = elements[di][dj];
			elements[di][dj] = 0;

			for(i=0; i<8; i++)
				for(j=0; j<8; j++)
					potez[i][j] = 0;
		}
		di = -1;
		dj = -1;
	}
	draw();
}
function onMousemove(e) {
	x = e.pageX;
	y = e.pageY;
}

function make_base(){
	var canvas = document.getElementById("canvas");
	if (canvas == null || !canvas.getContext) 
		return;

	var ctx=canvas.getContext("2d");

	piunB = new Image();
	piunB.src = 'piunB.png';
	piunB.onload = function()
	{
		ctx.drawImage(piunB, 0+32, 64+32);
		ctx.drawImage(piunB, 64+32, 64+32);
		ctx.drawImage(piunB, 2*64+32, 64+32);
		ctx.drawImage(piunB, 3*64+32, 64+32);
		ctx.drawImage(piunB, 4*64+32, 64+32);
		ctx.drawImage(piunB, 5*64+32, 64+32);
		ctx.drawImage(piunB, 6*64+32, 64+32);
		ctx.drawImage(piunB, 7*64+32, 64+32);
	}
	konjB = new Image();
	konjB.src = 'konjB.png';
	konjB.onload = function()
	{
		ctx.drawImage(konjB, 64+32,0+32);
		ctx.drawImage(konjB, 512-64*2+32,0+32);
	}
	
	topB = new Image();
	topB.src = 'topB.png';
	topB.onload = function()
	{
		ctx.drawImage(topB, 0+32,0+32);
		ctx.drawImage(topB, 512-64+32, 0+32);
		
	}
	lovacB = new Image();
	lovacB.src = 'lovacB.png';
	lovacB.onload = function()
	{
		ctx.drawImage(lovacB, 64*2+32,0+32);
		ctx.drawImage(lovacB, 512-64*3+32, 0+32)		
	}
	kraljB = new Image();
	kraljB.src = 'kraljB.png';
	kraljB.onload = function()
	{
		ctx.drawImage(kraljB, 64*3+32,0+32);	
	}
	kraljicaB = new Image();
	kraljicaB.src = 'kraljicaB.png';
	kraljicaB.onload = function()
	{
		ctx.drawImage(kraljicaB, 64*4+32,0+32);	
	}
//========================================================================	
    piunC = new Image();
	piunC.src = 'piunC.png';
	piunC.onload = function()
	{
		ctx.drawImage(piunC, 32+0,512-2*64+32);
		ctx.drawImage(piunC, 64+32, 512-2*64+32);
		ctx.drawImage(piunC, 2*64+32, 512-2*64+32);
		ctx.drawImage(piunC, 3*64+32, 512-2*64+32);
		ctx.drawImage(piunC, 4*64+32, 512-2*64+32);
		ctx.drawImage(piunC, 5*64+32, 512-2*64+32);
		ctx.drawImage(piunC, 6*64+32, 512-2*64+32);
		ctx.drawImage(piunC, 7*64+32, 512-2*64+32);
	}
	
	konjC = new Image();
	konjC.src = 'konjC.png';
	konjC.onload = function()
	{
		ctx.drawImage(konjC, 64+32,512-64+32);
		ctx.drawImage(konjC, 512-64*2+32,512-64+32);
	}
	
	topC = new Image();
	topC.src = 'topC.png';
	topC.onload = function()
	{
		ctx.drawImage(topC, 0+32,512-64+32);
		ctx.drawImage(topC, 512-64+32,512-64+32);
	}
	
	lovacC = new Image();
	lovacC.src = 'lovacC.png';
	lovacC.onload = function()
	{
		ctx.drawImage(lovacC, 64*2+32,512-64+32);
		ctx.drawImage(lovacC, 512-64*3+32, 512-64+32);
	}
	
	kraljC = new Image();
	kraljC.src = 'kraljC.png';
	kraljC.onload = function()
	{
		ctx.drawImage(kraljC, 64*3+32,512-64+32);	
	}
	
	kraljicaC = new Image();
	kraljicaC.src = 'kraljicaC.png';
	kraljicaC.onload = function()
	{
		ctx.drawImage(kraljicaC, 64*4+32,512-64+32);	
	}
}

var elements = [ [12, 13, 14, 16, 15, 14, 13, 12],
			     [11, 11, 11, 11, 11, 11, 11, 11],
			     [ 0,  0,  0,  0,  0,  0,  0,  0],
			     [ 0,  0,  0,  0,  0,  0,  0,  0],
			     [ 0,  0,  0,  0,  0,  0,  0,  0],
			     [ 0,  0,  0,  0,  0,  0,  0,  0],
			     [21, 21, 21, 21, 21, 21, 21, 21],
			     [22, 23, 24, 26, 25, 24, 23, 22]
			   ];
var potez = [   [0, 0, 0, 0, 0, 0, 0, 0],
			    [0, 0, 0, 0, 0, 0, 0, 0],
			    [0, 0, 0, 0, 0, 0, 0, 0],
			    [0, 0, 0, 0, 0, 0, 0, 0],
			    [0, 0, 0, 0, 0, 0, 0, 0],
			    [0, 0, 0, 0, 0, 0, 0, 0],
			    [0, 0, 0, 0, 0, 0, 0, 0],
			    [0, 0, 0, 0, 0, 0, 0, 0]
			   ];
			   
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
	for(i=32; i<=512+32; i+=64){
		ctx.moveTo(i,0+32);
		ctx.lineTo(i,512+32);
	}
	for(j=32; j<=512+32; j+=64){
		ctx.moveTo(32,j);
		ctx.lineTo(512+32,j);
	}
	
	// crtanje table
	for(i=0; i<8;i++){
		for(j=0; j<8; j++)
        {
		    xx = 64*j+32;
		    yy = 64*i+32;

		    if((i+j)%2 == 0){
				if(potez[i][j] == 1)
				{
					ctx.fillStyle = 'rgba('+(255)+','+(255)+', '+(0)+', 255)';
				}else{
					ctx.fillStyle = 'white';
				}
		    } else {
				if(potez[i][j] == 1)
				{
					ctx.fillStyle = 'rgba('+(255)+','+(255)+', '+(0)+', 255)';
				}else{
					ctx.fillStyle = 'rgba('+(97)+','+(56)+', '+(11)+', 255)';
				}
		    }
			if(i==di && j==dj)
				ctx.fillStyle = 'rgba('+(61)+','+(36)+', '+(19)+', 255)';
			
		    ctx.fillRect(xx,yy,xx+64,yy+64);
        }
    }
	ctx.stroke();
	
	// nacrtaj figure
	for(i=0; i<8; i++)
		for(j=0; j<8; j++)
		{
			//console.log(i+' '+j+' '+elements[i][j]);
			if(elements[i][j] == 11)
				ctx.drawImage(piunB, j*64+32, i*64+32);
			else if(elements[i][j] == 12)
				ctx.drawImage(topB, j*64+32, i*64+32);
			else if(elements[i][j] == 13)
				ctx.drawImage(konjB, j*64+32, i*64+32);
			else if(elements[i][j] == 14)
				ctx.drawImage(lovacB, j*64+32, 32+i*64);
			else if(elements[i][j] == 15)
				ctx.drawImage(kraljicaB, 32+j*64, 32+i*64);
			else if(elements[i][j] == 16)
				ctx.drawImage(kraljB, 32+j*64, 32+i*64);
			else if(elements[i][j] == 21)
				ctx.drawImage(piunC, j*64+32, i*64+32);
			else if(elements[i][j] ==22)			
				ctx.drawImage(topC, j*64+32, 32+i*64);
			else if(elements[i][j] == 23)
				ctx.drawImage(konjC, j*64+32, i*64+32);
			else if(elements[i][j] == 24)
				ctx.drawImage(lovacC, j*64+32, 32+i*64);
			else if(elements[i][j] == 25)
				ctx.drawImage(kraljicaC, j*64+32, 32+i*64);
			else if (elements[i][j] == 26)
				ctx.drawImage(kraljC, j*64+32, i*64+32);		
		}
    ctx.stroke();
}	


function init(){
	var canvas = document.getElementById("canvas");
	if (canvas == null || !canvas.getContext) 
		return;

	canvas.addEventListener('mousemove', onMousemove, false);
	canvas.addEventListener('mousedown', onMousedown, false);

	make_base();
	draw();
}