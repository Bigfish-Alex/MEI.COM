$(function(){
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
})
