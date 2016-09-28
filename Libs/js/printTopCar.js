// 打印头部购物车数据函数
function printTopCar(){
	if($.cookie('shopingCar')){
		var buyGoods=JSON.parse( $.cookie('shopingCar') );
		var buy_num=buyGoods.length;
		$('.buy_bum').html(buy_num);

		function countFinal(){
			console.log(buyGoods);
			var total=0;
			$('.shoppingcar_list').empty();
			for(var i=0;i<buyGoods.length;i++){
				// console.log(buyGoods[i]);
				var singleCount=buyGoods[i].Price*buyGoods[i].Num;
				total+=singleCount;
				var _html='<div class="buyed_goods"> <img src="'+
				buyGoods[i].ImgSrc+'" height="107" width="80" alt=""> <h4>'+
				buyGoods[i].Intro+'</h4> <p>'+
				buyGoods[i].Size+'</p> <span class="buy_bum">'+
				buyGoods[i].Num+'</span>  x  ￥ <span class="singlePrice">'+
				buyGoods[i].Price+'</span> <span class="delete"> 删除 </span> </div> ';
				$('.shoppingcar_list').append(_html);
			}
			$('.total').html(total.toFixed(2));
		}
		countFinal(); 
	}
	
	//删除商品
	$('.delete').click(function(){
		console.log($('.delete').index(this));
		var index=$('.delete').index(this);
		console.log($('.delete').eq(index).parents('.buyed_goods'));
		$('.delete').eq(index).parents('.buyed_goods').remove();
		
		buyGoods.splice(index,1);
		var goodsListJson=JSON.stringify(buyGoods);
		$.cookie('shopingCar',goodsListJson,{expires:30});
		printTopCar();
	}) 

	//购物车的高度
	console.log(buyGoods.length*70)
	$('.shoppingcar').css({
		height:buyGoods.length*70+100,
	})
	
	var settle_accounts_height=$('.shoppingcar').height();
	// 结算按钮
	$('#settle_accounts').css({
		top:settle_accounts_height-40,
		left:85,
	})
	
	//购物车下拉效果
	$('.shopping_bag').hover(function() {
		$('.shoppingcar').stop().slideDown(400);
	}, function() {
		$('.shoppingcar').stop().slideUp(400,function(){
			$('.shoppingcar').hide();
		})
	});
	
	// 鼠标移上去保持显示状态
	$('.shoppingcar').hover(function() {
		$('.shoppingcar').stop()
	}, function() {
		$('.shoppingcar').slideUp(400,function(){
			$('.shoppingcar').hide();
		})
	});	
}