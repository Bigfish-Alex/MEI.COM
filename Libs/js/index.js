
$(function(){
	$('#header').load("header.html")
	
	// $('img').lazyload({
	// 	  placeholder : "../images/loading.gif",
 	//    effect: "fadeIn",
 	//   });

       $("img.lazy").lazyload();

	$(window).scroll(function() {
		/* Act on the event */
		var osTop=$(window).scrollTop();
		// console.log(osTop);
		// console.log($('#float_content').offset().top)
		if(osTop<=200){
			$('#float_content').css({
				top:540-$(window).scrollTop()+"px",
			});
		}
		if(osTop>=600){
			$('.back_to_top').show().slideDown(1000);
		}else{
			$('.back_to_top').hide();
		};
		$('.back_to_top').click(function(event) {
			$(window).scrollTop(0);
		});
	});

	$('.mask_style').hover(function() {
		console.log($(this));
		$('.mask_style_mask',$(this)).show();
		$('.mask_style_img img',$(this)).stop().animate({width: 340, height: 220,top:-20,left:-20}, 400)
	}, function() {
		$('.mask_style_mask',$(this)).hide();
		$('.mask_style_img img',$(this)).stop().animate({width: 320, height: 195,top:0,left:0}, 400)

	});

	$('.about_to_begin_activity').hide().eq(0).show();
	$('.about_to_begin ul').on('click','li',function(){
		console.log($(this).index());
		$(this).css({
			borderBottom: '2px solid #000',
		}).siblings('li').css({
			borderBottom:'none',
		});
		$('.about_to_begin_activity').hide()
		$('.about_to_begin_activity').eq( $(this).index() ).show();
	})

	$('#footer').load('footer.html',function(){
		console.log($('#float_content').offset().top);
		console.log($('#float_content').height());
		var footerHeight=$('#float_content').height();
		console.log(footerHeight);
		$('#footer').css({
					position:'relative',
					top:footerHeight,
		});
		$(window).scroll(function(event) {
			if ($('#float_content').offset().top==540) {
				$('#footer').css({
					position:'relative',
					top:footerHeight,
				});
			}else{
				$('#footer').css({
					position:'relative',
					top:footerHeight-200,
				});
			}			
		});
	});

	// if( $.cookie('username') ){
	// 	console.log('cookie');
	// 	$('.myCountInfo').text('Some text and markup')
	// }	
})