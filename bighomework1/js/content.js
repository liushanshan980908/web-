window.onload = function(){
	var liNodes = document.getElementsByTagName("li");
	for (var i=0; i<liNodes.length; i++)
	{
		liNodes[i].onmouseover = function(){
			this.className = "subMenuShow";
		}
		liNodes[i].onmouseout = function(){
			this.className = "";
		}
	}
	img.onclick=function(){
		var img=document.getElementById("img");
		var img1=document.getElementById("img1");
		var img2=document.getElementById("img2");
		var ul1=document.getElementById("ul1");
		var ul=document.getElementById("ul");
		if(ul.style.display=="none" && img1.style.display=="none" && img2.style.display=="none" && ul1.style.display=="none")
		{
			ul.style.display="block";
			ul1.style.display="block";
			img1.style.display="block";
			img2.style.display="block";
		}
		else
		{
			ul.style.display="none";
			img1.style.display="none";		
			ul1.style.display="none";
			img2.style.display="none";		
		}
	}
    var $cr=$("#li");
	$cr.click(function(){
		window.location.href = "content1.html";
	})
}