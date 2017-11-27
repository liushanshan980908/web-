window.onload=function(){
	var picScroll=document.getElementById("picScroll");
	var picScroll1=document.getElementById("picScroll1");
	var i=10;
	var move=setInterval(changeToLeft,i);
	function changeToLeft(){
		if(picScroll.scrollLeft>=picScroll1.offsetWidth)
		{
			picScroll.scrollLeft=0;
		}
		else
		{
			picScroll.scrollLeft+=1;
		}
	}
	picScroll.onmouseover=function(){
		clearInterval(move);
	}
	picScroll.onmouseout=function(){
		move=setInterval(changeToLeft,i);
	}
}