$(function(){
	$('#header').load('header.html',function(){
		$('.header_menu a').eq(1).css('color','red');
	});
	
	$('.mask_style').hover(function() {
		console.log($(this));
		$('.mask_style_mask',$(this)).show();
		$('.mask_style_img img',$(this)).stop().animate({width: 340, height: 220,top:-20,left:-20}, 400)
	}, function() {
		$('.mask_style_mask',$(this)).hide();
		$('.mask_style_img img',$(this)).stop().animate({width: 320, height: 195,top:0,left:0}, 400)

	});
	
	$('#about_to_begin_container').load('aboutToBegin.html');
	$('#footer_container').load('footer.html');
})
