$(function(){
	// 刷新页面产生随机数
	createCodeNum();
	
	$('#footer').load('footer.html')
	// $('form').validate();

	$('#codeNum').click(function(){
		createCodeNum();
	})
	$('#getPhoneCode').click(function(){

	});

	// 自动填充账户密码
	if($.cookie('username')){
		$('#username').val($.cookie('username'));
		$('#password').val($.cookie('password'));
	}

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
		
		
		//登陆验证
		var isAccount=false;
		if( $('form').valid() ){
			$.get('userDada/userData.json',function(_data){
				console.log(_data);		
				for(var i in _data){
						console.log( _data[i].username);
						if(user==_data[i].username && pwd==_data[i].password){		 
							isAccount=true;
							console.log(isAccount);
							break;
						}else{
							isAccount=false;
						}
				}
				console.log(isAccount);
				if(isAccount){
					if( $(':checkbox')[0].checked ){
						alert('登录成功，跳到首页');
						$.cookie('username',user,{expires:7});
						$.cookie('password',pwd,{expires:7});
						window.location=('index.html');
					}else{
						alert('登录成功，跳到首页');
						window.location=('index.html');
						return false;
					}
				}else{
					alert('账号或者密码错误');
					return false;
				}
				
			},'json')
		}
		
	});
	
})
