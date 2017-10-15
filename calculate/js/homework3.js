var str="";
var resultNum="";
function showData(id){
	str=str+document.getElementById(id).value;
	document.getElementById("result").innerHTML=str;
}
function calculate(){
	document.getElementById("result").innerHTML='';
	var resultNum=eval(str);
	str="";
	document.getElementById("result").innerHTML=resultNum;
	str=resultNum;
}
function clearData(){
	document.getElementById("result").innerHTML=0;
	str='';
}

