// JavaScript Document

var bub=new Array("image/unpoped1.png", "image/unpoped2.png", "image/unpoped3.png", "image/unpoped4.png")
var bubpoped=new Array("image/poped1.png", "image/poped2.png", "image/poped3.png", "image/poped4.png")


onload = init;

function init(){
	

		for(var i=0; i<20; i++){
			var offset = 50;
			var width = 80;
			var height = 95;
			for(var j=0	; j<10; j++){
				// for only odds shift the x position
				if(j%2==0){
					createBubble((i*width),j*height);
				}else{
					createBubble((i*width)+offset,j*height);
				}
			}
		}
	}
function createBubble(x,y){
	var bubble = document.createElement("div");
	bubble.className = "bubble1";
	document.body.appendChild(bubble);
	bubble.style.left = x+"px";		
	bubble.style.top = y+"px";
	var whichbubnum=parseInt(Math.random()*bub.length)
	bubble.style.backgroundImage="url("+bub[whichbubnum]+")";
	bubble.onclick=function(event){changeImg(whichbubnum); window.setTimeout("changeImg2(event)", 2000)};
	
};
	
	





function changeImg(whichbubnum){
	console.log(event)
	event.target.style.backgroundImage="url("+bubpoped[whichbubnum]+")";
}

function changeImg2(event){
	console.log(event)
	var whichbubnum=parseInt(Math.random()*bub.length)
	event.target.style.backgroundImage="url("+bubpoped[whichbubnum]+")";
}

