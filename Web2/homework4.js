var con="false";
var arr=new Array("很差","差","一般","满意","非常满意");
var star=document.getElementsByTagName("img");
function starPic(id){
	if(id>2)
	{
		if(con=="false")
		{
			for(var i=0;i<id;i++)
			{
				star[i].src="images/star2.png";
			}
			document.getElementById("1").value=arr[id-1];
		}
	}
	if(id<=2)
	{
		if(con=="false")
		{
			for(var i=0;i<id;i++)
			{
				star[i].src="images/star1.png";
			}
			document.getElementById("1").value=arr[id-1];
		}
	}
}
function qd(id){
	con="true";
	for(var i=0;i<id;i++)
	{
		star[i].src="images/star2.png";
	}
}
function hide(){
	if(con=="false")
	{
		for(var i=0;i<5;i++)
		{
			star[i].src="images/star0.png"
		}
		document.getElementById("1").value="";
	}
}