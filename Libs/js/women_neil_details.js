$(function(){
	$('#header').load('header.html');
	$('#footer').load('footer.html');

	// 主图的切换功能
	$('.bigImg').hide().eq(0).show();

	var imgIndex=0;
	$('.leftBtn').click(function(){
		imgIndex--;
		if(imgIndex<=0){
			imgIndex=0;
		}
		console.log(imgIndex);
		turnToImg(imgIndex);
	})

	$('.rightBtn').click(function(){
		imgIndex++;
		if(imgIndex==4){
			imgIndex=3;
		}
		console.log(imgIndex);
		turnToImg(imgIndex);
	})

	function turnToImg(imgIndex){
		$('.bigImg').hide().eq(imgIndex).show();
	}

	// 选择商品信息

	// 选择颜色 color_check
	$('.color_pic').click(function(){
		$('.color_pic').toggleClass('color_check');
	})

	// 选择码数 size_check
	$('.size ul').on('click', 'li', function(event) {
		event.preventDefault();
		$('.size ul li').removeClass('size_check')
		$('.size ul li').css({
			background: '#eee',
			color: 'black',
			cursor:'pointer'
		});
		$(this).toggleClass('size_check');
		$(this).css({
			background: 'black',
			color: 'white',
			cursor:'pointer'
		});
		/* Act on the event */
	});

	// 数量更改
	$('.num_minus').click(function(){
		var num=$('.num').val();
		num--;
		if(num<=1){
			num=1;
		}
		$('.num').val(num);
	})

	$('.num_add').click(function(){
		var num=$('.num').val();
		num++;
		$('.num').val(num);
	})

	// 加入购物袋
	$('.sendTo_shopping_car').click(function(){
		// console.log('sendTo_shopping_car');
		// console.log($('.color_check').length);
		if( $('.color_check').length!=0 ){
			var color='balck';
		}
		var size=$('.size_check').html();
		var num=$('.num').val();
		if(color && size && num){
			console.log("color--"+color+"size--"+size+"num--"+num);

			function printTopBag(){
				var buyGoods=JSON.parse( $.cookie('shopingCar') );
				var buy_num=buyGoods.length;
				$('.buy_bum').html(buy_num);

				function countFinal(){
					console.log(buyGoods);
					var total=0;
					for(var i=0;i<buyGoods.length;i++){
						// console.log(buyGoods[i]);
						var singleCount=buyGoods[i].Price*buyGoods[i].Num;
						total+=singleCount;
					}
					$('.total').html(total.toFixed(2));
				}
				countFinal();
			}
				 
				// 将所选择的商品信息添加到cookie文件
				var goodsList=[];
				var goodsInfo={};
				goodsInfo.ID=1001;
				goodsInfo.Size=size;
				goodsInfo.Price=5676.00;
				goodsInfo.Num=num;
				goodsInfo.ImgSrc="Libs/images/women_neil_details/black.jpg";
				goodsInfo.BrandName="NEIL BARRETT";
				goodsInfo.Intro="黑色平驳领双排扣裙摆大衣";
				goodsList.push(goodsInfo);
				var goodsListJson=JSON.stringify(goodsList);
				// console.log(goodsListJson);

				// 判断是否存在购物车cookie
				if( $.cookie('shopingCar') ){
					var goodsInfo={};
					goodsInfo.ID=1001;
					goodsInfo.Size=size;
					goodsInfo.Price=5676.00;
					goodsInfo.Num=num;
					goodsInfo.ImgSrc="Libs/images/women_neil_details/black.jpg";
					goodsInfo.BrandName="NEIL BARRETT";
					goodsInfo.Intro="黑色平驳领双排扣裙摆大衣";
					var goodsList=JSON.parse($.cookie('shopingCar')) ;
					goodsList.push(goodsInfo);
					var goodsListJson=JSON.stringify(goodsList);
					$.cookie('shopingCar',goodsListJson,{expires:30});
					// console.log($.cookie('shopingCar'));
					printTopBag();
					printTopCar();

					// 购物车下拉
					console.log($('.shoppingcar').height());
					var height=$('.shoppingcar').height();
					$('.shoppingcar').show();
					$('.shoppingcar').css({
						height: 0,
					});
					$('.shoppingcar').animate(
						{
							height: height
						}, 400)
					var timer=window.setTimeout(function(){
						$('.shoppingcar').slideUp(400);
					},2000)
				}else{
					$.cookie('shopingCar',goodsListJson,{expires:30});
					printTopBag();
					printTopCar();
				}

		}else{
			console.log('提交失败')
		}

	
	})
})