var body=document.body;
body.style.margin="0px 0px 0px 0px"

var maindiv=document.createElement("div");
maindiv.style.height="500px";
maindiv.style.width="100%";
maindiv.style.backgroundColor="antiquewhite";

var header=document.createElement("div");
header.style.height="100px";
header.style.width="100px";
header.style.borderRadius="50px";
header.style.backgroundColor="aqua";
header.style.position="fixed";

var navigationBar=document.createElement("div");
navigationBar.style.height="200px";
navigationBar.style.width="200px";
navigationBar.style.borderRadius="100px";
navigationBar.style.opacity="0";
navigationBar.style.backgroundColor="blueviolet";
navigationBar.style.position="absolute";
navigationBar.style.left="-50px";
navigationBar.style.top="-50px";
header.appendChild(navigationBar);

header.onclick=function(){
	if(headerOnclickCount%2==0){
		navigationBar.style.opacity="0.1";
	}else{
		navigationBar.style.opacity="0";
	}
	headerOnclickCount++;
}
var headerOnclickCount=0;
header.onmousedown=function(){
	var x=event.clientX-header.offsetLeft;
	var y=event.clientY-header.offsetTop;
	
	document.onmousemove=function(){
		header.style.left=event.clientX-x+"px";
		header.style.top=event.clientY-y+"px";
	}
}

header.onmouseup=function(){
	document.onmousemove=null;
	document.onmouseup = null;
}

body.appendChild(header);
body.appendChild(maindiv);