$(function(){
	$('#header').load('header.html',function(){
		$('.header_menu a').eq(3).css('color','red');
	});

	$(window).scroll(function(){
		var topHeight=$(window).scrollTop();
		if(topHeight<=200){
			$('.float_content').css({
				marginTop:420-topHeight,
			});
		}
	})

	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 1,
        centeredSlides: true,
        autoplay: 3500,
        speed:2000,
        autoplayDisableOnInteraction: false
    });

	$('.mask_style').hover(function() {
		console.log($(this));
		$('.mask_style_mask',$(this)).show();
		$('.mask_style_img img',$(this)).stop().animate({width: 340, height: 220,top:-20,left:-20}, 400)
	}, function() {
		$('.mask_style_mask',$(this)).hide();
		$('.mask_style_img img',$(this)).stop().animate({width: 320, height: 195,top:0,left:0}, 400)

	});

	$('#footer').load('footer.html');
})