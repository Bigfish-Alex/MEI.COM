$(function(){
	$(window).scroll(function() {
		var osTop=$(window).scrollTop();
		if(osTop>=110){
			$('.header_menu').css({
				position: 'fixed',
				top:'0px',
			});
		}else{
			$('.header_menu').css({
				position: 'relative',
			});
		}
	});
	
	// hover显示下载app
	$('.phoneV').hover(function() {
		/* Stuff to do when the mouse enters the element */
		$('.scan_dl_app').show();
	}, function() {
		$('.scan_dl_app').hide();
		/* Stuff to do when the mouse leaves the element */
	});
	
	//头部的下拉菜单
	$('.header_menu ul').on('mouseover', 'a', function(event) {
		/* Act on the event */
		var index=$('.header_menu ul a').index(this);
		console.log(index);
		console.log($(this).offset().left);
		if(index==0){
			return false;
		}else{
			$('.menu_list').eq(index-1).show();
			$('.menu_list').eq(index-1).css({
				left: $(this).offset().left,
				top:$(this).offset().top+20+'px',
			});
		}
	});
	$('.header_menu ul').on('mouseout', 'a', function(event) {
		var index=$('.header_menu ul a').index(this);
		if(index==0){
			return false;
		}else{
			$('.menu_list').eq(index-1).hide();
		}
	});

	$('.menu_list').on('mouseover', function() {
		console.log('in');
		$(this).show();
		/* Act on the event */
	});
	$('.menu_list').on('mouseout', function() {
		$(this).hide();
		/* Act on the event */
	});
	
	

	
	//显示我的账户
	if( $.cookie('username') ){
		$('.myCountInfo').html("我的账户").css({
			color:'red',
			fontSize: '12px',
			cursor:'pointer'
		});
		$('.login_state').html("　退出　｜").css({
			cursor:'pointer',
			fontSize:'12px',
		})

		$('.myCountInfo').hover(function() {
			$('.my_count_menu').show();
		}, function() {
			$('.my_count_menu').hide();
		});

		$('.my_count_menu').hover(function() {
			$('.my_count_menu').show();
		}, function() {
			$('.my_count_menu').hide();
		});

	}
	
	//退出登录
	$('.login_state').click(function(){
		if( $.cookie('username') ){
			// console.log('unlogin');
			$.cookie('username','',{expires:-1});
			$.cookie('password','',{expires:-1});
//			$.cookie('the_cookie', '', { expires: -1 });
			window.location.reload();
		}
	})
	
//**************购物袋********************
	//	console.log($('.header_menu').offset().top)	
	//调用打印头部购物车数据的函数
	printTopCar();
	
})