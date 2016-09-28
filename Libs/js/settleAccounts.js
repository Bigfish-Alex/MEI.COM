$(function(){
	$('#header').load('header.html');
	$('#footer').load('footer.html');

	// 查询cookie
	if( $.cookie('shopingCar') ){
		var buyGoods=JSON.parse($.cookie('shopingCar'));
		for(var i=0;i<buyGoods.length;i++){
			console.log(buyGoods[i].Num);
				console.log(buyGoods[i].Price);
				var _html='<tr> <td> <img src="'+
				buyGoods[i].ImgSrc+'" alt=""> <p class="brand_name"> '+
				buyGoods[i].BrandName+' </p> <p class="intro"> '+
				buyGoods[i].Intro+' </p> <p class="size"> 尺寸：'+
				buyGoods[i].Size+' </p> </td> <td>￥<span class="single_price">'+
				buyGoods[i].Price.toFixed(2)+'</span></td> <td> <div class="fa fa-minus num_minus"></div> <input type="text" value="'+
				buyGoods[i].Num+'" class="buy_num"> <div class="fa fa-plus num_add"></div> </td> <td></td> <td>￥<span class="single_count">1737.00</span></td> <td><span class="fa fa-close remove"></span></td> </tr>';
				$(_html).appendTo('.table_count table')
		}

		// 计算价格
		function count(){
			// console.log($('.single_price').length)
			// console.log($('.single_count').length)
			var final_money=0;
			for(var i=0;i<$('.single_price').length;i++){
				var singleCount=$('.single_price').eq(i).html()*$('.buy_num').eq(i).val();
				$('.single_count').eq(i).html(singleCount.toFixed(2));
				final_money+=singleCount;
			}
			// console.log(final_money);
			$('.final_price').html(final_money.toFixed(2));
			$('.total').html(final_money.toFixed(2));
			$('.buy_num').html(buyGoods.length);
		}
		count();

		// 减少数量
		$('.num_minus').click(function(){
			var buy_num=$(this).siblings('input').val();
			buy_num--;
			if(buy_num<=1){
				buy_num=1;
			}
			$(this).siblings('input').val(buy_num);
			count();
			printTopCar();
		})

		// 添加数量
		$('.num_add').click(function(){
			// console.log( $(this).siblings('input').val() );
			var buy_num=$(this).siblings('input').val();
			buy_num++;
			$(this).siblings('input').val(buy_num);
			count();
			printTopCar();
		})

		//输入改变数量
		$('.buy_num').blur(function(event) {
			count();
			printTopCar();
		});

		// 删除选取的商品
		$('.remove').click(function() {
			// console.log($('.remove').index(this));
			$(this).parents('tr').remove();
			// console.log(buyGoods);
			buyGoods.splice($('.remove').index(this),1);
			// console.log(buyGoods);
			var goodsListJson=JSON.stringify(buyGoods);
			$.cookie('shopingCar',goodsListJson,{expires:30});
			count();
			printTopCar();
		});			
	}else{
		console.log('没有商品');
	}


})
