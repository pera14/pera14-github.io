t = true;
//setInterval(function(){alert("Game Over")},10000);
function timer(time,update,complete) {
    var start = new Date().getTime();
    var interval = setInterval(function() {
        var now = time-(new Date().getTime()-start);
        if( now <= 0) {
            clearInterval(interval);
            complete();
        }
        else update(Math.floor(now/1000));
    },100); // the smaller this number, the more accurate the timer will be
}
timer(
    10000, // milliseconds
    function(timeleft) { // called every step to update the visible countdown
        document.getElementById('timer').innerHTML = timeleft+" second(s)";
    },
    function() { 
	// what to do after
		if(t==true){
			alert("Game Over");
		}
    }
);

 var base_image;
 var slika = {x:0, 
              y:0};
             //   0 1 2 3 4 5 6 7 8 9 A B C D E F
 var lavirint = [[0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0],
				 [0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0],
				 [1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0],
				 [0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0],
				 [0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0],
				 [0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0],
				 [0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0],
				 [1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,2]
 ]
function make_base(ctx)
{
	var canvas = document.getElementById("pera1");
	if (canvas == null || !canvas.getContext) 
		return null;

	var ctx=canvas.getContext("2d");

	base_image = new Image();
	base_image.src = 'tenk.png';
	base_image.onload = function(){
		ctx.drawImage(base_image, 0, 0);
	};
}

function draw() {
 var canvas = document.getElementById("pera1");
 if (canvas == null || !canvas.getContext)
 { 
	return null;
 }
 var ctx=canvas.getContext("2d");
 ctx.clearRect(0, 0, canvas.width, canvas.height); // Clears the canvas
 ctx.stroke();
 
 var x0 = 0.5*canvas.width;  // x0 pixels from left to x=0
 var y0 = 0.5*canvas.height; // y0 pixels from top to y=0
 var width = canvas.width;
 var height = canvas.height
 for(i=0;i<=1024;i+=64){
	ctx.moveTo(i,0)
	ctx.lineTo(i,height)
 }
 for(t=0;t<=512;t+=64){
	ctx.moveTo(0,t)
	ctx.lineTo(width,t)
 }
 for(i=0; i<8;i++){
   for(j=0; j<16; j++)
   {
		xx = 64*j;
		yy = 64*i;
		if(lavirint[i][j] ==1){
			ctx.fillStyle = 'gray';
		} else if(lavirint[i][j] ==2){
			ctx.fillStyle = 'green';
		}else if(lavirint[i][j]==3)
		{
			ctx.fillStyle = 'blue';
			
		}else{
			ctx.fillStyle = 'white';
			console.log(ctx.fillStyle);
		}
		ctx.fillRect(xx,yy,xx+64,yy+64);
   }
 }
 if(base_image != null)
	ctx.drawImage(base_image, slika.x, slika.y); 
 ctx.stroke();
}

window.addEventListener("keydown", onkeydown, true);

function onkeydown(event)
{
	var x = slika.x;
	var y = slika.y;
	if(event.keyCode == 37){		
		slika.x -=64;		
	}else if(event.keyCode == 38){
		slika.y -=64;
	}else if (event.keyCode == 39){
	    slika.x +=64;
	}else if (event.keyCode == 40){
	    slika.y +=64;
	}
	var i = slika.y/64;
	var j = slika.x/64;
	if(slika.x<0)
	   slika.x=0;
	if(slika.y<0)
	   slika.y=0;
	if(slika.x>1024-64)
	   slika.x=1024-64;
	if(slika.y>512-64)
	   slika.y=512-64;
	
	if(lavirint[i][j] == 1){
		slika.x = x;
		slika.y = y;
	}
	draw();
	if(slika.x == 1024-64 && slika.y == 512-64)
	{
		alert("You made it! :)");	
		t=false;
	}
}
var praviPut=[[]];
function fillEmptyMap(array, width, height) {
    for (var x = 0; x < width; x++) {
        array[x] = [];
        for (var y = 0; y < height; y++) {

            array[x][y] = [0];
        }
    }
}

var pozicije=[[]];
var n=0;

function uradi1()
{
	fillEmptyMap(praviPut,lavirint[0].length,lavirint[1].length);
	var trenutnaPocijia = {r:0,c:0};
	lavirint[trenutnaPocijia.r][trenutnaPocijia.c]=3;
	console.log("konj")
	while(trenutnaPocijia.r!=8 && trenutnaPocijia.c!=16){
		if(trenutnaPocijia.c+1<17 && lavirint[trenutnaPocijia.r][trenutnaPocijia.c+1]==0 || lavirint[trenutnaPocijia.r][trenutnaPocijia.c+1]==2){
			if(lavirint[trenutnaPocijia.r][trenutnaPocijia.c+1]==2)
				break;
			lavirint[trenutnaPocijia.r][trenutnaPocijia.c+1]=3;
			pozicije[n][0]=trenutnaPocijia.r;
			pozicije[n][1]=trenutnaPocijia.c;
			trenutnaPocijia.c=trenutnaPocijia.c+1;
			console.log("desno");
			
		}
		else if(trenutnaPocijia.r+1<9 && lavirint[trenutnaPocijia.r+1][trenutnaPocijia.c]==0 || lavirint[trenutnaPocijia.r+1][trenutnaPocijia.c]==2){
			if(lavirint[trenutnaPocijia.r+1][trenutnaPocijia.c]==2)
				break;
			lavirint[trenutnaPocijia.r+1][trenutnaPocijia.c]=3;
			pozicije[n][0]=trenutnaPocijia.r;
			pozicije[n][1]=trenutnaPocijia.c;
			trenutnaPocijia.r=trenutnaPocijia.r+1;
			console.log("dole");
		}
		else if(trenutnaPocijia.r!=0 && lavirint[trenutnaPocijia.r-1][trenutnaPocijia.c]==0 || lavirint[trenutnaPocijia.r-1][trenutnaPocijia.c]==2){
			if(lavirint[trenutnaPocijia.r-1][trenutnaPocijia.c]==2)
				break;
				lavirint[trenutnaPocijia.r-1][trenutnaPocijia.c]=3;
				pozicije[n][0]=trenutnaPocijia.r;
				pozicije[n][1]=trenutnaPocijia.c;
				trenutnaPocijia.r=trenutnaPocijia.r-1;
				console.log("gore");
			
		}
		else if(trenutnaPocijia.c!=0){
			if(lavirint[trenutnaPocijia.r][trenutnaPocijia.c-1]==2)
					break;
			if(lavirint[trenutnaPocijia.r][trenutnaPocijia.c-1]==0)
			{
				lavirint[trenutnaPocijia.r][trenutnaPocijia.c-1]=3;
				pozicije[n][0]=trenutnaPocijia.r;
				pozicije[n][1]=trenutnaPocijia.c;
				trenutnaPocijia.c=trenutnaPocijia.c-1;
				console.log("levo");
			}
		}
	}
	draw();
	
}
  
function init(){
	draw();
	make_base();
}