$(document).ready(function(){
	var phone = $('input[name="phone"]');
	var sp=document.getElementsByTagName('span');
	phone.blur(function(){
		if(phone.val()=="")
		{
			if(sp.length>3)
			{
				sp[0].remove();	
				var span1=$('<span class="color">手机号不能为空</span>');		
				phone.after(span1);						
			}		
		}
		else if(phone.val()!="" && phone.val().length!=11)
		{
			if(sp.length>3)
			{
				sp[0].remove();	
				var span1=$('<span class="color">手机号长度应为11位</span>');		
				phone.after(span1);						
			}		
		}
		else
		{
			if(sp.length>3)
			{
				sp[0].remove();
				var span2=$('<span></span>');
				phone.after(span2);
			}
		}
	})
	var email=$('input[name="email"]');
	email.blur(function(){
		if(email.val()=="")
		{
			if(sp.length>3)
			{
				sp[1].remove();						
			}
			var span1=$('<span class="color">邮箱不能为空</span>');		
			email.after(span1);			
		}
		else
     	{
			if(sp.length>3)
			{
				sp[1].remove();
				var span2=$('<span></span>');
				email.after(span2);
			}
		}
	})
	var Id=$('input[name="Id"]');
	Id.blur(function(){
		if(Id.val()=="")
		{
			if(sp.length>3)
			{
				sp[2].remove();						
			}
			var span1=$('<span class="color">身份证号码不能为空</span>');		
			Id.after(span1);							
		}
		else
		{
			if(sp.length>3)
			{
				sp[2].remove();
				var span2=$('<span></span>');
				Id.after(span2);
			}
		}
	})
	var passw=$('input[name="pasw"]');
	passw.blur(function(){
		if(passw.val()=="")
		{
			if(sp.length>3)
			{
				sp[3].remove();						
			}
			var span1=$('<span class="color">密码不能为空</span>');		
			passw.after(span1);			
		}
		else
		{
			if(sp.length>3)
			{
				sp[3].remove();
				var span2=$('<span></span>');
				passw.after(span2);
			}
		}
	})
    var $cr=$("#mo");
	$cr.click(function(){
		if(phone.val()!="" && phone.val().length==11 && email.val()!="" && Id.val()!="" && passw.val()!="")
		{
			window.location.href = "content.html";
		}
		else
		{
			alert("请将信息补充完整");			
		}
	})
})