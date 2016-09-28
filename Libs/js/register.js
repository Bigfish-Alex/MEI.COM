$(function(){
	createCodeNum();
	$('#footer').load('../../footer.html')
	// $('form').validate();

	$('#codeNum').click(function(){
		createCodeNum();
	})
	$('#getPhoneCode').click(function(){

	});

	// 生成随机验证码
	function createCodeNum(){
		var randomCode=[];	
		for(var i=0;i<4;i++){
			var ranNum=parseInt(Math.random()*62);
			// console.log(ranNum);
			if(ranNum>=0 && ranNum <=9){
				ranNum=ranNum;
			}else if(ranNum>=10 && ranNum <=35){
				ranNum=String.fromCharCode(ranNum+55);
			}else{
				ranNum=String.fromCharCode(ranNum+61);
			}
			// console.log(ranNum);
			randomCode.push(ranNum);
		}
		var	randomCode1=randomCode.join("");
		$('#codeNum').val(randomCode1); 
	}

	// 生成随机手机验证码
	var PhoneCode
	function createPhoneCode(){
		PhoneCode=parseInt(Math.random()*10)+''+parseInt(Math.random()*10)+''+parseInt(Math.random()*10)+''+parseInt(Math.random()*10);
		console.log("PhoneCode"+' '+'is'+' '+PhoneCode);
	}
	$('#getPhoneCode').click(function(event) {
		/* Act on the event */
		createPhoneCode();
	});


	// 验证表单
	$('form').validate({
		rules:{
			password:{
				required:true,
				rangelength:[6,20],
			},
			confirm_password:{
				equalTo:'#password',
			},
			code:{
				equalTo:'#codeNum',
			}
		},
		messages:{
			password:{
				required:'必填',
				rangelength:'请输入6-20位字符',
			},
			confirm_password:{
				equalTo:'两次输入密码不一致',
			},
			code:{
				equalTo:'验证码输入错误',
			}
		}
	})


	$(':checkbox').attr({
		checked: true,
	});
	
	$('#submitBtn').click(function(event) {
		console.log('submit');
		var user=$('#username').val();
		console.log(user);
		var pwd=$('#password').val();
		console.log(pwd);
		if( $('form').valid() && $(':checkbox')[0].checked && $('#phoneCode').val()==PhoneCode   ){
			alert('注册成功，跳到首页');
			$.cookie('username',user);
			$.cookie('password',pwd);
			window.location=('index.html');
		}else{
			alert('注册失败,返回重填')
		}
	});
})
